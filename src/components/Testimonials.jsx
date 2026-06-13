import { useState } from "react";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

const testimonials = [
  {
    image: "/Ellipse3.png",
    name: "Romeena De Silva",
    role: "Janet Cosmetics",
  },
  {
    image: "/Ellipse3.png",
    name: "Romeena De Silva",
    role: "Janet Cosmetics",
  },
  {
    image: "/imran.png",
    name: "Imran Khan",
    role: "Software Engineer",
  },
  {
    image: "/Ellipse3.png",
    name: "Romeena De Silva",
    role: "Janet Cosmetics",
  },
  {
    image: "/Ellipse3.png",
    name: "Romeena De Silva",
    role: "Janet Cosmetics",
  },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(2);

  const nextTestimonial = () => {
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-[#F9F9FF] py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Line */}
        <div className="w-17.5 h-1 bg-linear-to-r from-[#F76680] to-[#57007B] mx-auto mb-6"></div>

        {/* Heading */}
        <h2 className="text-center text-[32px] md:text-[35px] text-[#1A202C]">
          Why customers love
          <br />
          <span className="font-bold">
            working with us
          </span>
        </h2>

        {/* Quote */}
        <div className="max-w-3xl mx-auto mt-12 text-center relative">
          <span className="absolute -left-4 top-0 text-5xl text-[#F76680]">
            ❝
          </span>

          <p className="text-[#718096] leading-9 text-[18px] px-8">
            Without any doubt I recommend Alcaline Solutions as one of
            the best web design and digital marketing agencies. One of
            the best agencies I've come across so far. Wouldn't be
            hesitated to introduce their work to someone else.
          </p>

          <span className="absolute -right-4 bottom-0 text-5xl text-[#F76680]">
            ❞
          </span>
        </div>

        {/* Arrows */}
        <div className="flex justify-between items-center mt-12">
          <button
            type="button"
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full border border-[#57007B] text-[#57007B] flex items-center justify-center hover:bg-[#57007B] hover:text-white transition"
          >
            <FaLongArrowAltLeft />
          </button>

          <button
            type="button"
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full bg-[#57007B] text-white flex items-center justify-center hover:scale-105 transition"
          >
            <FaLongArrowAltRight />
          </button>
        </div>

        {/* Profiles */}
        <div className="flex justify-center gap-10 mt-12 min-h-42.5 flex-wrap md:flex-nowrap">
          {testimonials.map((person, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-300 ${
                index === activeIndex
                  ? "opacity-100 scale-105"
                  : "opacity-40"
              }`}
            >
              <img
                src={person.image}
                alt={person.name}
                className={`rounded-full object-cover mx-auto transition-all duration-300 ${
                  index === activeIndex
                    ? "w-20 h-20"
                    : "w-16 h-16"
                }`}
              />

              <div className="text-yellow-400 mt-3 text-sm">
                ⭐⭐⭐⭐⭐
              </div>

              <h3
                className={`mt-2 font-semibold ${
                  index === activeIndex
                    ? "text-[#57007B]"
                    : "text-[#1A202C]"
                }`}
              >
                {person.name}
              </h3>

              <p className="text-sm text-gray-400">
                {person.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;