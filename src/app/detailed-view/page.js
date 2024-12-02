import TopNavbar from '@/components/TopNavbar'
import React from 'react'

import coimg from "@/assets/coimg.svg"
import linkico from "@/assets/linkico.svg"
import xlogo from "@/assets/tlogo.svg"
import tlogo from "@/assets/xlogo.svg"
import wlogo from "@/assets/wlogo.svg"

import xblack from "@/assets/xblack.svg"
import sett from "@/assets/sett.svg"
import bgwall from "@/assets/bgwall.svg"
import smile from "@/assets/smile.png"
import pin from "@/assets/pin.svg"

import Image from 'next/image'

const page = () => {
  return (
    <div className='bg-[#111111] p-[20px]'>
      <TopNavbar/>

      <div className='flex justify-between mt-10 items-start gap-[32px] text-white font-montserrat'>
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

        <div className='flex flex-col gap-[32px]'>
          <div className='bg-[#1B1C1E] p-[32px] shadow-[12.7px_12.7px_44.02px_0px_#0000004F] rounded-[40px]'>
            <div className='gap-[23px] flex'>
              <button className='border-0 text-[#666666] w-[175px] py-[10px]  bg-[#2C2D30] shadow-[4.23px_4.23px_11.96px_0px_#00000054] rounded-[18px] font-[800] text-[21px]'> BUY</button>
              <button className='border-0 text-[#1B1C1E] w-[175px] py-[10px]  bg-primary shadow-[4.23px_4.23px_11.96px_0px_#00000054] rounded-[18px] font-[800] text-[21px]'> SELL</button>

            </div>
            <div className='flex justify-end w-full mt-8'>
              <Image src={sett} alt='' className=''/>
            </div>

            <div className='bg-[#111111] rounded-[24px] mt-4 p-5 flex justify-between items-center shadow-[12.7px_12.7px_14.81px_0px_#00000040]'>
              <div>
                <p className='font-bebasneue opacity-30 text-[24px] font-[400]'> Enter amount</p>
                <p className=' opacity-30 text-[10px] font-[400]'>User balance : 0.000010 PROMOTION</p>
              </div>
              <div className='w-[48.5px] h-[48.5px] rounded-full overflow-hidden'>
                <Image src={bgwall} alt=''/>
              </div>
            </div>

            <div className='flex justify-between items-center gap-[25px] mt-[60px]'>
              <div>
                <div className='flex gap-2'>
                  <div className='bg-[#2C2D30] rounded-full w-[75px] text-center py-0.5'>
                    <p className='font-bebasneue font-[400] text-[15px] opacity-50'>25%</p>
                  </div>
                  <div className='bg-[#2C2D30] rounded-full w-[75px] text-center py-0.5'>
                    <p className='font-bebasneue font-[400] text-[15px] opacity-50'>50%</p>
                  </div>
                </div>
                <div className='flex gap-2 mt-2'>
                    <div className='bg-[#2C2D30] rounded-full w-[75px] text-center py-0.5'>
                      <p className='font-bebasneue font-[400] text-[15px] opacity-50'>75%</p>
                    </div>
                    <div className='bg-[#2C2D30] rounded-full w-[75px] text-center py-0.5'>
                      <p className='font-bebasneue font-[400] text-[15px] opacity-50'>100%</p>
                    </div>
                    <div className='bg-[#2C2D30] rounded-full w-[75px] text-center py-0.5'>
                      <p className='font-bebasneue font-[400] text-[15px] opacity-50'>RESET</p>
                    </div>
                </div>
                
              </div>
              <p className='round bg-primary leading-[40px] pt-[12px] text-[#262626] text-[52px] text-center w-[150px] rounded-[15px] shadow-[5.21px_5.21px_7.76px_0px_#00000040]'>
                SWAP
              </p>
            </div>

            <div className='bg-white bg-opacity-5 mt-10 rounded-[7px] overflow-hidden h-[22px]'>
              <div className='bggradient h-full opacity-100 w-[60%] rounded-[7px] '>

              </div>
            </div>

            <div className='flex justify-between items-center mt-4'>
              <p className='font-bebasneue text-[21px]'>BONDING CURVE PROGRESS</p>
              <p className='text-primary text-[21px] font-[700]'>0.86%</p>
            </div>

            <div className='bg-[#111111] shadow-[8.47px_9.52px_17.57px_0px_#00000040]  w-[407px]  mt-5 rounded-[32px] px-[30px] py-[30px]'>
              <p className='font-[700] text-[16px] text-center leading-[23px]'>
                
                There are <span className='text-primary font-[900]'>676,991,162.93 PROMOTION 
                tokens and 4,546.3 ETH still available in 
                the bonding curve for sale.</span> 
              
              </p>

              <p className='font-[700] text-[16px] text-center mt-5 leading-[23px]'>
                When the market cap reaches <span className='text-primary font-[900]'>$77,296.81</span>,
                all liquidity from the bonding curve will be 
                moved to UNISWAP and locked.<span className='text-primary font-[900]'> This 
                process accelerates as the price rises.</span>
              </p>
              
              <p className=' text-[16px] text-center text-primary mt-5 font-[900]'>
                For more details, check out our <br/>documentation
                </p>
             

            </div>

            <div className='bg-[#2C2D30] mt-6 p-4 shadow-[7.41px_7.41px_42.33px_0px_#00000040] rounded-[21px]'>
              <p className='uppercase font-bebasneue text-[19px] font-[400]'>
                <span className='text-primary'>king of the monsters</span> progress</p>
              <div className=' bg-white bg-opacity-20 rounded-full w-full h-[10px] mt-5'>
                <div className='bg-primary shadow-[0px_0px_12.7px_0px_#A8FF2F87] h-full rounded-full w-[60%]'>

                </div>
              </div>
              <p className='text-[15px] font-[900] text-center mt-4'>Dethrone <span className='font-[700] opacity-40'>the current king at </span> <span className='text-primary'>$43,134 market cap.</span></p>
            </div>
          </div>

          <div className='bg-[#1B1C1E]  shadow-[12.7px_12.7px_44.02px_0px_#0000004F] rounded-[40px]'>
            <p className='font-[900] text-[25px] text-[#262626] bg-primary  py-5 w-[384px] text-center rounded-[40px_0px]'> HOLDER DISTRIBUTION</p>
            <div className='bg-[#D9D9D926] my-8'>
              <p className='font-[900] text-[22px] text-center   py-3'> 
                <span className='text-primary '>TOP 10</span> USERS’ HOLDING - <span className='text-primary'>30.54%</span></p>
            </div>
            <div>
              <ul className='px-8 space-y-3 h-[398px] overflow-y-auto mb-5'>
                <li className='flex items-center justify-between'>
                  <p className='text-[20px] text-primary font-[800]'>034...24RD</p>
                  <p className='text-[29px] font-bebasneue'> <span className='text-[21px]'>(BONDING CURVE)</span>   26.42 %  </p>
                </li>
                <li className='flex items-center justify-between'>
                  <p className='text-[20px] text-primary font-[800]'>034...24RD</p>
                  <p className='text-[29px] font-bebasneue'> <span className='text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li>
                <li className='flex items-center justify-between'>
                  <p className='text-[20px] text-primary font-[800]'>034...24RD</p>
                  <p className='text-[29px] font-bebasneue'> <span className='text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li> 
                <li className='flex items-center justify-between'>
                  <p className='text-[20px] text-primary font-[800]'>034...24RD</p>
                  <p className='text-[29px] font-bebasneue'> <span className='text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li>
                <li className='flex items-center justify-between'>
                  <p className='text-[20px] text-primary font-[800]'>034...24RD</p>
                  <p className='text-[29px] font-bebasneue'> <span className='text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li><li className='flex items-center justify-between'>
                  <p className='text-[20px] text-primary font-[800]'>034...24RD</p>
                  <p className='text-[29px] font-bebasneue'> <span className='text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li><li className='flex items-center justify-between'>
                  <p className='text-[20px] text-primary font-[800]'>034...24RD</p>
                  <p className='text-[29px] font-bebasneue'> <span className='text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li><li className='flex items-center justify-between'>
                  <p className='text-[20px] text-primary font-[800]'>034...24RD</p>
                  <p className='text-[29px] font-bebasneue'> <span className='text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li><li className='flex items-center justify-between'>
                  <p className='text-[20px] text-primary font-[800]'>034...24RD</p>
                  <p className='text-[29px] font-bebasneue'> <span className='text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li><li className='flex items-center justify-between'>
                  <p className='text-[20px] text-primary font-[800]'>034...24RD</p>
                  <p className='text-[29px] font-bebasneue'> <span className='text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li>
                
              </ul>
            </div>
          </div>

        </div>
        
      </div>
      
      <div className='bg-[#1B1C1E] mt-[32px]'>
        <div className='flex justify-between'>
          <p className='font-[900] text-[30px] text-[#262626] bg-primary  py-5 w-[349px] text-center rounded-[40px_0px]'> COMMENTS</p>
          <p className='font-[800] text-[30px] text-white bg-[#38383F]  py-5 w-[420px] text-center rounded-[0px_40px]'> TRADING HISTORY</p>
           
        </div>

        <div className='mt-[60px] h-[758px] overflow-y-auto pb-[40px] px-[40px] flex flex-col gap-[32px]'>
        
          <div className='bg-[#111111] rounded-[40px]'>
            <p className='font-[900] text-[28px] text-[#111111] bg-white  py-2 w-[288px] text-center rounded-[50px_0px]'> Your ID</p>
          
            <textarea name="" id="" placeholder='WRITE YOUR COMMENTS' className='h-[240px] w-full font-bebasneue font-[400] text-[34px] p-8 bg-transparent text-white opacity-30'></textarea>
            <div className='flex justify-between items-center px-16 mb-10'>
              <p className='font-bebasneue font-[400] text-[34px] text-white opacity-30'>0/256</p>
              <div className='flex gap-8 items-center'>
                <Image src={smile} alt=''/>
                <button className='border-0 bg-primary text-[#262626] text-[28px] font-[800] px-8 py-1 rounded-[20px]'>SUBMIT</button>
              </div>
            </div>
          </div>

          <div className='bg-[#111111] rounded-[40px] pb-4'>
            <div className='items-center flex justify-between'>
              <div className='flex items-center gap-2'>
                <p className='font-[900] text-[28px] text-[#111111] bg-white  py-2 w-[288px] text-center rounded-[50px_0px]'> TNFv...6GVT</p>
                
                <div className='flex gap-2 items-center'>
                  <Image src={pin} alt=''/>
                  <p className='font-[800] text-primary text-[15px]'>DEV</p>
                </div>
              </div>
              <p className='text-primary font-[800] text-[22px] pe-8 pt-2'>21 minutes ago</p>
            </div>
            <p className='font-[800] text-[22px] leading-[26px] text-white px-10 my-8'>SOLANAFIGHTS ⚔️🥊 JOIN THE VERY FIRST TAP-SWAP GAME LIKE HAMSTER KOMBAT ON SOLANA 🔥 TELEGRAM GAME/BOT IS ALREADY LIVE ✅ FAIR LAUNCH IS COMING SOON, DON'T MISS IT ➡️ https://t.me/solanafights</p>
            
          </div>

          <div className='bg-[#111111] rounded-[40px] pb-4'>
            <div className='items-center flex justify-between'>
              <div className='flex items-center gap-2'>
                <p className='font-[900] text-[28px] text-[#111111] bg-white  py-2 w-[288px] text-center rounded-[50px_0px]'> TNFv...6GVT</p>
                
              
              </div>
              <p className='text-primary font-[800] text-[22px] pe-8 pt-2'>21 minutes ago</p>
            </div>
            <p className='font-[800] text-[22px] leading-[26px] text-white px-10 my-8'>SOLANAFIGHTS ⚔️🥊 JOIN THE VERY FIRST TAP-SWAP GAME LIKE HAMSTER KOMBAT ON SOLANA 🔥 TELEGRAM GAME/BOT IS ALREADY LIVE ✅ FAIR LAUNCH IS COMING SOON, DON'T MISS IT ➡️ https://t.me/solanafights</p>
            
          </div>
          <div className='bg-[#111111] rounded-[40px] pb-4'>
            <div className='items-center flex justify-between'>
              <div className='flex items-center gap-2'>
                <p className='font-[900] text-[28px] text-[#111111] bg-white  py-2 w-[288px] text-center rounded-[50px_0px]'> TNFv...6GVT</p>
                
              
              </div>
              <p className='text-primary font-[800] text-[22px] pe-8 pt-2'>21 minutes ago</p>
            </div>
            <p className='font-[800] text-[22px] leading-[26px] text-white px-10 my-8'>SOLANAFIGHTS ⚔️🥊 JOIN THE VERY FIRST TAP-SWAP GAME LIKE HAMSTER KOMBAT ON SOLANA 🔥 TELEGRAM GAME/BOT IS ALREADY LIVE ✅ FAIR LAUNCH IS COMING SOON, DON'T MISS IT ➡️ https://t.me/solanafights</p>
            
          </div>
          <div className='bg-[#111111] rounded-[40px] pb-4'>
            <div className='items-center flex justify-between'>
              <div className='flex items-center gap-2'>
                <p className='font-[900] text-[28px] text-[#111111] bg-white  py-2 w-[288px] text-center rounded-[50px_0px]'> TNFv...6GVT</p>
                
              
              </div>
              <p className='text-primary font-[800] text-[22px] pe-8 pt-2'>21 minutes ago</p>
            </div>
            <p className='font-[800] text-[22px] leading-[26px] text-white px-10 my-8'>SOLANAFIGHTS ⚔️🥊 JOIN THE VERY FIRST TAP-SWAP GAME LIKE HAMSTER KOMBAT ON SOLANA 🔥 TELEGRAM GAME/BOT IS ALREADY LIVE ✅ FAIR LAUNCH IS COMING SOON, DON'T MISS IT ➡️ https://t.me/solanafights</p>
            
          </div>
          <div className='bg-[#111111] rounded-[40px] pb-4'>
            <div className='items-center flex justify-between'>
              <div className='flex items-center gap-2'>
                <p className='font-[900] text-[28px] text-[#111111] bg-white  py-2 w-[288px] text-center rounded-[50px_0px]'> TNFv...6GVT</p>
                
              
              </div>
              <p className='text-primary font-[800] text-[22px] pe-8 pt-2'>21 minutes ago</p>
            </div>
            <p className='font-[800] text-[22px] leading-[26px] text-white px-10 my-8'>SOLANAFIGHTS ⚔️🥊 JOIN THE VERY FIRST TAP-SWAP GAME LIKE HAMSTER KOMBAT ON SOLANA 🔥 TELEGRAM GAME/BOT IS ALREADY LIVE ✅ FAIR LAUNCH IS COMING SOON, DON'T MISS IT ➡️ https://t.me/solanafights</p>
            
          </div>
        
        </div>

        
      </div>
        
    </div>
  )
}

export default page
