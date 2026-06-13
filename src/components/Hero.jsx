function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

        {/* Left */}
        <div className="flex-1 text-center lg:text-left">

          <h1 className="text-[48px] md:text-[60px] lg:text-[70px] leading-tight font-light text-[#1A202C]">

            Great{" "}

            <span className="bg-linear-to-r from-[#F76680] to-[#57007B] bg-clip-text text-transparent font-bold">
              Product
            </span>

            {" "}is

            <br />

            <span className="font-bold">
              built by great
            </span>{" "}

            <span className="bg-linear-to-r from-[#F76680] to-[#57007B] bg-clip-text text-transparent font-bold">
              teams
            </span>

          </h1>

          <p className="mt-10 text-[#718096] text-[18px] leading-10 max-w-130">
            We help build and manage a team of world-class developers
            to bring your vision to life
          </p>

          <button className="mt-12 px-10 py-4 rounded-lg bg-linear-to-r from-[#57007B] to-[#3B82F6] text-white font-medium shadow-lg cursor-pointer">
            Let’s get started!
          </button>

        </div>

        {/* Right */}
        <div className="flex-1 flex justify-center">
          <img
            src="/hero.png"
            alt="Hero"
            className="w-full max-w-162.5"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;