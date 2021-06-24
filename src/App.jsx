import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, HashRouter } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

import Demod from './Demod.jsx';
import Nativecon from './Nativecon.jsx';
import Advertising from './Advertising.jsx';
import Procedure from './Procedure.jsx';
import Faq from './Faq.jsx';
import Featuresinfo from './Featuesinfo.jsx';
import Signupbar from './Signupbar.jsx';
import About from './About.jsx';
import Navbar from './Navbar.js';







function App() {
  
  return (
    <div className="App">
     <HashRouter basename='/'>
      <Router>
      <Route path="/about" component={About}>
                  <About/>
        </Route>
        <Route path="/" exact>
           <Header/>
           <Navbar/>
          <Demod />
  
      <div class="bg-red-400 h-40 p-4">
         <div class="flex items-center ">
            <div class="flex-1 ml-16 mt-8 text-white"><div class=" ml-12 text-5xl">15% </div>Increase in productivity</div>
               <div class="contents">
                  <div class="flex-1  ml-14  mt-8 text-white"> <div class=" ml-2 text-5xl">30%</div> Cost reduction </div>
                  <div class="flex-1  ml-12 mt-8 text-white"> <div class="ml-12 text-5xl">100+</div> Global enterprise customers</div>
               </div>
          </div>
        </div>


         
         {/* Features */}
        <section class="text-blueGray-700 ">
            <div class="container flex flex-col items-center px-5 py-8 mx-auto ">
              <div class="flex flex-col w-full mb-12 text-left lg:text-center">
                <p class="mx-auto  h-18 text-2xl font-medium leading-relaxed text-blueGray-700 lg:w-1/2">Reap the <span class="text-red-400">benefits of fast, contextual and AI-enabled </span>  insights interface</p>
                </div>
            </div>
          </section>
       
     <Featuresinfo/>
        

       {/* Another Feature section */}
      <section class="text-blueGray-700 bg-blue-50">
            <div class="container flex flex-col items-center px-5 py-8 mx-auto">
              <div class="flex flex-col w-full mb-12 text-left lg:text-center">
                <p class="mx-auto  h-18 text-2xl font-medium leading-relaxed text-blueGray-700 lg:w-1/2"> <span class="text-red-400">Top features</span> to boost the quality and speed of contextual searches</p>
                </div>
            </div>
          </section>
      

        <Faq/>
        
     
      {/* Feature section */}
      <section class="text-blueGray-700 ">
            <div class="container flex flex-col items-center px-5 py-8 mx-auto">
              <div class="flex flex-col w-full mb-2 text-left lg:text-center">
                <p class="mx-auto  h-18 text-2xl font-medium leading-relaxed text-blueGray-700 lg:w-1/2">Connect and prosper- <br/> <span class="text-red-400">native connectors for faster deployment</span> </p>
                </div>
            </div>
          </section>
           
            
       <Nativecon />


 
       {/* More Features */}
     <section class="text-blueGray-700 bg-blue-50 ">
            <div class="container flex flex-col items-center px-5 py-8 mx-auto">
              <div class="flex flex-col w-full mb-12 text-left lg:text-center">
                <p class="mx-auto h-18 text-2xl text-base font-medium leading-relaxed text-blueGray-700 lg:w-1/2">Under the hood - <span class="text-red-400">engine highlights </span></p>
                </div>
            </div>
          </section>
        
     
    <Procedure/>


       {/* leading to more information bar */}
       <section class="text-blueGray-700 ">
            <div class="container flex flex-col items-center px-5 py-8 mx-auto">
              <div class="flex flex-col w-full mb-12 text-left lg:text-center">
                <p class="mx-auto h-18 text-2xl  font-medium leading-relaxed text-blueGray-700 lg:w-1/2"><span class="text-red-400">Curious to know more?</span> <br/> See what we can do for your industry.</p>
                </div>
            </div>
          </section>

             
    <Advertising/>
    <Signupbar/>
    <Footer/>
    </Route>
    </Router>
    </HashRouter>
</div>

    

  );
}


export default App;
