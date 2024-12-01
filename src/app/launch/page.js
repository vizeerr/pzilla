import TopNavbar from '@/components/TopNavbar'
import React from 'react'
import line from "@/assets/line.svg"
import cam from "@/assets/cam.svg"
import Image from 'next/image'

const page = () => {
  return (
    <div className='bg-[#121215]'>
      <TopNavbar/>
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
              <p className='text-primary text-[29px] font-[800] mt-8'>TICKER</p>
              <input type="text" placeholder='ENTER TOKEN TICKER' className='border-0 h-[75px] mt-1 w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue m-0 text-white text-[32px] px-[25px] py-[5px] rounded-[13px] shadow-[20px_20px_33.3px_0px_#00000066]'/>
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
              <div className='flex justify-center items-center h-[104px] mt-1 w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue m-0 text-white text-[32px] px-[25px] py-[5px] rounded-[13px] shadow-[20px_20px_33.3px_0px_#00000066]'>
                <input type="text" placeholder='ENTER AMOUNT' className='border-0 w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue text-white text-[32px]'/>
                <p className='font-bebasneue font-[400] w-[300px] text-[32px] text-white '>USER BALANCE : <span className='text-primary'>0 ETH</span></p>
              </div>
            </div>
            <div className='w-full flex justify-center mt-[67px]'>
            <button className='anim border-0 bg-primary shadow-[0px_4px_4px_0px_#00000040] text-[#38383F] mx-auto round font-[500] text-[82px] w-[398px] leading-[85px] pt-4 rounded-full'>LAUNCH</button>
            </div>
      </div>
      </div>
      <div className='bg-[#22222769] p-[100px] flex items-center  mt-20'>
        <div className='flex gap-[77px] items-center'>
          <Image src={line} alt="" />
          <p className='font-montserrat font-[700] text-[56px] w-[850px] text-white'>Launch your token and hit $5K volume to get <br/>
          <span className='text-primary italic'>

          $50 (gas fee + extra) back !
          </span></p>
        </div>
        <div className='curvbg w-[728px]  rounded-[60px] ps-[28px] py-[40px] relative'>
          <p className='anim  text-[#1B1C1E] sachabo text-[40px] bg-primary rounded-full px-4 pt-6 absolute end-0 top-0 pb-4 text-center w-[290px]'> DEVELOPER REWARD</p>
          <p className='font-montserrat font-[900] text-primary p-[5px] text-[48px] bg-[#19191C] px-8 pb-6 pt-4 w-[311px] rounded-[32px]'>0.144 ETH</p>
          <p className='sachabo text-primary font-[400] mt-2 text-[58px] mx-[40px]'> Directly into your wallet</p>
          <p className='sachabo text-white font-[400] text-[58px] mt-[50px] mx-[40px]'> Achieve the Bonding Curve milestone.</p>

        </div>
      </div>
    </div>
  )
}

export default page
