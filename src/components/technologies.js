import React from "react";

export default function Technologies() {
  return (
<section class="py-20 bg-gray-800">
  <div class="container px-4 mx-auto">
    <div class="max-w-xl mx-auto mb-20 text-center">
      <span class="text-lg text-blue-400 font-bold">Clouds</span>
      <h2 class="mt-8 text-5xl lg:text-6xl font-bold font-heading text-white">Trusted by brands all over the world</h2>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="w-full md:w-1/2 lg:w-1/5 p-4">
        <div class="flex w-full h-32 items-center justify-center bg-gray-600 rounded-lg">
          <img class="h-16" src="zospace-assets/logos/spotify-box.svg" alt=""/>
        </div>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/5 p-4">
        <div class="flex w-full h-32 items-center justify-center bg-gray-600 rounded-lg">
          <img class="h-6" src="zospace-assets/logos/we-box.svg" alt=""/>
        </div>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/5 p-4">
        <div class="flex w-full h-32 items-center justify-center bg-gray-600 rounded-lg">
          <img class="h-6" src="zospace-assets/logos/slack-box.svg" alt=""/>
        </div>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/5 p-4">
        <div class="flex w-full h-32 items-center justify-center bg-gray-600 rounded-lg">
          <img class="h-12" src="zospace-assets/logos/miro-box.svg" alt=""/>
        </div>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/5 p-4">
        <div class="flex w-full h-32 items-center justify-center bg-gray-600 rounded-lg">
          <img class="h-6" src="zospace-assets/logos/dropbox-box.svg" alt=""/>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}