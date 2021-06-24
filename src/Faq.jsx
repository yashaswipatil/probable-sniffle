import React from 'react';

function Faq(){
    return (
        <section class="text-blueGray-700 bg-blue-50">
        <div class="container flex flex-col items-start px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-28">
          <div class="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2">
            <img class="object-cover object-center rounded" alt="hero" loading="lazy" src="https://dummyimage.com/720x600/F3F4F7/8693ac" />
          </div>
          <div class="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
            
          <h1 class="mb-4 text-1xl font-bold tracking-tighter text-left text-black lg:text-1xl title-font"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="#73CBF2">
                        <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z" />
                           <path fill-rule="evenodd" d="M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z" clip-rule="evenodd" />
                                </svg> FAQ machine, context-based searching, fine-tuned search results </h1>
            <p class="mb-8 text-base leading-relaxed text-left text-blueGray-700">Successfully process queries in their natural language. The system also matches the query to the closest FAQs to give additional info. You can further fine-tune results by adding your custom tags.</p>
            <h1 class="mb-4 text-1xl font-bold tracking-tighter text-left text-black lg:text-1xl title-font"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="#73CBF2">
                  <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
               <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                  <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                      </svg> Auto-synced indexing of all connected databases for up-to-date responses </h1>
            <h1 class="mb-4 text-1xl font-bold tracking-tighter text-left text-black lg:text-1xl title-font"> Self-learning system, plus, all analytics to help create better content </h1>
            <h1 class="mb-4 text-1xl font-bold tracking-tighter text-left text-black lg:text-1xl title-font"> Pre-trained industrial-specific models for faster go-to-market speeds</h1> </div>
        </div>
      </section>
    );
}

export default Faq;