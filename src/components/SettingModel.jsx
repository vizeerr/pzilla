"use client"
import React, { useState } from 'react'

import cross from "@/assets/cross.svg"
import Image from 'next/image'
const SettingModel = ({openSet,setOpenSet}) => {
    const [opt,setOpt] = useState(0);
  return (
    <div className={`${openSet?"block":"hidden"} font-montserrat absolute end-5 z-20 w-[304px] px-[20px] pt-[8px] pb-[14px] bg-[#2C2D30] rounded-[32px]`}>
        <div className='flex items-center justify-between'>
            <p className='text-primary text-[13px] font-[900]'>SET MAX SLIPPAGE</p>
            <Image onClick={()=>setOpenSet(false)} src={cross} width={29} alt="cross"/>
        </div>
        <div className='flex my-[28px]  justify-between'>
            <button onClick={()=>setOpt(1)} className= {`${opt == 1? "text-[#262626] bg-primary":"text-white bg-[#1B1C1E]  text-opacity-25"} anim text-[14.5px] font-[800]  border-0 px-2.5 rounded-[9px] shadow-[2px_2px_7.4px_0px_#00000080]`}>2%</button>
            <button onClick={()=>setOpt(2)} className= {`${opt == 2? "text-[#262626] bg-primary":"text-white bg-[#1B1C1E]  text-opacity-25"} anim text-[14.5px] font-[800]  border-0 px-2.5 rounded-[9px] shadow-[2px_2px_7.4px_0px_#00000080]`}>10%</button>
            <button onClick={()=>setOpt(3)} className= {`${opt == 3? "text-[#262626] bg-primary":"text-white bg-[#1B1C1E]  text-opacity-25"} anim text-[14.5px] font-[800]  border-0 px-2.5 rounded-[9px] shadow-[2px_2px_7.4px_0px_#00000080]`}>20%</button>
            <button onClick={()=>setOpt(4)} className = {`${opt == 4? "text-[#262626] bg-primary":"text-white bg-[#1B1C1E]  text-opacity-25"} anim text-[9px] font-[800]  border-0 px-2.5 rounded-[9px] shadow-[2px_2px_7.4px_0px_#00000080]`}>ENTER AMOUNT</button>

        </div>
        <p className={`${opt > 1? "block":"hidden" } text-[#FF003D] text-[13px] leading-[16px] text-center mb-[28px] shadow-[0px_0.83px_0.83px_0px_#00000040]`}>Caution: Slippage above 10% may result in significant deviations in the transaction price. Please proceed with caution.</p>
        <div className='flex justify-center'>

            <button onClick={()=>setOpenSet(false)} className='text-[#262626] bg-primary rounded-full font-[900] text-[18.5px] w-[122px]'>SAVE</button>
        </div>
    </div>
  )
}

export default SettingModel