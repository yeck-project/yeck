import React from "react";

export default function Contact() {
  return (
<section class="relative py-20 2xl:py-40 bg-gray-800 overflow-hidden">
  <img class="absolute top-0 right-0 h-24 lg:h-32 lg:mr-24 mt-12" src="zospace-assets/images/stars.svg" alt=""/>
  <img class="absolute bottom-0 right-0 -mr-64 -mb-64" src="zospace-assets/lines/circle.svg" alt=""/>
  <img class="absolute bottom-0 left-0 w-64 lg:w-112" src="zospace-assets/lines/circle-gray-half.svg" alt=""/>
  <img class="absolute bottom-0 left-0 w-128 h-128 -mb-72" src="zospace-assets/lines/circle.svg" alt=""/>
  <div class="relative container px-4 mx-auto">
    <div class="text-center mb-12">
      <span class="text-lg font-bold text-blue-400">Contact</span>
      <h2 class="mt-12 mb-10 text-5xl text-white font-bold font-heading">Connect with our team</h2>
      <p class="max-w-md mx-auto text-lg text-gray-300">A short message that will bring your customers into the world of your imagination.</p>
    </div>
    <div class="flex flex-wrap -mx-4 mb-20">
      <div class="w-full lg:w-1/3 px-4 mb-6 lg:mb-0">
        <div class="py-10 px-12 h-full bg-gray-500 rounded-lg">
          <div class="flex flex-wrap -mx-2">
            <div class="w-full md:w-auto lg:w-1/3 px-2">
              <span class="flex-shrink-0 flex items-center justify-center w-12 h-12 mr-8 bg-blue-500 rounded-full">
                <svg class="w-5 h-5" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.5 11C16.0185 11 14 13.0962 14 15.6729C14 19.2285 17.8951 22.6871 18.0612 22.8339C18.3123 23.0554 18.6877 23.0554 18.9388 22.8339C19.1049 22.6885 23 19.2298 23 15.6729C23 13.0962 20.9815 11 18.5 11ZM18.5 17.4618C17.5077 17.4618 16.7003 16.6338 16.7003 15.6161C16.7003 14.5985 17.5077 13.7705 18.5 13.7705C19.4923 13.7705 20.2997 14.5985 20.2997 15.6161C20.2997 16.6338 19.4923 17.4618 18.5 17.4618Z" fill="white"></path>
                  <path d="M9.01758 0C4.04824 0 0 4.04035 0 9C0 13.9597 4.04824 18 9.01758 18C9.90081 18 10.7583 17.8745 11.5604 17.6315C10.1794 14.5374 10.8571 11.7539 12.7236 9.9193C12.6912 9.9193 12.2597 9.73436 12.2272 9.72086C8.69567 8.37903 5.3927 12.6232 8.35888 16.156C6.02299 15.94 4.00361 14.6171 2.84987 12.7096C4.09829 12.4153 5.00721 11.3057 5.02344 9.9922C5.04373 9.16199 5.60505 8.59232 6.30433 8.43573C9.41794 7.77021 9.7128 3.90535 8.51307 1.83051C9.34355 1.78461 10.0442 1.80756 11.0383 2.10049C10.7881 4.61407 12.1501 7.66087 15.1596 7.37468L16.0158 7.27614C16.0875 7.57312 16.1335 7.87011 16.1605 8.18464C16.7272 8.08745 17.4468 8.06855 18 8.17519C17.5739 3.60027 13.7056 0 9.01758 0Z" fill="white"></path>
                </svg>
              </span>
            </div>
            <div class="w-full md:w-auto lg:w-2/3 px-2 mt-4 lg:mt-0">
              <h3 class="mb-5 text-lg font-bold font-heading text-white">Bayswater 104, London W16EG, UK</h3>
              <p class="text-lg text-gray-300">The one est bad, semper six at sem 8 AM - 8 PM</p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/3 px-4 mb-6 lg:mb-0">
        <div class="py-10 px-12 h-full bg-gray-500 rounded-lg">
          <div class="flex flex-wrap -mx-2">
            <div class="w-full md:w-auto lg:w-1/3 px-2">
              <span class="flex-shrink-0 flex items-center justify-center w-12 h-12 mr-8 bg-blue-500 rounded-full">
                <svg class="w-4 h-4" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.9347 13.3167C17.811 12.6058 17.2022 12.0401 16.4551 11.94L12.3077 11.3855C11.555 11.2832 10.8101 11.6825 10.4984 12.3528C10.4185 12.5237 10.3521 12.7014 10.2981 12.8848C9.13582 12.4 8.09277 11.7004 7.19375 10.8018C6.29473 9.90315 5.59374 8.86053 5.10992 7.6987C5.29332 7.64471 5.4711 7.57835 5.64213 7.4985C6.31274 7.18695 6.70993 6.44351 6.60866 5.69108L6.05394 1.54536C5.9538 0.797426 5.38784 0.188953 4.66434 0.0641091C4.40105 0.0202451 4.18164 0 3.97348 0C2.61201 0 1.32368 0.71982 0.612565 1.87716C-0.157059 3.13122 -0.0501675 4.73507 0.128736 5.9925C0.533802 8.84029 1.99766 11.7038 4.14451 13.8498C5.74002 15.4446 7.71246 16.6402 9.84693 17.306C10.9339 17.6457 12.2942 18 13.605 18C14.5851 18 15.537 17.802 16.3235 17.2498C17.3733 16.5109 18 15.3052 18 14.0196C18 13.8115 17.9797 13.5911 17.9347 13.3167Z" fill="white"></path>
                </svg>
              </span>
            </div>
            <div class="w-full md:w-auto lg:w-2/3 px-2 mt-4 lg:mt-0">
              <h3 class="mb-5 lg:mt-2 text-lg font-bold font-heading text-white">+44 20457523 00 01</h3>
              <p class="text-lg text-gray-300">The brown me quam, sagittis porttitor lorem vel, commodo fringilla nisl.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/3 px-4">
        <div class="py-10 px-12 h-full bg-gray-500 rounded-lg">
          <div class="flex flex-wrap -mx-2">
            <div class="w-full md:w-auto lg:w-1/3 px-2">
              <span class="flex-shrink-0 flex items-center justify-center w-12 h-12 mr-8 bg-blue-500 rounded-full">
                <svg class="w-5 h-4" width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.8109 0H2.1878C0.981688 0 0 0.980499 0 2.18676V11.8119C0 13.0182 0.981688 14 2.1878 14H18.8122C20.0183 14 21 13.0182 21 11.8119V2.18676C20.9987 0.980499 20.017 0 18.8109 0ZM19.2492 4.73317L11.716 8.67092C11.3393 8.86387 10.9193 8.96887 10.4993 8.96887C10.0794 8.96887 9.66858 8.86387 9.28273 8.67092L1.74945 4.73317V2.75511L10.0872 7.11288C10.3405 7.24414 10.6555 7.24414 10.9101 7.11288L19.2479 2.75511V4.73317H19.2492Z" fill="white"></path>
                </svg>
              </span>
            </div>
            <div class="w-full md:w-auto lg:w-2/3 px-2 mt-4 lg:mt-0">
              <h3 class="mb-5 lg:mt-2 text-lg font-bold font-heading text-white">support@shuffle.dev.dev</h3>
              <p class="text-lg text-gray-300">It’s over, maecenas tincidunt malesuada dolor sit amet malesuada.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center"><a class="inline-block py-4 px-12 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200" href="#">How it works?</a></div>
  </div>
</section>
  )
}