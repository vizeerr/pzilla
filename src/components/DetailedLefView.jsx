import Image from 'next/image'
import React from 'react'
import coimg from "@/assets/coimg.svg"
import linkico from "@/assets/linkico.svg"
import xlogo from "@/assets/tlogo.svg"
import tlogo from "@/assets/xlogo.svg"
import wlogo from "@/assets/wlogo.svg"
import xblack from "@/assets/xblack.svg"

const DetailedLefView = () => {
  return (
    <div className='flex flex-col gap-[32px] '>
          
          <div className='bg-[#1B1C1E] p-[30px] shadow-[12.7px_12.7px_44.02px_0px_#0000004F] rounded-[40px]'>
            <div className='flex justify-between items-start'>
              <div className='flex items-center gap-[33px]'>
                <div className='rounded-[21.16px] relative overflow-hidden'>
                  <Image src={coimg} alt="" />
                  <div className='bg-[#0A0A0B] flex justify-around w-full py-[8px] absolute bottom-0 z-20'>
                    <Image src = {wlogo} alt=''/>
                    <Image src = {xlogo} alt=''/>
                    <Image src = {tlogo} alt=''/>

                  </div>
                </div>
                <div>
                  <div className='flex gap-2 items-center'>
                    <h1 className='text-[37px]  font-[400] font-bebasneue'>CAT SWAP PROMOTION </h1>
                    <p className='text-[26px] font-montserrat font-[900] text-primary'>($ PROMOTION)</p>
                  </div>
                  <div className='flex items-center gap-2 mt-4'>
                    <p className='font-[700] tracking-wide text-[16.5px] mb-1'><span className='opacity-30 '>Created by</span> 34gfj48th</p>
                    <Image src={linkico} alt=''/>
                  </div>
                  <div className='flex items-center gap-2'>
                    <p className='font-[700] tracking-wide text-[16.5px] text-primary mb-1'><span className='opacity-30 text-white '>Contract :</span> TXYpYnL4sp9yWKCcUWfVSodCtfpFkDJQkD</p>
                    <Image src={linkico} alt=''/>
                  </div>
                </div>
                
                
              </div>

              <div className='bg-primary w-[355px] py-[15px] ps-[50px] rounded-[0_40px] text-[#1B1C1E] shadow-[5.29px_5.29px_26.45px_0px_#00000080]'>
                <p className='text-[32px] font-[700]'>MCap</p>
                <p className='font-[800] text-[46px]'>$ 54,124</p>
              </div>
            </div>
            <p className='font-[600] mt-4 opacity-45 text-[19px] leading-[23px]'>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className='flex justify-between mt-10'>
              <div className='bg-[#363A40] w-[428px] rounded-[28.5px] p-[25px] shadow-[7.41px_7.41px_26.45px_0px_#00000040]'>
                <p className='capitalize font-bebasneue font-[400] text-[44px]'>Price</p>
                <p className='text-primary font-[800] text-[32px]'>0.000000000025 ETH</p>
              </div>
              <div className='bg-[#363A40] w-[428px] rounded-[28.5px] p-[25px] shadow-[7.41px_7.41px_26.45px_0px_#00000040]'>
                <p className='capitalize font-bebasneue font-[400] text-[44px]'>24H volume</p>
                <p className='text-primary font-[800] text-[32px]'>$9,999,999.000</p>
              </div>
              <div className='bg-[#363A40] w-[428px] rounded-[28.5px] p-[25px] shadow-[7.41px_7.41px_26.45px_0px_#00000040]'>
                <p className='capitalize font-bebasneue font-[400] text-[44px]'>Token created</p>
                <p className='text-primary font-[800] text-[32px]'>1h 47min <span className='text-white'>ago</span></p>
              </div>
            </div>

          </div>

         
          <div className='bg-[#1B1C1E]  h-[621px] shadow-[12.7px_12.7px_44.02px_0px_#0000004F] rounded-[40px]'>
          <div className='bg-primary w-[349px] text-center py-[15px] rounded-[40px_0px] text-[#1B1C1E] shadow-[6.51px_6.51px_15.63px_0px_#0000005C]'>
                <p className='text-[25px] font-[800]'>GRAPHICAL VIEW</p>
                
              </div>
          </div>

          <div className='bg-[#1B1C1E] shadow-[12.7px_12.7px_44.02px_0px_#0000004F] pb-5 rounded-[40px] overflow-hidden'>

            <div className='flex justify-between items-start '>
              <p className='text-[#000000] leading-[58px] round font-[500] text-[61px] ps-[20px] pe-[40px]   pt-[15px] mt-5 bg-primary rounded-[0_21px_21px_0]'>Share  &  Earn  with  PumpZilla</p>
              <p className='bg-[#303236] shadow-[6.35px_6.35px_39.15px_0px_#00000040] mt-[16px] me-[16px] text-primary font-[700] text-[24px] py-[13px] px-[18px] rounded-[18px]'>REFERRAL DASHBOARD</p>
            </div>
            <div className='px-[30px] mt-[38px] flex gap-[31px] items-center'>
              <p className='font-[400] bg-[#37393D] py-[10px] px-[35px] rounded-[22px]'> <span className='font-bebasneue text-[42px] '> YOUR UNIQUE LINK : </span>   <span className='text-primary font-[700] text-[33px]'> AWEBFSOIWGERGE....1423404599349</span> </p>
              <div  className='bg-primary  w-[78px] h-[78px] p-[16px] rounded-[22px]'>

                <Image src={xblack} alt=''/>
              </div>
            </div>
            <p className='gradientText font-[500] text-[52px] round mt-5 text-end pe-10'>Earn  weekly  PumpZilla  rewards  through  referrals !</p>

          </div>

        </div>
  )
}

export default DetailedLefView