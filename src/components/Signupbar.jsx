import React from 'react';

function Signupbar(){
    return (
        <section class="text-blueGray-700 bg-red-400  h-40 ">
        <div class="container flex flex-col items-center px-5 py-8 mx-auto">
          <div class="flex flex-col w-full mb-12 text-left lg:text-center">
            <p class="mx-auto h-18 text-2xl  font-medium leading-relaxed text-white lg:w-1/2">Go ahead! Sign up for a demo. <br/><button class="w-auto px-8 py-1 my-2 text-base font-medium text-red-400 transition duration-500 ease-in-out transform bg-white border-black rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:b-gblue-700  ">
        Request a Demo
        </button></p>
            </div>
        </div>
      </section>
    );
}

export default Signupbar;