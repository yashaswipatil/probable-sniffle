import React from 'react';
import { BrowserRouter as  Switch, Link } from 'react-router-dom';
import logo from '../images/logo.svg';

function Navbar(){
    return (
        <div class=" text-blueGray-700 transition duration-500 ease-in-out transform bg-white  ">
        <div class="flex flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row">
          <a href="/" class="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
            <div class="inline-flex items-center">
              
              <h2 class="block p-2 text-xl font-medium tracking-tighter text-black transition duration-500 ease-in-out transform cursor-pointer hover:text-blueGray-500 lg:text-x lg:mr-8"> <img src={logo} alt="Logo" /> </h2>
            </div>
          </a>
          <nav class="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
            <ul class="items-center inline-block list-none lg:inline-flex">
              <li>
                <a href="#Why yellow.ai?" class="px-8 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black "> Why yellow.ai? ᐁ
                
                 </a>
              </li>
              <li>
                <a href="#Platform" class="px-8 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black "> Platform ᐁ</a>
              </li>
              <li>
                <a href="#Solution" class="px-8 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black ">Solutions ᐁ</a>
              </li>
              <li>
                <a href="#Resources" class="px-8 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black ">Resources ᐁ</a>
              </li>
              <li>
                <a href="#Company" class="px-8 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black ">Company ᐁ</a>
              </li>


            <Switch>
                <Link to="/about" > 
                     <button onClick="window.open('http://localhost:3000/about')"  class="w-auto px-8 py-1 my-2 text-base font-medium text-white transition duration-500 ease-in-out transform bg-red-400 border-black rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:b-gblue-700 ">
                         Request a Demo
                     </button>
                </Link>
            </Switch>
              
             
            </ul>
          </nav>
          
        </div>
      </div>
    )
}
export default Navbar;