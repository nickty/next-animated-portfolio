import Image from "next/image";

const Homepage = () => {
  return (
    <div className="flex flex-col lg:flex-row h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* image container */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src="/hero.png" fill className="object-contain" />
      </div>

      {/* text container */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          Crafting Digital Experiences, Applying Next.
        </h1>
        <p className="md:text-xl">
          Welcome to Mizan's canvas, where innovation and creativity converge
        </p>

        <div className="w-full flex gap-4">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            View By Work
          </button>
          <button className="p-4 rounded-lg ring-1 ring-black">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
