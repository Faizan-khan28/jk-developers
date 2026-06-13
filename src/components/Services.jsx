import { useState } from "react";

const services = [
  {
    img: "/web.png",
    title: "Web Design & Development",
    desc: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    img: "/app.png",
    title: "Mobile App Development",
    desc: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    img: "/web.png",
    title: "Software Testing Service",
    desc: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    img: "/web2.png",
    title: "Software Development",
    desc: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    img: "/app.png",
    title: "Project Management",
    desc: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    img: "/web.png",
    title: "IT Consulting",
    desc: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
];

function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#F9F9FF] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        
        <div className="w-16 h-1 bg-linear-to-r from-[#F76680] to-[#57007B] mx-auto mb-4"></div>

       
        <h2 className="text-center text-[28px] md:text-[35px] font-bold text-[#1A202C] mb-14">
          Services we offer
        </h2>

       
        <div className="flex gap-8 overflow-x-auto pb-6 scrollbar-none cursor-pointer">
          {services.map((service, index) => (
            <div
              key={index}
              className={`shrink-0 w-70 md:w-83.25 rounded-[7px] ${
                index === activeIndex
                  ? "p-px bg-linear-to-b from-[#F76680] to-[#57007B]"
                  : ""
              }`}
            >
              <div className="bg-[#FAFAFA] h-full rounded-[7px] p-6 md:p-8">

              
                <div className="w-14.5 h-14.5 rounded-full border border-[#57007B] flex items-center justify-center mb-6">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-7 h-7 object-contain"
                  />
                </div>


                <h3
                  className={`text-[22px] md:text-[24px] font-semibold mb-4 ${
                    index === activeIndex
                      ? "text-[#57007B]"
                      : "text-[#2D3748]"
                  }`}
                >
                  {service.title}
                </h3>


                <p className="text-[#718096] text-[15px] md:text-[16px] leading-7">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>


        <div className="flex cursor-pointer justify-center gap-3 mt-8">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-linear-to-r from-[#F76680] to-[#57007B]"
                  : "border border-gray-300"
              }`}
            />
          ))}
        </div>


        <div className="flex justify-end items-center gap-3 mt-10">
          <span className="text-[#A0AEC0] text-xl">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>

          <div className="w-24 h-0.5 bg-gray-200 relative overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-[#57007B] transition-all duration-500"
              style={{
                width: `${((activeIndex + 1) / services.length) * 100}%`,
              }}
            />
          </div>

          <span className="text-[#57007B] text-xl font-medium">
            {String(services.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}

export default Services;