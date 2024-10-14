import React from 'react'
import image1 from './assets/image1.jpg'
import iron from './assets/iron.avif'
import lady from './assets/lady.avif'
import men from './assets/men.avif'
import floor from './assets/floor.avif'

const Project = () => {
  return (
    <div  className='space-y-5
                    pt-10'>
    <h1   className='font-bold
                   text-4xl
                   sm:text-5xl
                   md:text-6xl
                   text-center'>
    <span className='bg-gradient-to-r
                     from-purple-500
                     to-blue-300
                     bg-clip-text
                     text-transparent'>Hire us</span>                
    </h1> 
    <h3   className="font-semibold
                     text-black
                     text-xl
                      text-justify">
                      we provide reliable, professional cleaning services tailored to meet your unique needs. Whether it's your home, office, or commercial space, our expert team is dedicated to delivering the highest standards of cleanliness.</h3>
     <div   className="flex
                     flex-col
                     items-center
                     justify-center
                     space-y-5">
    <div   className="sm:flex
                      gap-5
                      space-y-5
                      sm:space-y-0">
    <div className="flex 
                   flex-col
                   items-baseline
                   text-left
                   gap-2
                   max-w-[300px]
                   border rounded-lg
                   p-5
                   hover:shadow-xl
                   transaction-all
                   duration-300
                   cursor-pointer
                   hover:-translate-y-1">
    <img src={ iron} className="w-[300px] rounded-rd" alt=""></img>
    <h3   className="text-lg
                    font-bold">1.Ironing
    </h3>  
    <span className="text-sm
                    text-gray-500
                    font-semibold">
    </span> 

    <p className="text-xs
                 text-gray-400
                 font-medium
                 max-w-64">
                  Use steam irons, pressing machines, or hand irons to smooth out wrinkles on garments like shirts, pants, dresses, and suits. 
     </p>  

               {/* ............... */}
    <div className="flex 
                    gap-3
                    text-xs
                    ">
    <div className="py-2 px-5 
                    border-none
                    text-white
                    font-semibold
                    rounded-xl
                    hover:opacity-75
                    bg-black">Book us
    </div>  
    <div className="py-2
                    px-5
                    border-none
                    text-white
                    font-semibold
                    rounded-xl
                    hover:opacity-75
                    bg-gradient-to-r
                    from-cyan-500
                    to-violet-500">Price
    </div>
    <div  className="py-2
                     px-5
                     border-none
                     text-white
                     font-semibold
                     rounded-xl
                     hover:opacity-75
                     bg-gradient-to-r
                     from-cyan-700
                     to-green-600">Deals
    </div>      

    </div>           

    </div>
                     
    </div>  
   {/* ................................... */}
   <div   className="sm:flex
                      gap-5
                      space-y-5
                      sm:space-y-0">
    <div className="flex 
                   flex-col
                   items-baseline
                   text-left
                   gap-2
                   max-w-[300px]
                   border rounded-lg
                   p-5
                   hover:shadow-xl
                   transaction-all
                   duration-300
                   cursor-pointer
                   hover:-translate-y-1">
    <img src={ lady} className="w-[300px] rounded-rd" alt=""></img>
    <h3   className="text-lg
                    font-bold">2.Kitchen Cleaner
    </h3>  
    <span className="text-sm
                    text-gray-500
                    font-semibold"> 
    </span> 

    <p className="text-xs
                 text-gray-400
                 font-medium
                 max-w-64">
                  Wash dishes,dry dishes immediately ,Sweep the floor,wipe windows ,stove,ovens
                  clean sink & drain.
     </p>  

               {/* ............... */}
    <div className="flex 
                    gap-3
                    text-xs
                    ">
    <div className="py-2 px-5 
                    border-none
                    text-white
                    font-semibold
                    rounded-xl
                    hover:opacity-75
                    bg-black">Book us
    </div>  
    <div className="py-2
                    px-5
                    border-none
                    text-white
                    font-semibold
                    rounded-xl
                    hover:opacity-75
                    bg-gradient-to-r
                    from-cyan-500
                    to-violet-500">Price
    </div>
    <div  className="py-2
                     px-5
                     border-none
                     text-white
                     font-semibold
                     rounded-xl
                     hover:opacity-75
                     bg-gradient-to-r
                     from-cyan-700
                     to-green-600">Deals
    </div>      

    </div>           

    </div>
                     
    </div>  
         {/*............................................  */}
         <div   className="sm:flex
                      gap-5
                      space-y-5
                      sm:space-y-0">
    <div className="flex 
                   flex-col
                   items-baseline
                   text-left
                   gap-2
                   max-w-[300px]
                   border rounded-lg
                   p-5
                   hover:shadow-xl
                   transaction-all
                   duration-300
                   cursor-pointer
                   hover:-translate-y-1">
    <img src={men} className="w-[300px] rounded-rd" alt=""></img>
    <h3   className="text-lg
                    font-bold">3.Vaccume team
    </h3>  
    <span className="text-sm
                    text-gray-500
                    font-semibold">
    </span> 

    <p className="text-xs
                 text-gray-400
                 font-medium
                 max-w-64">
                Clean carpet,sofa,curtains, rugs, and hard floors.
                Use appropriate vacuum attachments to clean hard-to-reach areas like corners, edges, and under furniture.
     </p>  

               {/* ............... */}
    <div className="flex 
                    gap-3
                    text-xs
                    ">
    <div className="py-2 px-5 
                    border-none
                    text-white
                    font-semibold
                    rounded-xl
                    hover:opacity-75
                    bg-black">Book us
    </div>  
    <div className="py-2
                    px-5
                    border-none
                    text-white
                    font-semibold
                    rounded-xl
                    hover:opacity-75
                    bg-gradient-to-r
                    from-cyan-500
                    to-violet-500">Price
    </div>
    <div  className="py-2
                     px-5
                     border-none
                     text-white
                     font-semibold
                     rounded-xl
                     hover:opacity-75
                     bg-gradient-to-r
                     from-cyan-700
                     to-green-600">Deals
    </div>      

    </div>           

    </div>
                     
    </div>
           {/*............................................  */}
           <div   className="sm:flex
                      gap-5
                      space-y-5
                      sm:space-y-0">
    <div className="flex 
                   flex-col
                   items-baseline
                   text-left
                   gap-2
                   max-w-[300px]
                   border rounded-lg
                   p-5
                   hover:shadow-xl
                   transaction-all
                   duration-300
                   cursor-pointer
                   hover:-translate-y-1">
    <img src={floor} className="w-[300px] rounded-rd" alt=""></img>
    <h3   className="text-lg
                    font-bold">4.Deap clean with water
    </h3>  
    <span className="text-sm
                    text-gray-500
                    font-semibold">
    </span> 

    <p className="text-xs
                 text-gray-400
                 font-medium
                 max-w-64">
                   Scrubbing with water remove deep-set dirt, stainsDeep clean greasy surfaces, such as stovetops, range hoods, and backsplashes using water mixed with a degreasing solutionScrub tile floors and grout lines to remove food particles and dirt buildup.

     </p>  

               {/* ............... */}
    <div className="flex 
                    gap-3
                    text-xs
                    ">
    <div className="py-2 px-5 
                    border-none
                    text-white
                    font-semibold
                    rounded-xl
                    hover:opacity-75
                    bg-black">Book us
    </div>  
    <div className="py-2
                    px-5
                    border-none
                    text-white
                    font-semibold
                    rounded-xl
                    hover:opacity-75
                    bg-gradient-to-r
                    from-cyan-500
                    to-violet-500">Price
    </div>
    <div  className="py-2
                     px-5
                     border-none
                     text-white
                     font-semibold
                     rounded-xl
                     hover:opacity-75
                     bg-gradient-to-r
                     from-cyan-700
                     to-green-600">Deals
    </div>      

    </div>           

    </div>
                     
    </div>       
    </div>                
      
    </div>
  )
}

export default Project
