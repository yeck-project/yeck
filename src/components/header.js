import React from "react";
import HeaderNav from "./headerNav";

export default function Header() {
  const imageBackground = 'https://res.cloudinary.com/yet/image/upload/v1645725824/yet/wave-haikei_ass1wu.png';
  const imageSeb = 'https://res.cloudinary.com/yet/image/upload/v1645724484/yet/photo_seb_dra7nz.png';
  return (
<section class="pb-20 bg-gray-900	">
  <HeaderNav/>
  <div class="relative container px-4 pt-12 md:pt-20 mx-auto">
    <div class="flex flex-wrap items-center -mx-4 mb-20 2xl:mb-14">
      <div class="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
        <span class="text-lg font-bold text-blue-400">About Me</span>
        <h2 class="max-w-2xl mt-12 mb-8 text-6xl 2xl:text-6xl text-white font-bold font-heading">Hi, I'm Sébastien Payet</h2>
        <p class="mb-12 lg:mb-16 2xl:mb-24 text-xl text-gray-100">I am a full stack developer with a focus on JavaScript Technologies. I build website, ecommerce site and mobile app.</p>
        <a class="inline-block px-12 py-5 text-lg text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200" href="#">Let's get in touch</a>
      </div>
      <div class="w-full lg:w-1/2 px-2">
        <img class="w-full" src={imageSeb} alt=""/>
      </div>
    </div>
  </div>
  <div class="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
    <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
    <nav class="relative flex flex-col py-8 h-full w-full bg-white overflow-y-auto">
      <div class="flex items-center mb-16 pr-6">
        <a class="ml-10 mr-auto text-2xl text-gray-800 font-bold" href="#">
          <img class="h-7" src="zospace-assets/logos/zospace-dark-logo.svg" alt="" width="auto"/>
        </a>
      </div>
      <div>
        <ul>
          <li class="mb-1 px-10"><a class="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl" href="#">Product</a></li>
          <li class="mb-1 px-10"><a class="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl" href="#">Story</a></li>
          <li class="mb-1 px-10"><a class="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl" href="#">Features</a></li>
          <li class="mb-1 px-10"><a class="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl" href="#">Contact</a></li>
        </ul>
      </div>
      <div class="mt-auto px-10">
        <div class="pt-6"><a class="block mb-4 py-4 px-12 text-gray-800 text-center font-bold border border-gray-50 hover:border-gray-100 rounded-full" href="#">Sign in</a><a class="block py-4 px-12 text-white text-center font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200" href="#">Sign up</a></div>
        <p class="mt-6 mb-4 text-lg text-center">
          <span>2021 © Zospace. All rights reserved.</span>
        </p>
      </div>
    </nav>
  </div>
</section>
  )
}