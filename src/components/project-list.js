import React from "react";
// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function ProjectList() {
  const swiperRef = React.useRef(null);
  return (
  <section class="relative bg-gray-800 py-20 2xl:py-40 overflow-hidden">
    <div class="container px-4 mx-auto">
      <div class="max-w-xl mb-14 lg:mb-20">
        <span class="text-lg text-blue-400 font-semibold">Projects</span>
        <h2 class="mt-8 text-5xl text-white font-bold font-heading">More than 20 years in the game</h2>
      </div>
    </div>
    <div class="relative max-w-4xl px-4 lg:px-0 mx-auto py-10">
      <div class="relative">
        <div class="relative max-w-4xl mx-auto">
          <Swiper
          ref={swiperRef}
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
          >
          <SwiperSlide><img class="w-full h-96 mb-12 object-cover" src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1100&amp;q=80" alt=""/></SwiperSlide>
          <SwiperSlide><img class="w-full h-96 mb-12 object-cover" src="https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067__340.png" alt=""/></SwiperSlide>
          <SwiperSlide><img class="w-full h-96 mb-12 object-cover" src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1100&amp;q=80" alt=""/></SwiperSlide>
          <SwiperSlide><img class="w-full h-96 mb-12 object-cover" src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1100&amp;q=80" alt=""/></SwiperSlide>
          </Swiper>
          <div class="flex flex-wrap -mx-5">
            <div class="w-auto mx-auto lg:w-1/5 px-5">
              <a id="previousButton" onClick={() => swiperRef.current.swiper.slidePrev()} class="inline-flex mr-2 items-center justify-center w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full">
                <svg class="w-4 h-4" width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.84708 12.1077C7.05097 12.3133 7.05097 12.6436 6.84708 12.8476C6.64319 13.0517 6.31377 13.0525 6.10988 12.8476L0.152917 6.8708C-0.0509739 6.66673 -0.0509738 6.33645 0.152917 6.13087L6.10988 0.154027C6.31377 -0.0500387 6.64319 -0.0500386 6.84708 0.154027C7.05098 0.358848 7.05098 0.689887 6.84708 0.893952L1.4143 6.50121L6.84708 12.1077Z" fill="white"></path>
                </svg>
              </a>
              <a id="nextButton" onClick={() => swiperRef.current.swiper.slideNext()} class="inline-flex items-center justify-center w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full">
                <svg class="w-4 h-4" width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.152917 0.894235C-0.0509742 0.688658 -0.0509742 0.358375 0.152917 0.15431C0.356808 -0.0497557 0.686228 -0.0505119 0.89012 0.15431L6.84708 6.13116C7.05097 6.33522 7.05097 6.6655 6.84708 6.87108L0.890119 12.8479C0.686227 13.052 0.356807 13.052 0.152916 12.8479C-0.0509753 12.6431 -0.0509753 12.3121 0.152916 12.108L5.5857 6.50074L0.152917 0.894235Z" fill="white"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}