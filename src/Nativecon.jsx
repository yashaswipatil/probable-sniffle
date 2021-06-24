import React from 'react';
import aws from './aws.svg';
import c from './c.svg';
import gd from './gd.svg';
import msp from './msp.svg';
import sn from './sn.png';

function Nativecon(){
    return (
        <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
         <div class="flex flex-wrap  p-16 -m-4">
           <div class="lg:w-1/4 md:w-1/2 p-8 w-full">
          <p class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-contain object-center w-full h-full block border-2 border-gray-200" src={gd}  />
            </p>
          <div class="mt-4">
           <h2 class="text-gray-900 title-font text-lg font-medium">Google Drive</h2>
          </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 p-8 w-full">
          <p class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-scale-contain object-center w-full h-full block border-2 border-gray-200" src={c}/>
          </p>
          <div class="mt-4">
            <h2 class="text-gray-900 title-font text-lg font-medium ">Confluence</h2>
          </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 p-8 w-full">
          <p class="block relative h-48 rounded overflow-hidden">
            <img alt="Amazon Web Services" class="object-contain object-center w-full h-full block border-2 border-gray-200" src={aws}/>
          </p>
          <div class="mt-4">
            <h2 class="text-gray-900 title-font text-lg font-medium">Amazon Web Services</h2>
          </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 p-8 w-full">
          <p class="block relative h-48 rounded overflow-hidden">
            <img alt="Microsoft Sharepoint" class="object-cover object-center w-full h-full block  border-2 border-gray-200" src={msp}/>
          </p>
          <div class="mt-4">
            
            <h2 class="text-gray-900 title-font text-lg font-medium">Microsoft Sharepoint</h2>
            
          </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 p-8 w-full">
          <p class="block relative h-48 rounded overflow-hidden">
            <img alt="ServiceNow" class="object-none object-center w-full h-full block border-2 border-gray-200" src={sn}/>
          </p>
          <div class="mt-4">
            <h2 class="text-gray-900 title-font text-lg font-medium">ServiceNow</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
    );
}

export default Nativecon;
