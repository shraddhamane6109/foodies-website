import foodImg from "../assets/images/img1.png";

function Hero() {
  return (
    <section
      id="h"
      className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 md:py-28 bg-white"
    >
      {/* Left */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
          Meet, Eat & Enjoy The{" "}
          <span className="text-orange-500">True Taste</span>
        </h1>

        <p className="mt-4 text-gray-600 text-base sm:text-lg">
          Freshly prepared meals with love, delivered hot to your doorstep.
        </p>

       <button
  onClick={() => document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" })}
  className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
>
  Explore Menu
</button>

      </div>

      {/* Right */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src={foodImg}
          alt="food"
          className="w-[250px] sm:w-[320px] md:w-[450px] drop-shadow-xl"
        />
      </div>
    </section>
  );
}

export default Hero;
