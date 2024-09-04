import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Join the Waitlist | AlgoArchive',
  description: 'Sign up for the waitlist and stay updated!',
};

export default function Waitlist() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-algo-gray">
      <main className="rounded-lg bg-white p-6 text-center shadow-lg">
        <h1 className="mb-4 text-3xl font-bold">Join the Waitlist</h1>
        <p className="mb-6 text-lg">Sign up below to be the first to know when we launch!</p>
        <iframe
          src="https://tally.so/embed/m6RM2A?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          width="100%"
          height={500}
          title="Waitlist Form"
          className="overflow-auto rounded-lg"
        />
      </main>
    </div>
  );
}
