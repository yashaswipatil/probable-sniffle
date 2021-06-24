import React from 'react';

function Procedure(){
    return (
        <section class="text-gray-600 body-font bg-blue-50">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Natural Language Processing </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">(NLP)</h1>
                  <p class="leading-relaxed mb-3">Our proprietary and powerful natural language engine helps create intelligent contextual search analysis, which understands the intent and sentiment of the user to give the most-apt response</p>
                 </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/721x401" alt="blog" />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Mean Reciprocal Rank </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">(MRR)</h1>
                  <p class="leading-relaxed mb-3">The system improves upon itself as it learns from the relevancy of previous search-response matches. The Interface associates a Mean Reciprocal Rank (MRR) to each resolution to offer better results.</p>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/722x402" alt="blog" />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Optical Character Recognition</h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">(OCR)</h1>
                  <p class="leading-relaxed mb-3">The engine doesn’t just index unstructured textual data, but also images with our proprietary optical character recognition (OCR). Get all relevant results, from multiple formats within seconds.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Procedure;