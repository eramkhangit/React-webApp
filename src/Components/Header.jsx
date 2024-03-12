import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

function Header() {
 
    // ________________ Manage State _______________
    const [toggle ,setToggle ] = useState(false)

  return (
    <header className='bg-[#04b913] p-4'>
        <div className='py-[10px] max-w-[1240px] items-center  mx-auto flex justify-between '>
            <div className='text-3xl font-bold
            '>
                Web App
            </div>
            { toggle ? 
             <IoClose onClick={ () => setToggle(!toggle) } className='text-white text-2xl' /> : 
            <IoMdMenu onClick={ () => setToggle(!toggle) } className='text-white text-2xl md:hidden block'/> }

            <ul className='hidden md:flex text-white gap-5 '>
                <li>Home</li>
                <li>Company</li>
                <li>Resource</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            {/* Responsive Menu */}
           < ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[88px] 
           ${toggle ? 'left-[0]' : 'left-[-100%]' }
           `}>
                <li className='p-4' >Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4' >Resource</li>
                <li className='p-4' >About</li>
                <li className='p-4'>Contact</li>
            </ul>
        </div>
    </header>
  )
}

export default Header