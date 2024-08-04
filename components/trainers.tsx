"use client";

import Container from "./shared/container";
import Title from "./ui/title";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Image from "next/image";

const Trainers = () => {
  return (
    <section
      id="plains"
      className="min-h-screen flex items-center justify-center"
    >
      <Container>
        <Title title={"Join out"} titlePrimary={"Trainer"} />
        <div>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="relative w-full h-[70vh] mx-auto">
                <Image
                  src="/images/1.jpg"
                  alt="Trainer"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-[70vh] mx-auto">
                <Image
                  src="/images/2.jpg"
                  alt="Trainer"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-[70vh] mx-auto">
                <Image
                  src="/images/3.jpg"
                  alt="Trainer"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-[70vh] mx-auto">
                <Image
                  src="/images/4.jpg"
                  alt="Trainer"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-[70vh] mx-auto">
                <Image
                  src="/images/5.jpg"
                  alt="Trainer"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-[70vh] mx-auto">
                <Image
                  src="/images/6.jpg"
                  alt="Trainer"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Trainers;
