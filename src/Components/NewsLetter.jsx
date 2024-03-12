import React from 'react'

export default function NewsLetter() {
    return (
        <div className=' bg-[#04b913] p-2 '>
            <div className='max-w-[1240px]  mx-auto md:flex justify-between py-[6px]'>
                <div className='m-2'>
                    <h1 className='text-[20px] md:text-[40px] font-bold text-white'>Want to learn latest I.T skills</h1>
                    <span className=' text-white'>Sign up to our newsletter and stay up to date</span>
                </div>

                <div className='m-2'>

                    <input type="text" className='sm:w-full w-[40%] rounded mb-2 p-3 text-slate-600 mr-2' placeholder='Email' />

                    <button className='bg-black mx-auto text-white p-3  rounded'>Get Started</button><br />

                    <p className='text-white'>We care about the protection of your data. Read our <br />
                        <a href="" className='text-black'>Privacy Policy</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
