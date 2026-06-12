
function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-20">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">

          <p className="text-sm md:text-base text-gray-500 mb-4">
            Great Software Is Built By Great Teams
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            We Help Build And Manage A Team Of
            <span className="bg-linear-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              {" "}World-Class Developers
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-base md:text-lg max-w-xl mx-auto lg:mx-0">
            Our team specializes in building scalable and high-quality
            digital solutions that help businesses grow faster.
          </p>

          <button className="mt-8 cursor-pointer px-8 py-4 rounded-lg bg-linear-to-r from-purple-600 to-blue-500 text-white font-medium shadow-lg hover:scale-105 transition">
            Let’s Get Started
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/public/hero.png"
            alt="Hero"
            className="w-full max-w-md lg:max-w-xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;