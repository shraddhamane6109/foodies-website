function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-16 py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-orange-500 font-semibold uppercase">
            Our Story
          </h2>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            We’re on a mission to redefine{" "}
            <span className="underline decoration-orange-400">
              fast food
            </span>
          </h1>

          <p className="text-gray-600 text-base md:text-lg">
            At Foodies, we believe food is more than just fuel—it's an experience.
            We bring fresh, delicious meals straight to your doorstep.
          </p>

          <button className="text-orange-600 font-semibold border-b-2 border-orange-600 hover:text-orange-700">
            Learn more →
          </button>
        </div>

        {/* Right */}
        <div className="grid grid-cols-2 gap-4">
          {["100% Organic", "24/7 Support", "30+ Cities", "Free Delivery"].map(
            (item, i) => (
              <div
                key={i}
                className="p-6 bg-gray-50 rounded-2xl text-center shadow-sm"
              >
                <h3 className="text-xl font-bold text-orange-500">
                  {item.split(" ")[0]}
                </h3>
                <p className="text-sm text-gray-500 uppercase">
                  {item.split(" ").slice(1).join(" ")}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default About;
