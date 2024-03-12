import React from 'react'
import { ReactTyped } from "react-typed";

function Banner() {
  return (
    <section className='bg-[#04b913] w-full py-[10px]'>

        <div className='max-w-[1240px] my-[50px] mx-auto text-center font-bold'>

            <div className='text-xl md:text-3xl'>Lorem Ipsum Dolor</div>

            <h2 className='text-white mt-4 text-3xl md:text-[50px]'>lorem Ipsum Dolor Acbgd</h2>

            <div className='mt-8 text-xl md:text-[50px] text-white'>
              
                <ReactTyped className='pl-3' strings={["WebApp lorem ipore anything","lorem lorem aprcdre", "My first react web app "]} typeSpeed={100} backSpeed={50}
                 loop={true} />
            </div>
            <button className='w-[30%] mt-8 bg-black text-white p-3 rounded '>Get Started</button>
        </div>

    </section>
  )
}

export default Banner