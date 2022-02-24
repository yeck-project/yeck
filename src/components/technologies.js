import React from "react";

export default function Technologies() {
  const logoReact = 'https://res.cloudinary.com/yet/image/upload/v1645726526/yet/React-icon.svg_qayl9v.png';
  const logoNode = 'https://res.cloudinary.com/yet/image/upload/v1645726521/yet/1280px-Node.js_logo.svg_a6mwbl.png';
  const logoAWS = 'https://res.cloudinary.com/yet/image/upload/v1645726525/yet/1200px-Amazon_Web_Services_Logo.svg_pnl1a0.png';
  const logoGitlab = 'https://res.cloudinary.com/yet/image/upload/v1645726519/yet/GitLab_logo.svg_d4kniu.png';
  const logoTypescript = 'https://res.cloudinary.com/yet/image/upload/v1645726524/yet/Typescript_logo_2020.svg_utrlfd.png';
  return (
<section class="pb-24 pt-20 bg-gray-900 overflow-hidden">
  <div class="container px-4 mx-auto">
    <div class="flex flex-wrap items-center -mx-4">
      <div class="w-full lg:w-2/5 px-4 mb-20 lg:mb-0">
        <div class="lg:max-w-lg">
          <span class="text-lg text-blue-400 font-bold">Technologies</span>
          <h2 class="mt-8 mb-12 text-6xl 2xl:text-6xl font-bold font-heading text-white">Cutting edge technologies</h2>
          <p class="text-lg text-gray-200">I like these technologies as they enable developing fast, scalable and secure website/app.</p>
        </div>
      </div>
      <div class="w-full lg:w-3/5 px-4">
        <div class="flex justify-center items-center">
          <div class="py-8 px-2 sm:px-6 mr-3 bg-gray-600 rounded-lg">
            <img class="h-16 mx-auto" src={logoReact} alt=""/>
          </div>
          <div class="flex flex-col mr-3">
            <div class="inline-block ml-auto py-12 px-4 sm:px-8 mb-3 bg-gray-600 rounded-lg">
              <img class="h-16 mx-auto" src={logoNode} alt=""/>
            </div>
            <div class="py-16 px-2 sm:px-12 bg-gray-600 rounded-lg">
              <img class="h-16 md:h-8 mx-auto" src={logoAWS} alt=""/>
            </div>
          </div>
          <div class="-mb-32">
            <div class="py-8 px-2 sm:px-14 mb-3 bg-gray-600 rounded-lg">
              <img class="h-16 mx-auto" src={logoGitlab} alt=""/>
            </div>
            <div class="inline-block py-14 px-2 sm:px-8 bg-gray-600 rounded-lg">
              <img class="h-16 mx-auto" src={logoTypescript} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}