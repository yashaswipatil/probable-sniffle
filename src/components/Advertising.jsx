import React from 'react';
import tv from '../images/tv.png';
import edu from '../images/edu.png';
import cart from '../images/cart.png';
import phone from '../images/phone.png';

function Advertising(){
    return(
        <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
         <div class="flex flex-wrap  p-16 -m-4">
           <div class="lg:w-1/4 md:w-1/2 p-8 w-full">
          <p class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-contain object-center w-full h-full block border-2 border-gray-200" src={tv}  />
            </p>
          <div class="mt-4">
           <h2 class="text-gray-900 title-font text-lg font-medium">Advertising</h2>
          </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 p-8 w-full">
          <p class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-contain object-center w-full h-full block border-2 border-gray-200" src={edu}/>
          </p>
          <div class="mt-4">
            <h2 class="text-gray-900 title-font text-lg font-medium ">Education</h2>
          </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 p-8 w-full">
          <p class="block relative h-48 rounded overflow-hidden">
            <img alt="Amazon Web Services" class="object-contain object-center w-full h-full block border-2 border-gray-200" src={cart}/>
          </p>
          <div class="mt-4">
            <h2 class="text-gray-900 title-font text-lg font-medium">E-commerce</h2>
          </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 p-8 w-full">
          <p class="block relative h-48 rounded overflow-hidden">
            <img alt="Microsoft Sharepoint" class="object-cover object-center w-full h-full block  border-2 border-gray-200" src={phone}/>
          </p>
          <div class="mt-4">
            
            <h2 class="text-gray-900 title-font text-lg font-medium">Telecom</h2>
            
          </div>
        </div>
      </div>
    </div>
  </section>

    );
}

export default Advertising;