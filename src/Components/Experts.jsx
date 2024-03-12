import React from 'react'
import laptop from "../assets/Image/laptop.jpg"

export default function Experts() {
  return (
    <div className='max-w-[1240px] mx-auto p-2  md:grid grid-cols-3 gap-6 '  >
        <div className=' cols-span-1 w-[100%] md:w-[100%]'>
            <img src={laptop} alt="" className='w-[100%] h-[100%]'/>
        </div>
        <div className=' h-[200px] col-span-2 flex flex-col justify-center mt-5'>
            <h2 className='text-[#1b0d68] font-bold my-2 '>LEARN FROM EXPERTS</h2>
            <p className='text-justify p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quam atque modi incidunt repudiandae ducimus doloremque, explicabo praesentium, error quidem, nobis sit. Inventore ex, similique quaerat quibusdam nobis exercitationem tenetur.</p>
            <button className='mb-5 p-[2px] md:p-2  w-[30%] md:w-[30%] bg-black text-white rounded '>Get Started</button>
        </div>
    </div>
  )
}
