"use client"
import React, { useEffect, useState } from 'react'
import info from '@/assets/info.svg'
import Image from 'next/image'
import { motion } from 'framer-motion';
import CircularSlider from '@fseehawer/react-circular-slider';


const ReferalUse = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleMouseEnter = (cardId) => setHoveredCard(cardId);
    const handleMouseLeave = () => setHoveredCard(null);
  
    const [prom,setPromo] = useState(false)
    const [degree, setDegree] = useState(0);
    const [timeElapsed, setTimeElapsed] = useState(0); // Time in seconds
    const totalDuration = 30 * 60; // 30 minutes in seconds
  
    const [running, setRunning] = useState(true);

useEffect(() => {
  if (running) {
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
  }
}, [running]); // Depend on `running`
  
    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
      };
      
    


  return (
    <div className='bg-[#1B1C1E] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] rounded-[66px] p-[58px] mt-[100px]'>

        <div className=' flex gap-[55px] items-center'>
            <motion.div
                key="5"
                initial={{ rotateX: 0 }}
                animate={hoveredCard === 5 ? { rotateX: 180 } : { rotateX: 0 }}
                transition={{ duration: 0.6 }}
                 className='card w-[594px] h-[594px] bg-[#111111] shadow-[19.3px_19.3px_66.91px_0px_#0000004F] rounded-[59px]'>
                <div className="card-back" onMouseLeave={() => handleMouseEnter(0)}>
                    <p className='font-montserrat font-[700] text-white text-[33px] text-center px-[90px]'>Shows when the next points-to-tokens airdrop will occur.</p>
                </div>
                <div className='card-front'>
                    <Image src={info} alt="" width={36} height={36} className='float-end mt-[34px] me-[40px]' onMouseEnter={() => handleMouseEnter(5)}/>
                    <div className='w-full flex justify-center items-center'>
                    <CircularSlider
                                                                        
                                                                        labelColor="#ffffff"
                                                                        knobColor="#ffffff"
                                                                        progressColorFrom="#A8FF2F"
                                                                        progressColorTo="#A8FF2F"
                                                                        progressSize={20}
                                                                        trackColor="#262626"
                                                                        labelBottom={true}
                                                                        trackSize={20}
                                                                        knobSize={40}
                                                                        knobDraggable={false}
                                                                        width={390}                           
                                                                        initialValue={0}
                                                                        dataIndex={degree} 
                                                                        label={formatTime(timeElapsed)}
                                                                        valueFontSize={"0rem"}
                                                                        labelFontSize={"3rem"}
                                
                                                                    />
                    </div>
                </div>
            </motion.div>

            <div className='space-y-7'>

                <motion.div
                key="1"
                initial={{ rotateX: 0 }}
                animate={hoveredCard === 1 ? { rotateX: 180 } : { rotateX: 0 }}
                transition={{ duration: 0.6 }}
                className=' bg-[#111111] card w-[947px] px-[59px] py-[15px] rounded-[34px] shadow-[19.3px_19.3px_66.91px_0px_#0000004F]'>
                    <div className="card-front flex justify-between items-center">
                        <div className='flex items-center gap-4'>
                            <p className='font-bebasneue text-[45px] font-[400] text-primary'>referral uses</p>
                            <Image src={info} alt="" width={24} height={24} onMouseEnter={() => handleMouseEnter(1)}/>
                        </div>
                        <p className='font-montserrat text-[64px] text-white font-[800]'>123</p>
                    </div>
                    <div className="card-back" onMouseLeave={() => handleMouseEnter(0)}>
                        <p className='font-montserrat font-[800] text-[27px] text-white'>Tracks how many times your referral link has been used.</p>
                    </div>
                    
                </motion.div>

                <motion.div
                key="2"
                initial={{ rotateX: 0 }}
                animate={hoveredCard === 2 ? { rotateX: 180 } : { rotateX: 0 }}
                transition={{ duration: 0.6 }}
                className=' bg-[#111111] card w-[947px] px-[59px] py-[15px] rounded-[34px] shadow-[19.3px_19.3px_66.91px_0px_#0000004F]'>
                    <div className="card-front flex justify-between items-center">
                        <div className='flex items-center gap-4'>
                            <p className='font-bebasneue text-[45px] font-[400] text-primary'>your referral points</p>
                            <Image src={info} alt="" width={24} height={24} onMouseEnter={() => handleMouseEnter(2)}/>
                        </div>
                        <p className='font-montserrat text-[64px] text-white font-[800]'>123</p>
                    </div>
                    <div className="card-back" onMouseLeave={() => handleMouseEnter(0)}>
                        <p className='font-montserrat font-[800] text-[27px] text-white text-center'>Shows the total points you’ve earned from users using your referral links.</p>
                    </div>
                    
                </motion.div>


                <motion.div
                key="3"
                initial={{ rotateX: 0 }}
                animate={hoveredCard === 3 ? { rotateX: 180 } : { rotateX: 0 }}
                transition={{ duration: 0.6 }}
                className=' bg-[#111111] card w-[947px] px-[59px] py-[15px] rounded-[34px] shadow-[19.3px_19.3px_66.91px_0px_#0000004F]'>
                    <div className="card-front flex justify-between items-center">
                        <div className='flex items-center gap-4'>
                            <p className='font-bebasneue text-[45px] font-[400] text-primary'>referral points</p>
                            <Image src={info} alt="" width={24} height={24} onMouseEnter={() => handleMouseEnter(3)}/>
                        </div>
                        <p className='font-montserrat text-[64px] text-white font-[800]'>123</p>
                    </div>
                    <div className="card-back" onMouseLeave={() => handleMouseEnter(0)}>
                        <p className='font-montserrat font-[800] text-[27px] text-white text-center'>Reflects the 50% bonus points awarded to users who used a referral link to make their purchase.</p>
                    </div>
                    
                </motion.div>

                <motion.div
                key="4"
                initial={{ rotateX: 0 }}
                animate={hoveredCard === 4 ? { rotateX: 180 } : { rotateX: 0 }}
                transition={{ duration: 0.6 }}
                className=' bg-[#111111] card w-[947px] px-[59px] py-[15px] rounded-[34px] shadow-[19.3px_19.3px_66.91px_0px_#0000004F]'>
                    <div className="card-front flex justify-between items-center">
                        <div className='flex items-center gap-4'>
                            <p className='font-bebasneue text-[45px] font-[400] text-primary'>points multiplier</p>
                            <Image src={info} alt="" width={24} height={24} onMouseEnter={() => handleMouseEnter(4)}/>
                        </div>
                        <p className='font-montserrat text-[64px] text-white font-[800]'>123</p>
                    </div>
                    <div className="card-back" onMouseLeave={() => handleMouseEnter(0)}>
                        <p className='font-montserrat font-[800] text-[27px] text-white text-center'>A potential future boost that could increase your Referral Points.</p>
                    </div>
                    
                </motion.div>


            </div>
        </div>
        
        <div className='bg-primary w-[340px] mx-auto rounded-full mt-[70px] text-center'>
                <p className='round font-[500] text-[#262626] pt-[20px] leading-[90px] text-[91px]'>claim</p>
        </div>
    </div>

  )
}

export default ReferalUse
