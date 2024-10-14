import React from 'react';
import panda from './assets/panda.jpg'; // Correct relative path
 

const Header = () => {
  return (
    <div className="flex 
                    flex-col-reverse
                    sm:flex-row
                    items-start 
                    justify-between
                    gap-0
                   
                    md:gap-8">
    <div className="flex
                    flex-col
                    gap-2">
    <h1 className="font-bold
                   text-4xl
                   sm:text-5xl
                   md:text-6xl
                   text-nowrap
                   tracking-tighter "> 
    <span 
        className="bg-gradient-to-r
                   from-purple-500
                   to-blue-500
                   bg-clip-text
                   text-transparent "> Baby Panda

    </span>
    </h1>

    <p  className="max-w-[500px]
                   text-lg
                   md:text-xl
                 
                 
                   text-orange-500
                   text-justify
                   font-semmibold">
                   
                   
                    [Cleaning Service Provider]
         
    </p>
     
   
    </div>
 
     <img src={panda} alt="" className="w-32 "/>   
    
    </div>
    
  )
};

export default Header;
