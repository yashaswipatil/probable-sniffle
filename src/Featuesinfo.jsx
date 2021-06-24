import React from 'react';

function Featuresinfo(){
    return (
        <section class="text-blueGray-700 ">
            <div class="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
              <div class="flex flex-col items-start w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:mb-0 ">
                <h1 class="mb-4 text-1xl font-bold tracking-tighter text-left text-black lg:text-1xl title-font"> Totally optimized search-to-resolution journeys to speed up your operations </h1>
                <p class="mb-8 text-sm leading-relaxed text-left text-blueGray-600 "> Users can go from search to resolution within 2 clicks! Optimize the way people search for information by giving  them contextually-correct resolutions, within seconds, in the  first try itself. </p>
                <h1 class="mb-4 text-1xl font-bold tracking-tighter text-left text-black lg:text-1xl title-font"> Auto-curated relevant FAQs that improve over time as the system learns</h1>
                <h1 class="mb-4 text-1xl font-bold tracking-tighter text-left text-black lg:text-1xl title-font"> Centralize all unstructured data, even if they exist in distant data silos</h1>
                <h1 class="mb-4 text-1xl font-bold tracking-tighter text-left text-black lg:text-1xl title-font"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="#73CBF2">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                                  </svg> Deploy in just a few clicks with all the pre-trained models you need</h1></div>
              <div class="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
                <img class="object-cover object-center rounded-lg " alt="hero" src="https://dummyimage.com/720x600/F3F4F7/8693ac"/> 
              </div>
            </div>
          </section>
    );
}

export default Featuresinfo;