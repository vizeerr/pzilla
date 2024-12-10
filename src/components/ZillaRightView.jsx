"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import sett from "@/assets/sett.svg"
import bgwall from "@/assets/bgwall.svg"
import eth from "@/assets/eth.png"
import SettingModel from './SettingModel'
import info from "@/assets/info.svg"
import pizz from "@/assets/pizz.svg"
import CircularSlider from '@fseehawer/react-circular-slider';
import { motion } from 'framer-motion';



const ZillaRightView = () => {
    const [btnState,setBtnState] = useState("sell")
    const [openSet,setOpenSet] = useState(false)
    const [amt,setAmt] = useState(null)
    const [balance,setBalance] = useState(0.000010)
    const [hoveredCard, setHoveredCard] = useState(null); // Track hovered card
    const [mcard, setMcard] = useState(null); // Track hovered card


    const handleMouseEnter = (cardId) => setHoveredCard(cardId);
    const handleMouseLeave = () => setHoveredCard(null);
  
    const [prom,setPromo] = useState(false)
    const [degree, setDegree] = useState(0);
    const [timeElapsed, setTimeElapsed] = useState(0); // Time in seconds
    const totalDuration = 30 * 60; // 30 minutes in seconds
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTimeElapsed((prev) => {
          if (prev < totalDuration) {
            const newElapsed = prev + 1;
            setDegree((newElapsed / totalDuration) * 360); 
            return newElapsed;
          }
          clearInterval(interval); 
          return prev;
        });
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    };
    

  return (
    <div className='flex flex-col gap-[32px]'>
        <div className='bg-[#1B1C1E]  overflow-x-hidden relative p-[32px] shadow-[12.7px_12.7px_44.02px_0px_#0000004F] rounded-[40px]'>
            <div className='gap-[23px] flex'>
              <button onClick={()=>setBtnState('buy')} className= {`${btnState=="buy"? "bg-primary text-[#1B1C1E]" :"text-[#666666] bg-[#2C2D30]"} border-0  anim w-full py-[10px]   shadow-[4.23px_4.23px_11.96px_0px_#00000054] rounded-[18px] font-[800] text-[21px]`}> BUY</button>
              <button  onClick={()=>setBtnState('sell')} className= {`${btnState=="sell"? "bg-primary text-[#1B1C1E]" :"text-[#666666] bg-[#2C2D30]"} border-0  anim w-full py-[10px]   shadow-[4.23px_4.23px_11.96px_0px_#00000054] rounded-[18px] font-[800] text-[21px]`}> SELL</button>

            </div>

            <div  className= {`${btnState=="buy"?"justify-between" : "justify-end"} flex  items-center w-full mt-8`}>
                <div onClick={()=>setPromo(!prom)} className={`${btnState=="buy"? "block" : "hidden"} bg-[#66666663]  anim w-[128px] text-white text-center rounded-full pt-1`}>
                    <p className='font-bebasneue font-[400]  text-[14px]'>SWITCH TO <span className='text-primary'>{prom?"ETH":"PROMOTION"}</span></p>
                </div>
              <Image onClick={()=>{setOpenSet(true)}} src={sett} alt='' className='anim'/>
            </div>
            <SettingModel openSet={openSet} setOpenSet = {setOpenSet} />

            {btnState == 'sell'? 
            
            <div> 
                <div className='bg-[#111111] rounded-[24px] mt-4 p-5 flex justify-between items-center shadow-[12.7px_12.7px_14.81px_0px_#00000040]'>
                    <div>
                        <p className='font-bebasneue opacity-30 text-[24px] font-[400]'> Enter amount</p>
                        <p className=' opacity-30 text-[10px] font-[400]'>User balance : {balance} PROMOTION</p>
                    </div>
                    <div className='w-[48.5px] h-[48.5px] rounded-full overflow-hidden'>
                        <Image src={bgwall} alt=''/>
                    </div>
                </div> 
                
                <div className='flex justify-between gap-[25px] items-center  mt-[60px]'>
                    <div className='flex flex-wrap  gap-[5px]'>
                        <div className='flex gap-2'>
                            <div className='bg-[#2C2D30]  anim rounded-full w-[68px] text-center pt-[3px] '>
                            <p className='font-bebasneue font-[400] text-[15px] opacity-50'>25%</p>
                            </div>
                            <div className='bg-[#2C2D30] anim rounded-full w-[68px] text-center pt-[3px]'>
                            <p className='font-bebasneue font-[400] text-[15px] opacity-50'>50%</p>
                            </div>
                        </div>
                        <div className='flex gap-2 '>
                            <div className='bg-[#2C2D30] anim rounded-full w-[68px] text-center pt-[3px]'>
                                <p className='font-bebasneue font-[400] text-[15px] opacity-50'>75%</p>
                            </div>
                            <div className='bg-[#2C2D30] anim rounded-full w-[68px] text-center pt-[3px]'>
                                <p className='font-bebasneue font-[400] text-[15px] opacity-50'>100%</p>
                            </div>
                            <div className='bg-[#2C2D30] anim rounded-full w-[68px] text-center pt-[3px]'>
                                <p className='font-bebasneue font-[400] text-[15px] opacity-50'>RESET</p>
                            </div>
                        </div>
                    </div>
                    <p className='round anim bg-primary leading-[40px] pt-[12px] text-[#262626] text-[52px] text-center px-[35px] rounded-[15px] shadow-[5.21px_5.21px_7.76px_0px_#00000040]'>
                    SWAP
                    </p>
                </div>

            </div> :
            <div>
                <div className='bg-[#111111] rounded-[24px] mt-4 p-5 flex justify-between items-center shadow-[12.7px_12.7px_14.81px_0px_#00000040]'>
                    <div>
                        <input type='number' onChange={(e)=>{
                            setAmt(e.target.value)
                        }} className='font-bebasneue text-[24px] font-[400] bg-transparent' placeholder='Enter amount'/> 
                        <p className=' opacity-30 text-[10px] font-[400]'>User balance : {balance} {prom? "PROMOTION":"ETH"}</p>
                    </div>
                    <div className='w-[49px] h-[49px] rounded-full overflow-hidden'>
                        <Image src={eth } alt=''/>
                    </div>
                </div>
                <div className='flex justify-between mt-[20px] items-center'>
                    <p className='opacity-40 font-[700] text-[13px]'>≈ 123,456 {prom? "PROMOTION":"ETH"}</p>
                    <p className={`${amt>balance? "block" :"hidden"} font-bebasneue text-[15px] text-[#FF2F61]`}>insufficient balance</p>
                </div>
                <div className='flex justify-between items-center gap-[25px] mt-[30px]'>
                    <div className='flex flex-wrap  gap-[5px]'>
                        <div className='flex gap-2'>
                            <div className='bg-[#2C2D30] anim rounded-full w-[68px] text-center pt-[3px]'>
                            <p className='font-bebasneue font-[400] text-[15px] opacity-50'>RESET</p>
                            </div>
                            <div className='bg-[#2C2D30] anim rounded-full w-[68px] text-center pt-[3px]'>
                            <p className='font-bebasneue font-[400] text-[15px] opacity-50'>0.10 ETH</p>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='bg-[#2C2D30] anim rounded-full w-[68px] text-center pt-[3px]'>
                                <p className='font-bebasneue font-[400] text-[15px] opacity-50'>0.05 ETH</p>
                            </div>
                            <div className='bg-[#2C2D30] anim rounded-full w-[68px] text-center pt-[3px]'>
                                <p className='font-bebasneue font-[400] text-[15px] opacity-50'>0.01 ETH</p>
                            </div>
                        </div>
                    </div>
                    <p className='round bg-primary anim leading-[40px] pt-[12px] text-[#262626] text-[52px] text-center px-[35px] rounded-[15px] shadow-[5.21px_5.21px_7.76px_0px_#00000040]'>
                    SWAP
                    </p>
                </div>
            </div>

            }
           

            
            
          </div>

        <div className='bg-[#1B1C1E] overflow-x-hidden relative p-[32px] shadow-[12.7px_12.7px_44.02px_0px_#0000004F] rounded-[40px]'>
            <p className='font-[900]  pb-[28px]   font-montserrat text-[35px] text-white'><span className='text-primary'>Tax</span> Mechanism </p>
            <div className='flex flex-col gap-[25px]'>
            {[
            {
              id: 1,
              title: "CURRENT SELL TAX RATE",
              value: "0%",
              description: "Tax starts at 0% and only activates if the price drops over 5%. The tax rate matches the drop percentage (up to 15%) and distributes collected tax to buyers during the stage.",
            },
            {
              id: 2,
              title: "BASE PRICE",
              value: "$0.0000150",
              description: "Token price before the latest drop, serving as a benchmark for recovery.",
            },
            {
              id: 3,
              title: "CURRENT REWARD POOL",
              value: "1,234,567.89",
              description: "Shows total tokens collected from the sell tax during the current stage, distributed as rewards to buyers participating in this period.",
            },
          ].map((card) => (
            <motion.div
              key={card.id}
              initial={{ rotateX: 0 }}
              animate={hoveredCard === card.id ? { rotateX: 180 } : { rotateX: 0 }}
              transition={{ duration: 0.6 }}
              className='bg-[#111111] card w-[490px] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] rounded-[30px]'
            >
              <div className='card-front flex justify-between items-start ps-[35px] pe-[25px] py-[15px]'>
                <div>
                  <p className='font-bebasneue font-[400] text-[21px] text-primary'>{card.title}</p>
                  <p className='font-montserrat font-[800] text-[33px] text-white'>{card.value}</p>
                </div>
                <Image
                  src={info}
                  alt=''
                  onMouseEnter={() => handleMouseEnter(card.id)}
                  
                />
              </div>
              <div onMouseLeave={handleMouseLeave} className='card-back ps-[35px] pe-[25px] py-[15px]'>
                <p className='font-montserrat leading-[18px] font-[700] text-[15px]'>{card.description}</p>
              </div>
            </motion.div>
          ))}


                <motion.div
                key="5"
                initial={{ rotateX: 0 }}
                animate={{rotateX: mcard?  180  :  0 }}
                transition={{ duration: 0.6 }}
                 className='bg-[#111111] card  w-[490px]  shadow-[16.21px_16.21px_56.21px_0px_#0000004F]  rounded-[30px]'>
                    <div className='ps-[35px] pe-[25px] py-[15px] card-front'>
                       <Image src={info} alt='' className='float-right' onMouseEnter={()=>setMcard(true)}/>
                        
                        <div className='flex justify-between items-center'>
                            <div>
                                <p className='font-bebasneue font-[400] text-[42px] text-primary'>Tax Stage Timer</p>
                            </div>
                            <div>
                                <div className=''>
                                    <CircularSlider
                                                                        
                                        labelColor="#ffffff"
                                        knobColor="#ffffff"
                                        progressColorFrom="#A8FF2F"
                                        progressColorTo="#A8FF2F"
                                        progressSize={5}
                                        trackColor="#262626"
                                        labelBottom={true}
                                        trackSize={5}
                                        knobSize={20}
                                        knobDraggable={false}
                                        width={130}                           
                                        initialValue={0}
                                        dataIndex={degree} 
                                        label={formatTime(timeElapsed)}
                                        valueFontSize={"0rem"}
                                        labelFontSize={"1.4rem"}

                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div onMouseLeave={()=>setMcard(false)} className='card-back px-[35px]'>
                    <p className='font-montserrat leading-[18px] font-[700] text-[15px]'>Displays remaining time in the active tax stage, ending if the price recovers to the base or after 30 minutes, whichever comes first.</p>
                    </div>

                    
                </motion.div>


            </div>
            
        </div>
      
    </div>
  )
}

export default ZillaRightView
