import React from 'react'
import WorkField from './WorkField'
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";
import { MdOutlineDeveloperMode } from "react-icons/md";

export default function Plans() {

    const bgBtnColor = {
        DigitalMarketing : "black" ,
        color : "green"
    }

    const btnTextColor = {
        DigitalMarketingText : "green",
        otherText : "black"
    }

  return (
    <div className=' py-[60px] px-5'>
        <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6'>
            <div className=' my-4 shadow-xl bg-slate-100 hover:scale-105 duration-500'>
                <WorkField icon={<IoPeopleOutline />} text="Web Development"  price="349" color={bgBtnColor.color} textColor={btnTextColor.otherText} />
            </div>

            <div className=' my-4 shadow-xl bg-slate-100 hover:scale-105 duration-500'>
            <WorkField icon={<MdOutlineManageAccounts />} text="Digital Marketing" price="249" color={bgBtnColor.DigitalMarketing} textColor={btnTextColor.DigitalMarketingText} />
            </div>

            <div className=' my-4 shadow-xl bg-slate-100 hover:scale-105 duration-500'>
            <WorkField icon={<MdOutlineDeveloperMode />} text="App Development" price="149" color={bgBtnColor.color} textColor={btnTextColor.otherText} />
            </div>

        </div>
    </div>
  )
}
