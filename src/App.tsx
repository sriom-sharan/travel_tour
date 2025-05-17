import Navbar from "./components/Navbar";
import heroAvif from "./assets/hero.avif";
import heroJpg from "./assets/hero.jpg";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="bg-white w-full ">
      <Navbar />
      <div className="flex lg:flex-row flex-col w-full h-[110vh] mt-[79px]">
        <div className="flex-1 h-1/2 lg:h-full">
          <picture className="w-full lg:h-full ">
            <source className="lg:object-cover object-cover" srcSet={heroAvif} type="image/avif" />
            <img
              src={heroJpg}
              alt="Hero Image"
              className="w-full h-full object-cover " // ✅ this makes it work
            />
          </picture>
        </div>
        <div className="flex items-center font-spartan flex-col lg:gap-8 gap-4 justify-center h-1/2 lg:h-full flex-1  lg:p-10">
          <h1 className="text-8xl text-center">Discover Your Destination</h1>
          <p className="font-normal text-xl">Crafting Tailored Travel Experiences</p>
          <Button className="bg-transparent font-normal w-80 py-6  rounded-full border-black text-normal text-xl" variant={"outline"}>Explore</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
