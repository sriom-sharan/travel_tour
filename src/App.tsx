import Navbar from "./components/Navbar";
import heroAvif from "./assets/hero.avif";
import heroJpg from "./assets/hero.jpg";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="bg-white w-full h-full">
      <Navbar />
      <div className="flex md:flex-row flex-col w-full  mt-[79px] ">
        <div className="flex-1 h-1/2  md:h-full">
          <picture className="w-full lg:h-full ">
            {/* <source className="lg:object-cover object-cover" srcSet={heroAvif} type="image/avif" /> */}
            <img
              src={heroJpg}
              alt="Hero Image"
              className="w-full h-full object-cover" 
            />
          </picture>
        </div>
        <div className="flex items-center font-spartan flex-col lg:gap-8 gap-4 justify-center my-auto min-h-1/2  lg:h-full flex-1 p-4 py-6 lg:p-10 ">
          <h1 className="lg:text-7xl xl:text-8xl md:text-6xl text-5xl text-center">Discover Your Destination</h1>
          <p className="font-normal md:text-xl">Crafting Tailored Travel Experiences</p>
          <Button className="bg-transparent font-normal md:w-80 w-48 py-6  rounded-full border-black text-normal md:text-xl" variant={"outline"}>Explore</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
