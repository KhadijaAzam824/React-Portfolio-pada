import React from 'react'
import staff from "./assets/staff.jpg" 
import group from "./assets/group.jpg" 
import group2 from "./assets/group2.jpg"

const Education = () => {
  return (
    
    <div className='space-y-3'>
    <h2  className='text-3xl
                    font-bold'>Education

    </h2>
    <div className="flex
                   items-center
                   gap-5">
     <img src={group2} alt="" className='w-20 border rounded-full'></img> 
    <div  className="flex items-center
                    justify-between
                    flex-1">
    <div  className="flex flex-col">
    <h3   className='font-semibold text-2xl'>University </h3>
    <span className='font-medium
                     text-blue-500
                     tex-sm
                     text-justify'>
                      
                        <li>Certified Custodial Technician (CCT) </li>
                        <li>Certified Professional Cleaner (CPC)</li>
                        <li>Inspection, Cleaning, and Restoration</li>
                    
                     </span>
    </div>  
    <div  className="text-green-400">December 2020 -August 2024
    
    </div>                
      
    </div>
    </div>

    <div className="flex
                   items-center
                   gap-5">
    <img src={group} alt="" className='w-20 border rounded-full'>
    </img> 
    <div  className="flex items-center
                    justify-between
                    flex-1">
    <div  className="flex flex-col">
    <h3   className='font-semibold text-2xl'>School</h3>
    <span className='font-medium
                      text-blue-500
                      tex-sm
                      text-justify'>
                        
                       <li> Commercial Cleaning Fundamentals</li>
                       <li> High-Touch Surface Disinfection</li>
                       <li> Cleaning Safety Standards and PPE Use</li>
                      
                      </span>
    </div>  
    <div  className="text-green-400">Januvary 2015 -August 2017
    
    </div>                
      
    </div>
    </div>

    <div className="flex
                   items-center
                   gap-5">
     <img src={staff} alt="" className='w-20 border rounded-full'>
    </img> 
    <div  className="flex items-center
                    justify-between
                    flex-1">
    <div  className="flex flex-col">
    <h3   className='font-semibold text-2xl'>Dimploma </h3>
    <span className='font-medium
                      text-blue-500
                      tex-sm
                      text-justify'>
                        <li>COVID-19 Cleaning,Disinfection Protocols</li>
                        </span>
    </div>  
    <div  className="text-green-400">December 2019 -December 2020
    
    </div>                
      
    </div>
    </div>

    
    
    
    </div>
  )
}
  


export default Education
