import Searchbar from "./Searchbar";

export default function Hero() {
  return(
    <div className="flex flex-col justify-center items-center h-screen space-y-8 px-4">
      <h1 className="font-bold  text-white text-4xl">Hey userName!</h1>
      <h2 className="font-semibold text-white text-2xl">Check your studying progress below</h2>
      <Searchbar />
    </div> 
  );
}