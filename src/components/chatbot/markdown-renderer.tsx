import React from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Define the MarkdownRendererProps interface
interface MarkdownRendererProps {
  content: string;
}

// Define the MarkdownRenderer component
const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  // Define the components used by ReactMarkdown
  const components: Components = {
    h1: ({ node, ...props }) => <h1 className="text-3xl font-bold " {...props} />,
    h2: ({ node, ...props }) => <h2 className="text-2xl font-bold " {...props} />,
    h3: ({ node, ...props }) => <h3 className="text-xl font-bold " {...props} />,
    h4: ({ node, ...props }) => <h4 className="text-lg font-bold " {...props} />,
    h5: ({ node, ...props }) => <h5 className="text-md font-bold " {...props} />,
    h6: ({ node, ...props }) => <h6 className="text-sm font-bold " {...props} />,
    p: ({ node, ...props }) => <p {...props} />,
    a: ({ node, ...props }) => <a className="text-blue-500 underline" {...props} />,
    strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
    em: ({ node, ...props }) => <em className="italic" {...props} />,
    code: ({ inline, className, children, ...props }: any) => {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter
          style={tomorrow}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).trim()} {/* Trim extra whitespace */}
        </SyntaxHighlighter>
      ) : (
        <code className="bg-gray-200 text-blue-500 rounded p-1 font-mono scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100" {...props}>
          {String(children).trim()} {/* Trim extra whitespace */}
        </code>
      );
    },
  };

  return (
    <ReactMarkdown components={components}>
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;