"use client"
import React, { useState } from 'react'
import cam from "@/assets/cam.png"
import Image from 'next/image'

const LaunchForm = () => {
    const [ticker,setTicker] = useState("")
  return (
    <div className='mt-10'>

      <div>
        <h1 className='font-montserrat font-[900] text-white text-[60px] text-center'>LAUNCH YOUR <span className='text-primary'>TOKEN</span></h1>
        <p className='text-white opacity-45 font-[700] font-montserrat text-[28px] text-center mt-5'>No presale, No Team Allocation, Lower Gas</p>
      </div>
      <div className='bg-[#222227] font-montserrat w-[1180px] p-[60px] rounded-[48px] shadow-[26px_25px_51.4px_0px_#00000040] mx-auto my-10'>
        <div className='flex justify-between gap-[89px]'>
          <div className='w-full'>
            <div>
              <p className='text-primary text-[29px] font-[800] '>NAME</p>
              <input type="text" placeholder='ENTER TOKEN NAME' className='border-0 h-[75px] mt-1 w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue m-0 text-white text-[32px] px-[25px] py-[5px] rounded-[13px] shadow-[20px_20px_33.3px_0px_#00000066]'/>
            </div>
            <div>
              <div className='flex mt-8 items-center gap-2'>
                <p className='text-primary text-[29px] font-[800] '>TICKER</p>
                <p className={` ${ticker.length>10?"block":"hidden"} text-[#FF2F61] font-[600] `}>*Ticker cannot be more than 10 charachters</p>
              </div>
              <input type="text" onChange={(e)=>{
                setTicker(e.target.value)
              }} placeholder='ENTER TOKEN TICKER (10 CHARACTERS)' className='border-0 h-[75px] mt-1 w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue m-0 text-white text-[32px] px-[25px] py-[5px] rounded-[13px] shadow-[20px_20px_33.3px_0px_#00000066]'/>
            </div>
          </div>
          <div className='bg-[#38383F] flex flex-col justify-center items-center mt-6 rounded-[37px] w-[273px] h-[273px] border-[4px] border-[#A8FF2F] p-[55px]'>
            <Image unoptimized={true} src={cam}/>
          <p className='font-bebasneue  font-[400] text-center mt-4 text-[25px] mx-auto text-[#65656A] leading-[33px]'>JPEG/PNG/WEBP/GIF<br/>
          <span className='text-[21px]'>LESS THAN 4MB</span></p>
          </div>

        </div>

        <div>
              <p className='text-primary text-[29px] font-[800] mt-8 '>DESCRIPTION</p>
              <textarea  placeholder='ENTER TOKEN DESCRIPTION' className='border-0 h-[186px] mt-1 w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue m-0 text-white text-[32px] px-[25px] py-[5px] rounded-[13px] shadow-[20px_20px_33.3px_0px_#00000066]'/>
            </div>
          <div className='flex gap-[66px] w-full'>
            <div className='w-full'>
              <p className='text-primary text-[29px] font-[800] mt-8'>TWITTER</p>
              <input type="text" placeholder='OPTIONAL' className='border-0 h-[75px] mt-1 w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue m-0 text-white text-[32px] px-[25px] py-[5px] rounded-[13px] shadow-[20px_20px_33.3px_0px_#00000066]'/>
            </div>
            <div className='w-full'>
              <p className='text-primary text-[29px] font-[800] mt-8'>TELEGRAM</p>
              <input type="text" placeholder='OPTIONAL' className='border-0 h-[75px] mt-1 w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue m-0 text-white text-[32px] px-[25px] py-[5px] rounded-[13px] shadow-[20px_20px_33.3px_0px_#00000066]'/>
            </div>
          </div>

          <div>
              <p className='text-primary text-[29px] font-[800] mt-8'>WEBSITE</p>
              <input type="text" placeholder='OPTIONAL' className='border-0 h-[75px] mt-1 w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue m-0 text-white text-[32px] px-[25px] py-[5px] rounded-[13px] shadow-[20px_20px_33.3px_0px_#00000066]'/>
            </div>
            <div>
              <p className='text-primary text-[29px] font-[800] mt-8'>INITIAL BUY</p>
              <div className='flex justify-center items-center h-[104px] mt-1 w-full bg-[#38383F] font-[400] font-bebasneue m-0 text-white text-[32px] px-[30px] py-[10px] rounded-[13px] shadow-[20px_20px_33.3px_0px_#00000066]'>
                <input type="text" placeholder='ENTER AMOUNT' className='border-0 w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue text-white text-[32px]'/>
                  <span className='w-[6px] rounded-full  bg-white opacity-20 h-full'></span>
                <p className='font-bebasneue font-[400] ms-[60px] w-[300px] text-[32px] text-white  '>USER BALANCE : <span className='text-primary'>0 ETH</span></p>
              </div>
            </div>
            <div className='w-full flex justify-center mt-[67px]'>
            <button className='anim border-0 bg-primary shadow-[0px_4px_4px_0px_#00000040] text-[#38383F] mx-auto round font-[500] text-[82px] w-[398px] leading-[85px] pt-4 rounded-full'>LAUNCH</button>
            </div>
      </div>
      </div>
  )
}

export default LaunchForm
