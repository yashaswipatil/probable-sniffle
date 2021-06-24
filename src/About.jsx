import React, { useState } from 'react';
import logo from './logo.svg';
import ReactPlayer from 'react-player';

import { date } from 'joi';


function About(){

  const [data , setData] = useState({
    name: "",
    email: "",
    number: "",
  });

  const { name , email, number} = data;

  const handleChange = (e) =>{
    setData({...data, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/yesashwinipatil/google_sheets/BjdHFSrTzADzrWsN?tabId=Sheet1",
        {
          method :'POST',
          headers : {
            'Content-Type' : 'application/json',
          },
          body : JSON.stringify([
            [name , email , number , new Date().toLocaleString()],
          ]),
        }
      );
      await response.json()
      setData({...data, name:'', email:'' , number:''});
    } catch (err) {
      console.log(err);
    }
  };

  
  return (
       <section class="flex flex-col items-center h-screen md:flex-row">
        <div class="container mx-auto">
          <div class="flex justify-center px-2 py-6 ">
            <div class="flex w-full rounded-lg xl:w-3/4 lg:w-11/12 lg:shadow-xl ">
              <div class="relative hidden w-full h-auto bg-white bg-cover border-r rounded-l-lg lg:block lg:w-6/12">
                <div class="relative z-10 m-12 text-left ">
                 
                       <h2 class="text-lg font-bold tracking-tighter text-black uppercase transition duration-500 ease-in-out transform hover:text-lightBlack-500 dark:text-lightBlue-400"> <img src={logo} alt="Logo" /></h2>
                        <h2 class="mt-12 mb-2 text-2xl font-semibold tracking-tighter text-black sm:text-3xl title-font">Connect with us to deliver <span class="text-red-400">Total CX</span>  to your customers </h2>
                         <div class="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
                            <ReactPlayer url='https://www.youtube.com/watch?v=18YYPzcCSW0' width={300} height={300} />
                         </div>
                 </div>
              </div>
              <div class="w-full px-8 py-24 bg-white rounded-lg border-blueGray-100 lg:w-8/12 lg:px-24 lg:py-4 lg:rounded-l-none s">
                <div class="relative z-10 text-left ">
                  <div class="flex justify-enter lg:py-6">
                    <h2 class="text-md font-bold text-left">Request a demo</h2>
                    
                    
                  </div>
                  <form class="mt-6"  method="POST" onSubmit={handleSubmit} >
                    <div>
                      <label class="block text-base font-medium leading-relaxed text-blueGray-700">Full Name <span class="text-red-500">*</span></label>
                      <input 
                         type="text"
                         name="name"
                         value={name}
                         onChange={handleChange}
                         placeholder="Enter Full Name " 
                         autoComplete="off"
                         class="w-full px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ext-black focus:border-blueGray-500"/>
                    </div>
                    <div class="mt-4">
                      <label class="block text-base font-medium leading-relaxed text-blueGray-700">Business Email<span class="text-red-500">*</span></label>
                      <input 
                         type="email"
                         name="email" 
                        value={email}
                        onChange={handleChange}
                         placeholder="Enter Email "
                         
                         class="w-full px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ext-black focus:border-blueGray-500" autocomplete="off" />
                    </div>
                    
                    <div class="mt-4">
                      <label class="block text-base font-medium leading-relaxed text-blueGray-700">Phone Number</label>
                      <input 
                        type="number" 
                        name="number" 
                        value={number}
                        onChange={handleChange}
                        placeholder="Enter Number " 
                       
                        class="w-full px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ext-black focus:border-blueGray-500" autocomplete="off" />
                    </div>
                  <button 
                  type="submit" 
                  
                  class="block w-full px-4 py-3 mt-6 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg bg-red-400 hover:from-black to-black focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 hover:to-black">Submit</button>
                  </form>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
      
  );
}
   
   
      
        
    
   
export default About;