import React from "react";

export default function Header() {
  return (
<>
  <nav class="relative">
    <div class="flex py-8 px-4 lg:px-8 justify-between items-center">
      <a class="text-2xl text-white font-bold" href="#">
        <img class="h-7" src="zospace-assets/logos/zospace-logo.svg" alt="" width="auto"/>
      </a>
      <div class="lg:hidden">
        <button class="p-2 navbar-burger">
          <svg class="w-10 h-3" width="39" height="13" viewBox="0 0 39 13" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="39" height="2" rx="1" fill="#C4C4C4"></rect><rect x="19" y="11" width="20" height="2" rx="1" fill="#C4C4C4"></rect></svg>
        </button>
      </div>
      <div class="hidden lg:block absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <ul class="flex items-center text-white space-x-10">
          <li><a class="text-white font-bold text-lg" href="#">Technologies</a></li>
          <li><a class="text-white font-bold text-lg" href="#">Projects</a></li>
          <li><a class="text-white font-bold text-lg" href="#">Contact</a></li>
        </ul>
      </div>
      <div class="hidden lg:block"><a class="inline-block px-12 py-4 text-white font-bold border border-gray-200 hover:border-white rounded-full" href="#">Sign Up</a></div>
    </div>
  </nav>
</>
  )
}