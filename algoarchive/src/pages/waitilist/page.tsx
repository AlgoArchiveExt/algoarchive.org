import Head from 'next/head';

export default function Waitlist() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#333333]">
      <head>
        <title>Join the Waitlist</title>
        <meta name="description" content="Sign up for the waitlist and stay updated!" />
      </head>
      <main className="text-center p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Join the Waitlist</h1>
        <p className="text-lg mb-6">Sign up below to be the first to know when we launch!</p>
        <iframe
          src="https://tally.so/embed/m6RM2A?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          width="100%"
          height={500}
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Waitlist Form"
          className="rounded-lg"
        ></iframe>
      </main>
    </div>
  );
}
