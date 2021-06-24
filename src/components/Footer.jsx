import React from 'react';
import logo from '../images/logo.svg'; 
import gi from '../images/gi.png';
import lf1 from '../images/lf1.svg';
import lf2 from '../images/lf2.svg';
import lf3 from '../images/lf3.svg';

function Footer(){
    return (
        <footer class=" p-16 text-blueGray-700 transition duration-500 ease-in-out transform bg-white border  ">
          <div class=" flex flex-col flex-wrap p-8 mx-auto md:items-right lg:items-start md:flex-row md:flex-no-wrap   ">
            <div class="flex-shrink-0 w-74 mx-auto text-center md:mx-0 md:text-left divide-y-4 divide-black divide-opacity-25">
              <a href="/" class="pr-2 lg:pr-16 lg:px-6 ">
                    <div class="inline-flex items-right h-96 ">
                        <h2  href="/" class=" p-4 text-xl font-medium tracking-tighter text-black "> <img class="object-fill" src={logo} alt="Logo"  />  
                            <span class="p-5"> <br/>© 2021 Biotonic Technology <br/>Private Limited.</span><hr/>
                            <div class="mt-2 mb-5 "></div>
                                <p class="mt-5">Get in on the latest in AI</p><button class="w-auto px-6 py-1 my-2 text-base font-medium text-white transition duration-500 ease-in-out transform bg-blue-400 border-black rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:b-gblue-700  ">
                                     Subscribe</button><hr/>
                                 <img class="object-fill mt-5 mb-5" src={gi} alt="Logo"  /> <hr/>
                                 <div class="mt-2  "></div>
                                <div class="flex  mt-5 ml-1 mr-1">
                                 <img class="  flex-1 object-cover mt-5" src={lf1} alt="Credits"  />
                                 <img class="flex-1 object-fill" src={lf2} alt="Credits"  /> 
                                 <img class=" flex-1 object-fill" src={lf3} alt="credits"  />
                            </div> 
                        </h2>
                    </div>
                </a>
            </div>


            <div class="flex flex-wrap   flex-grow mt-8 -mb-10 text-left md:pl-78 md:mt-0 ">
              <div class="w-md px-1 lg:w-44 md:w-48">
                    <h1 id="Why yellow.ai?" class="mb-8 text-xs font-extrabold tracking-widest text-black  title-font">  Why yellow.ai?  </h1>
                        <nav class="mb-4 space-y-2 list-none">
                             <ul class=" mr-1   text-sm text-blueGray-500">
                                 <li class="mb-3"> Conversation CX platfrom</li>
                                 <li class="mb-3">Customer stories</li>
                                 <li class="mb-3">Pricing</li>
                             </ul>
                        </nav>

                     <h1  class="mb-8 mt-8 text-xs font-extrabold tracking-widest text-black  title-font"> Channels </h1>
                         <nav class="mb-4 space-y-2 list-none">
                             <ul class=" mr-1   text-sm text-blueGray-500">
                                 <li class="mb-3">Text </li>
                                 <li class="mb-3">Voice</li>
                             </ul>
                          </nav>

                     <h1 id="Solution" class="mb-8  mt-8 text-xs font-extrabold tracking-widest text-black title-font"> Solution </h1>
                         <nav class="mb-4   space-y-2 list-none">
                             <ul class=" mr-1   text-sm text-blueGray-500">
                                  <li class="mb-3"> Conversation CX platfrom</li>
                                  <li class="mb-3">Marketing Automation</li>
                                  <li class="mb-3">Conversational Commerce</li>
                                  <li class="mb-3">Internal Automation</li>
                             </ul>
                         </nav>
              </div>



              <div class="w-full px-2 lg:w-44 md:w-48">
                     <h1  id="Company" class="mb-8 text-xs font-extrabold tracking-widest text-black  title-font"> Company </h1>
                        <nav class="mb-4 space-y-2 list-none">
                             <ul class=" mr-1   text-sm text-blueGray-500">
                                    <li class="mb-3"> About us</li>
                                    <li class="mb-3">Contact us</li>
                                    <li class="mb-3">Customer stories</li>
                                     <li class="mb-3">Partner with us</li>
                                    <li class="mb-3">News</li>
                                   <li class="mb-3">Academy</li>
                                   <li class="mb-3">Billy - yellow.ai’s</li>
                                  <li class="mb-3">Virtual assistant</li>
                             </ul>
                         </nav>

                     <h1 id="Resources" class="mb-8 mt-8 text-xs font-extrabold font-bold tracking-widest text-black   title-font"> Resources </h1>
                        <nav class="mb-4 space-y-2 list-none">
                            <ul class=" mr-1   text-sm text-blueGray-500">
                              <li class="mb-3"> Blog</li>
                              <li class="mb-3">E-books</li>
                              <li class="mb-3">Community</li>
                             <li class="mb-3">Academy</li>
                             <li class="mb-3">Documentation</li>
                            </ul>
                         </nav>
              </div>


              <div class="w-full px-2 lg:w-44 md:w-48">
                    <h1 id="Platform" class="mb-8 text-xs font-extrabold tracking-widest text-black  title-font">Platform</h1>
                        <nav class="mb-4 space-y-2 list-none">
                            <ul class=" mr-1   text-sm text-blueGray-500">
                                <li class="mb-3"> NLP</li>
                                <li class="mb-3">Studio</li>
                                <li class="mb-3">Omni channel</li>
                                <li class="mb-3">Inbox</li>
                                <li class="mb-3">Campaign management</li>
                                <li class="mb-3">Marketplace </li>
                                <li class="mb-3">Enterprise-grade</li>
                                <li class="mb-3">Security</li>
                                <li class="mb-3">Integrations</li>
                                <li class="mb-3">Analytics</li>
                                <li class="mb-3">Insights engine</li>
                            </ul>
                        </nav>
              </div>


              <div class="w-full px-4 lg:w-44 md:w-48">
                    <h1 class="mb-8 text-xs font-extrabold tracking-widest text-black  title-font">Industries</h1>
                        <nav class="mb-4 space-y-2 list-none">
                            <ul class=" mr-1   text-sm text-blueGray-500">
                                <li class="mb-3">Automotive </li>
                                <li class="mb-3">Advertisings</li>
                                <li class="mb-3">Energy</li>
                                <li class="mb-3">Education</li>
                                <li class="mb-3">Banking</li>
                                <li class="mb-3">Insurance </li>
                                <li class="mb-3">Food and Beverages</li>
                                <li class="mb-3">Consumer goods</li>
                                <li class="mb-3">E-commerce</li>
                                <li class="mb-3">Retail</li>
                                <li class="mb-3">Gaming</li>
                                <li class="mb-3">Healthcare</li>
                                <li class="mb-3">Hospitality</li>
                                <li class="mb-3">Real estate</li>
                                <li class="mb-3">Telecom</li>
                                <li class="mb-3">QSRs</li>
                            </ul>
                         </nav>
              </div>
             
              
            </div>
          </div>

           <hr/>
          <div class="w-full px-8 mt-4 rounded-b-lg bg-blueGray-50">
                    <div class="container flex flex-col flex-wrap px-5 py-6 mx-auto sm:flex-row">
                         <p class="text-sm text-center text-black sm:text-left ">Terms ⚬  Privacy   ⚬ Sitemap </p>
                         <p class="text-sm ml-16 text-center text-black sm:text-left ">Formerly known as Yellow Messenger </p>
                            <span class="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                                 <a  href="https://www.facebook.com/YellowDotAI" class="text-blue-500 hover:text-black">
                                     <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                       <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                     </svg>
                                 </a>
                                 <a  href="https://twitter.com/yellowdotai" class="ml-3 text-blue-500 hover:text-black">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                         <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                                         </path>
                                    </svg>
                                </a>
                                 <a href="https://www.instagram.com/yellowdotai/" class="ml-3 text-blue-500 hover:text-black">
                                     <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                         <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                         <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                     </svg>
                                 </a>
                                 <a href="https://www.linkedin.com/company/yellowdotai/" class="ml-3 text-blue-500 hover:text-black">
                                     <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                           <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z">
                                           </path>
                                                 <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                     </svg>
                                 </a>
                                 <a href="https://www.youtube.com/c/YellowDotAI/about" class="ml-3 text-blue-500 hover:text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                         <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                     
                                     </svg>
                  
                                 </a>
                            </span>
                     </div>
                </div>
        
       
          </footer>

           
    );
}

export default Footer;