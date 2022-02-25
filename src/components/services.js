import React from "react";

export default function Services() {
  return (
<section class="relative py-20 2xl:py-40 bg-gray-800 overflow-hidden">
  <div class="relative container px-4 mx-auto">
    <div>
    <span class="text-lg text-blue-400 font-bold">Services</span>
        <h2 class="mt-8 mb-12 text-6xl 2xl:text-6xl font-bold font-heading text-white">We can work together on these projects</h2>
      <div class="flex flex-wrap -m-5">
        <div class="w-full lg:w-1/3 p-5">
          <div class="p-16 bg-blue-500 transition duration-500 hover:bg-blue-600 rounded-lg">
            <p class="mb-8 text-3xl font-bold font-heading text-white">Website</p>
            <p class="text-lg text-gray-200 leading-loose">The brown me quam, sagittis porttitor lorem vel, commodo fringilla.</p>
          </div>
        </div>
        <div class="w-full lg:w-1/3 p-5 ">
          <div class="p-16 bg-blue-500 transition duration-500 hover:bg-blue-600 rounded-lg">
            <p class="mb-8 text-3xl font-bold font-heading text-white">Mobile App</p>
            <p class="text-lg text-gray-200 leading-loose">The brown me quam, sagittis porttitor lorem vel, commodo fringilla.</p>
          </div>
        </div>
        <div class="w-full lg:w-1/3 p-5 transform">
          <div class="p-16 bg-blue-500 transition duration-500 hover:bg-blue-600 rounded-lg">
            <p class="mb-8 text-3xl font-bold font-heading text-white">Ecommerce </p>
            <p class="text-lg text-gray-200 leading-loose">The brown me quam, sagittis porttitor lorem vel, commodo fringilla.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}