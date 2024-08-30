import Searchbar from "./Searchbar";

export async function getServerSideProps() {
  try {
    const response = await fetch('https://api.algoarchive.org/api/v1/solutions/ewu694/LeetCode/', {
      method: 'GET',
      headers: {
        'Authorization': `${process.env.GITHUB_ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const submissions = await response.json();
    console.log(submissions);
    return { props: { submissions } };
  } catch (error) {
    console.error('Error when fetching solutions:', error);
    return { props: { error: 'Failed to fetch your submissions' } };
  }
}

export default function Hero({ submissions, error }: { submissions: any[], error: string }) {
  console.log(submissions, error);
  return(
    <div className="flex flex-col justify-center items-center h-screen space-y-8 px-4">
      <h1 className="font-bold  text-white text-4xl">Hey userName!</h1>
      <h2 className="font-semibold text-white text-2xl">Check your studying progress below</h2>
      <Searchbar />
    </div> 
  );
}