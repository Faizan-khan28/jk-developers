import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const clients = [
  "/client1.png",
  "/client2.png",
  "/client3.png",
  "/client4.png",
  "/client5.png",
  "/client6.png",
];

function Clients() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="w-16 h-1 bg-linear-to-r from-[#F76680] to-[#57007B] mb-4"></div>

        <h2 className="text-[32px] font-light mb-12">
          Meet the People
          <br />
          <span className="font-bold">We are Working With</span>
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="h-30 rounded-xl border border-gray-100 shadow-sm flex items-center justify-center">
                <img
                  src={client}
                  alt="client"
                  className="max-w-37.5"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default Clients;