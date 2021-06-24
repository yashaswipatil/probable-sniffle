import React from 'react';

function Header(){
    return (
        <header>
          {/* Header */}
          <div class="text-blueGray-700 transition duration-500 ease-in-out transform bg-red-400  ">
              <div class="flex flex-col flex-wrap  mx-auto md:items-center md:flex-row">
                    <a href="/" class="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
                     <div class="inline-flex items-center"> </div>
                    </a>
                    <nav class="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
                        #YellowMessengerCares | Fight Covid-19 with a pro-bono chatbot 
                        <button class="w-auto px-8 py-2 my-2 text-base font-medium text-red-400 transition duration-500 ease-in-out transform bg-white border-black rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:b-gblue-700 ">Get free chatbot</button> 
                    </nav>
                 </div>
          </div>
        </header>
    );
}

export default Header;