import React from 'react'
import line from "@/assets/line.svg"
import Image from 'next/image'

const LaunchFooter = () => {
  return (
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
  )
}

export default LaunchFooter
