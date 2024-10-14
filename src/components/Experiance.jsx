import React from 'react'
import pool from './assets/pool.jpg'
import green4 from './assets/green4.jpg'
import solar from './assets/solar.jpg'
import tank from './assets/tank.jpg'
import hospital from './assets/hospital.jpg'

const Experiance = () => {
  return (
    <div className='space-y-3'>
      <h2 className='text-3xl font-bold'>Work Experiance

      </h2>
      <div className="flex items-center gap-5">
        <img src={pool} alt="" className='border rounded-full w-25'>
        </img>

        <div className="flex items-center justify-between flex-1">
          <div className="flex flex-col">
            <h3 className='text-2xl font-semibold'>Blue ice Swimming Pool </h3>
            <span className='inline-block font-medium text-justify text-blue-500 tex-sm'> Managed  cleaning schedules,Performed deep cleaning
              ,Implemented eco-friendly cleaning products, Scrubbing the pool walls, floor, and tiles to prevent algae buildup and staining.
              <div className="text-green-400">Januvary 2022 - December 2023

          </div>
               </span>
          </div>
          

        </div>
      </div>

      <div className="flex items-center gap-5">
        <img src={green4} alt="" className='border rounded-full w-25'>
        </img>
        <div className="flex items-center justify-between flex-1">
          <div className="flex flex-col">
            <h3 className='text-2xl font-semibold'>Green House </h3>
            <span className='font-medium text-justify text-blue-500 tex-sm'>Removing manure and waste,Regular cleaning and disinfecting of plant diseases
              Cleaning irrigation systems to ensure proper water flow and avoid contamination
              <div className="text-green-400">Jan 2023 - Aug 2024

          </div>
              </span>
          </div>
          

        </div>
      </div>

      <div className="flex items-center gap-5">
        <img src={solar} alt="" className='border rounded-full w-25'>
        </img>
        <div className="flex items-center justify-between flex-1">
          <div className="flex flex-col">
            <h3 className='text-2xl font-semibold'>Solar pano</h3>
            <span className='font-medium text-justify text-blue-500 tex-sm'>Adhering to safety standards and using eco-friendly methods of cleaning to minimize environmental impact
            <div className="text-green-500">Aug 2021-Aug 2024

</div>
                      </span>
          </div>
         

        </div>
      </div>

      <div className="flex items-center gap-5">
        <img src={tank} alt="" className='border rounded-full w-25'>
        </img>
        <div className="flex items-center justify-between flex-1">
          <div className="flex flex-col">
            <h3 className='text-2xl font-semibold'>Crystal Palace  </h3>
            <span className='font-medium text-justify text-blue-500 tex-sm'>Identify and repair leaks, cracks, or corrosion on the interior or exterior of the tank.
                      <div className="text-green-400">Januvary 2000 -August 2024

</div>
                      </span>
          </div>
          

        </div>
      </div>
      <div className="flex items-center gap-5">
        <img src={hospital} alt="" className='border rounded-full w-25'>
        </img>
        <div className="flex items-center justify-between flex-1">
          <div className="flex flex-col">
            <h3 className='text-2xl font-semibold'>Clinx Hospital

            </h3>
            <span className='font-medium text-justify text-blue-500 tex-sm'>Clean and disinfect frequently touched surfaces such as bedrails, doorknobs, light switches, and medical equipment
              Mop floors with high-level disinfectant solutions.
              <div className="text-green-400 ">Januvary 2000 -August 2024

          </div>
              </span>
          </div>
          

        </div>
      </div>
    </div>
  )
}

export default Experiance
