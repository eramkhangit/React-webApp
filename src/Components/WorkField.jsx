import React from 'react'

export default function WorkField({icon ,text , price , color,textColor }) {
  return (
    <div className='text-center p-5 space-y-3'>
        <div className='inline-block'>
            <div className='text-5xl'>{icon}</div>
        </div>

        <h2 className='font-bold'>{text}</h2>

        <h1 className='font-bold'><span> ${price} </span></h1>

        <h4 >Lorem ipsum dolor</h4>

        <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, alias?
        </p>

        <h4 >Lorem ipsum dolor sit</h4>

        <button className='w-[30%] text-white px-4 py-2 rounded' style={{backgroundColor:color ,color:textColor }} >Start Trial </button>
        
    </div>
  )
}
