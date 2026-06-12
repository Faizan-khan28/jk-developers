import { FaPlay } from "react-icons/fa6";
function About() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Side */}
          <div className="flex-1 max-w-130">
            <div className="w-17.5 h-1 bg-linear-to-r from-[#F76680] to-[#57007B] mb-8"></div>

            <h2 className="text-[32px] md:text-[35px] leading-13.75 text-[#1A202C]">
              Leading companies trust us
              <br />
              <span className="font-bold">to develop software</span>
            </h2>

            <p className="mt-8 text-[#718096] leading-9 text-[18px]">
              We{" "}
              <span className="text-[#F76680]">add development capacity</span>{" "}
              to tech teams. Our value isn’t limited to building teams but is
              equally distributed across the project lifecycle. We are a custom
              software development company that guarantees the successful
              delivery of your project.
            </p>

            <button className="mt-10 flex items-center gap-3 text-[#57007B] font-semibold">
              See more Informations
              <span>→</span>
            </button>
          </div>

          {/* Right Side */}
          <div className="relative flex-1 flex justify-center">
            {/* Pink Shape */}
            <img
              src="/Rectangle 7.png"
              alt=""
              className="absolute -right-30 -top-10 w-[320px] md:w-105 z-0"
            />

            {/* Team Image */}
            <div className="relative z-10">
              <img
                src="/about.png"
                alt="Team"
                className="rounded-xl w-full max-w-137.5"
              />

              {/* Play Button */}
              <button className="absolute inset-0 m-auto w-18 h-18 rounded-full shadow-lg flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#57007B] flex items-center justify-center text-white">
                  <FaPlay />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
