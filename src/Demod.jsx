import React from 'react';
import ReactPlayer from 'react-player';

function Demod(){
    return(
        <div class="bg-white h-96 mb-32">
        <section class="text-blueGray-700 ">
            <div class="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
              <div class="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
                
                <h1 class="mb-8 text-2xl font-black tracking-tighter text-blueGray-700 md:text-4xl title-font"> Convert unstructured <br/> data to <span class="text-red-400">contextual and searchable insights</span>  </h1>
                <p class="mb-8 text-base leading-relaxed text-left text-blueGray-600 "> Turn 100’s of documents worth of unstructured data into a fine-tuned structured and searchable set in a fast, easy and comprehensive way – with our AI and ML-powered Insights Interface!</p>
                <div class="flex flex-col justify-center lg:flex-row">
                  <button class="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-red-400 rounded-sm hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-0 ring-offset-current ring-offset-2"> Get a Demo</button>
                  
                </div>
              </div>
              <div class="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
              <ReactPlayer url='https://www.youtube.com/watch?v=18YYPzcCSW0' width={400}
                   height={400} />
              </div>
            </div>
          </section>
        </div>   
    );
}

export default Demod;
