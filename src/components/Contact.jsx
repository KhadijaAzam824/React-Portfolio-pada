 import React from 'react'
 
 function Contact() {
   return (
    <div className='flex
                    flex-col
                    items-center
                    justify-center
                    gap-3
                    space-y-6'>
    <h1   className='font-bold
                     text-4xl
                     sm:text-5xl
                     md:text-6xl
                     text-center'>
    <span className='bg-gradient-to-r
                     from-purple-500
                     to-blue-500
                     bg-clip-text
                     text-transparent'>
        Get in touch
      </span>
    </h1> 
    <p    className='text-gray-500
                     font-serif
                     text-lg
                     
                     text-justify'> 
                     <ul> 
                     <li>"We’d Love to Hear from You!"</li>
                     <li>"Have Questions? Get in Touch with Us!"</li>
                     <li>"Contact Us for a Free Quote or Consultation"</li>
                     </ul>  
    </p>  
    <button className='bg-black
                      rounded-lg
                      px-5
                      py-3
                      text-white
                      font-bold
                      text-lg
                      hover:-translate-y-3
                      transition-all
                      duration-300
                      border-2
                      hover:bg-pink-500
                      hover:border-black
                      hover:text-black'>Contact Me

    </button>
      
                   
    </div>
   )
 }
 
 export default Contact