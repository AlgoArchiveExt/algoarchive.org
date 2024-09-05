'use client'
import { useState, useEffect, useRef } from "react";
import MarkdownRenderer from "@/src/components/chatbot/markdown-renderer";
import ThreeDots from "@/src/components/chatbot/three-dots";
import Nav from "@/src/components/dashboard/Navbar";
import { Chatbot } from "@/src/components/dashboard/Icons";
import { AlgoArchive } from "@/src/components/chatbot/AlgoArchive";
import AuthRequirement from "@/src/components/AuthRequirement";
import { Button } from "@nextui-org/react";

const MAX_MESSAGES = 100;

const Chat = () => {
  const [messages, setMessages] = useState([{
    role: 'assistant',
    content: `Hi, I'm the AlgoArchive support agent, how can I assist you today?`
  }]);

  const [message, setMessage] = useState('');
  const [chatboxFocus, setChatboxFocus] = useState(false)
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const appendMessageToLocalStorage = (newMessage: any) => {
    const existingMessages = JSON.parse(localStorage.getItem('contextMessages') || '[]');
    // Add new message and truncate if necessary
    const updatedMessages = [...existingMessages, newMessage].slice(-MAX_MESSAGES);
    localStorage.setItem('contextMessages', JSON.stringify(updatedMessages));
  };

  // Load history from local storage
  const loadHistoryFromLocalStorage = () => {
      const storedMessages = JSON.parse(localStorage.getItem('contextMessages') || '[]');
      setMessages(storedMessages.length ? storedMessages : [{
        role: 'assistant',
        content: `Hi, I'm the AlgoArchive support agent, how can I assist you today?`
      }]);
    };

  useEffect(() => {
    loadHistoryFromLocalStorage();
  }, []);

  // Set or retrieve sessionId on component mount
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);


  async function readStream(stream: ReadableStream<Uint8Array>, callback?: Function) {
    const reader = stream.getReader();
    const decoder = new TextDecoder();

    let result = '';
    while (true) {
      const { done, value } = await reader.read();
      if (done) return result;
      const text = decoder.decode(value, { stream: true });
      if (callback) {
        callback(text);
      }
      result += text;
    }
  }

  // RAG: Give more context to the LLM for better search results.
  // Before sending the LLM a message, query a vector database for relevant embeddings related to the message.
  const sendMessage = async () => {
    if (message.trim() === ''){
      alert('Input field is empty');
      return null;
    }
    
    let messageWithContext: string;
    appendMessageToLocalStorage({ role: 'user', content: message });
    setMessages([
      ...messages,
      {role: 'user', content: message},
      {role: 'assistant', content: '...'},
    ]);

    setMessage('');

    setLoading(true);

    // Get context
    try {
      const retrieveContextResponse = await fetch("/api/rag/context", {
        method: "POST",
        body: JSON.stringify({ message: message })
      });
      const contextStream = retrieveContextResponse.body!;  // ! operator lol

      const context = await readStream(contextStream);
      
      if (context) {
        messageWithContext = `Here's context about the last conversations. Context: ${context}. Message: ${message}`;
      } else {
        messageWithContext = message;
      }
    } catch (err) {
      console.error(`Error getting context: ${err}`);
      messageWithContext = message;
    }


    // Get LLM message
    const chatResponse = await fetch('/api/chat', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([...messages, {role: 'user', content: messageWithContext}])
    })

    const chatStream = chatResponse.body!; // ! operator lol

    let result = await readStream(chatStream);
    setMessages(prevMessages => {
      const updatedMessages = prevMessages.slice(0, -1);  // Remove the previous placeholder message
      return [
        ...updatedMessages,
        { role: 'assistant', content: result }
      ];
    });
    appendMessageToLocalStorage({ role: 'assistant', content: result });
    
    // Embed result in vector db
    try {
      await fetch("/api/rag/embedText", {
        method: "POST",
        body: JSON.stringify({ text: [result] })
      });
    } catch (err) {
      console.error(`Error posting result to Vector DB: ${err}`)
      setMessages(prevMessages => {
        const updatedMessages = prevMessages.slice(0, -1);  // Remove the previous placeholder message
        return [
          ...updatedMessages,
          { role: 'assistant', content: 'Error retrieving response.' }
        ];
      });
      appendMessageToLocalStorage({ role: 'assistant', content: 'Error retrieving response.' });
    } finally {
      setLoading(false);
    }

    return result

  }

  const handleClearHistory = () => {
    localStorage.removeItem('contextMessages');
    setMessages([{
      role: 'assistant',
      content: `Hi, I'm the AlgoArchive support agent, how can I assist you today?`
    }]);
  };


  // Enter key sends message
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && message.trim()) {
      e.preventDefault();
      sendMessage();
    }
  };

  const onFocus = () => setChatboxFocus(true)
  const onBlur = () => setChatboxFocus(false)

  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center bg-bg-primary algoarchive">
      <Nav />
      <div className="flex flex-col w-1/2 h-full m-8 border border-algo-yellow shadow-lg bg-bg-primary p-6 rounded-2xl gap-6 pb-8">
        <div id="top-chatbox-wrapper" className="flex flex-row justify-between h-30 items-center">
          <Chatbot />
          <p className='pl-3 text-xl font-extrabold text-white'>AI Companion</p>
            <Button
                className="h-full bg-red-400 text-white p-4 rounded-full shadow-lg hover:bg-red-900 transition-colors duration-300 right-0" 
                onPress={handleClearHistory}
            >
                Clear History
            </Button>
        </div>
        
        <div
          id="messages-area"
          className="flex flex-col gap-4 flex-grow overflow-auto max-h-full scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === 'assistant' ? 'self-start' : 'self-end'
              }`}
            >
              <div
                className={`${
                  message.role === 'assistant'
                    ? 'bg-brand-primary text-white'
                    : 'bg-algo-disabled text-white'
                } rounded-xl p-4 max-w-xs shadow-md break-words scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100`}
              >
                {message.content === '...' && loading ? (
                  <ThreeDots />
                ) : (
                  <MarkdownRenderer content={message.content} />
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
         <div id="user-input-area" className="flex flex-row gap-2">
          <input 
            type="text"
            placeholder="Enter a message"
            className="bg-bg-primary flex-grow text-white p-4 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-algo-yellow"
            value={message}
            onFocus={() => setChatboxFocus(true)}
            onBlur={() => setChatboxFocus(false)}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={loading}
          />
          <Button
            className={`bg-algo-yellow h-full text-white p-4 rounded-2xl shadow-lg transition-colors duration-300 ${
              (loading || message.trim() === '') && 'bg-gray-400'
            }`}
            onPress={sendMessage}
            isDisabled={loading || message.trim() === ''}
          >
            Send
          </Button>
        </div>
      </div>
    </main>
  );
}

export default AuthRequirement(Chat);