"use client"
import React, { useState } from 'react'
import smile from "@/assets/smile.png"
import pin from "@/assets/pin.svg"
import eth from "@/assets/eth.svg"
import Image from 'next/image'

const DetailedBottomView = () => {

  const [tab,setTab] = useState("cmmt")
  const [toogle,setToogle] = useState(false)
  const [tradeVale,setTradeVal] = useState(0.01)


  return (
    <div className='bg-[#1B1C1E] mt-[32px]'>
        <div className='flex justify-between'>
          <p onClick={()=>setTab("cmmt")} className={`${tab=="cmmt"? "bg-primary text-[#262626]":" bg-[#38383F] text-white"} font-[900] text-[30px]   py-5 w-[349px] text-center rounded-[40px_0px]`}> COMMENTS</p>
          <p onClick={()=>setTab("his")} className={`${tab=="his"? "bg-primary text-[#262626]":" bg-[#38383F] text-white"} font-[800] text-[30px]    py-5 w-[420px] text-center rounded-[0px_40px]`}> TRADING HISTORY</p>
           
        </div>

        {tab=="cmmt"? <div className='mt-[60px] h-[758px] overflow-y-auto pb-[40px] px-[40px] flex flex-col gap-[32px]'>
        
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
          <p className='font-[800] text-[22px] leading-[26px] text-white px-10 my-8'>SOLANAFIGHTS ⚔️🥊 JOIN liE VERY FIRST TAP-SWAP GAME LIKE HAMSTER KOMBAT ON SOLANA 🔥 TELEGRAM GAME/BOT IS ALREADY LIVE ✅ FAIR LAUNCH IS COMING SOON, DONT MISS IT ➡️ https://t.me/solanafights</p>
          
        </div>

        <div className='bg-[#111111] rounded-[40px] pb-4'>
          <div className='items-center flex justify-between'>
            <div className='flex items-center gap-2'>
              <p className='font-[900] text-[28px] text-[#111111] bg-white  py-2 w-[288px] text-center rounded-[50px_0px]'> TNFv...6GVT</p>
              
            
            </div>
            <p className='text-primary font-[800] text-[22px] pe-8 pt-2'>21 minutes ago</p>
          </div>
          <p className='font-[800] text-[22px] leading-[26px] text-white px-10 my-8'>SOLANAFIGHTS ⚔️🥊 JOIN liE VERY FIRST TAP-SWAP GAME LIKE HAMSTER KOMBAT ON SOLANA 🔥 TELEGRAM GAME/BOT IS ALREADY LIVE ✅ FAIR LAUNCH IS COMING SOON, DONT MISS IT ➡️ https://t.me/solanafights</p>
          
        </div>
        <div className='bg-[#111111] rounded-[40px] pb-4'>
          <div className='items-center flex justify-between'>
            <div className='flex items-center gap-2'>
              <p className='font-[900] text-[28px] text-[#111111] bg-white  py-2 w-[288px] text-center rounded-[50px_0px]'> TNFv...6GVT</p>
              
            
            </div>
            <p className='text-primary font-[800] text-[22px] pe-8 pt-2'>21 minutes ago</p>
          </div>
          <p className='font-[800] text-[22px] leading-[26px] text-white px-10 my-8'>SOLANAFIGHTS ⚔️🥊 JOIN liE VERY FIRST TAP-SWAP GAME LIKE HAMSTER KOMBAT ON SOLANA 🔥 TELEGRAM GAME/BOT IS ALREADY LIVE ✅ FAIR LAUNCH IS COMING SOON, DONT MISS IT ➡️ https://t.me/solanafights</p>
          
        </div>
        <div className='bg-[#111111] rounded-[40px] pb-4'>
          <div className='items-center flex justify-between'>
            <div className='flex items-center gap-2'>
              <p className='font-[900] text-[28px] text-[#111111] bg-white  py-2 w-[288px] text-center rounded-[50px_0px]'> TNFv...6GVT</p>
              
            
            </div>
            <p className='text-primary font-[800] text-[22px] pe-8 pt-2'>21 minutes ago</p>
          </div>
          <p className='font-[800] text-[22px] leading-[26px] text-white px-10 my-8'>SOLANAFIGHTS ⚔️🥊 JOIN liE VERY FIRST TAP-SWAP GAME LIKE HAMSTER KOMBAT ON SOLANA 🔥 TELEGRAM GAME/BOT IS ALREADY LIVE ✅ FAIR LAUNCH IS COMING SOON, DONT MISS IT ➡️ https://t.me/solanafights</p>
          
        </div>
        <div className='bg-[#111111] rounded-[40px] pb-4'>
          <div className='items-center flex justify-between'>
            <div className='flex items-center gap-2'>
              <p className='font-[900] text-[28px] text-[#111111] bg-white  py-2 w-[288px] text-center rounded-[50px_0px]'> TNFv...6GVT</p>
              
            
            </div>
            <p className='text-primary font-[800] text-[22px] pe-8 pt-2'>21 minutes ago</p>
          </div>
          <p className='font-[800] text-[22px] leading-[26px] text-white px-10 my-8'>SOLANAFIGHTS ⚔️🥊 JOIN liE VERY FIRST TAP-SWAP GAME LIKE HAMSTER KOMBAT ON SOLANA 🔥 TELEGRAM GAME/BOT IS ALREADY LIVE ✅ FAIR LAUNCH IS COMING SOON, DONT MISS IT ➡️ https://t.me/solanafights</p>
          
        </div>
      
      </div>
      : 
      <div className='mt-[60px] h-[758px] overflow-y-auto pb-[40px] px-[40px] flex flex-col gap-[32px]'>
      <div className='flex gap-8 items-center'>
        <div className='bg-[#111111] px-[30px] py-[22px] rounded-[23px] flex gap-8 shadow-[10px_10px_23px_0px_#0000004D]'>
          <p className='uppercase text-white  font-[800]  text-[21px] '>Filter By Size</p>
          <div onClick={()=>setToogle(!toogle)} className={`${toogle? "bg-primary justify-end" : "bg-[18191B] justify-start" } w-[87px] flex items-center  rounded-[29px] h-[29px] `}>
            <div className= {`${toogle?"bg-white":"bg-[#38383F]"}  w-[36px] h-[36px] rounded-full`}>

            </div>
          </div>
        </div>
        <div className='bg-[#111111] px-[30px] py-[15px]  items-center rounded-[23px] flex gap-4 shadow-[10px_10px_23px_0px_#0000004D]'>
          <div className='flex items-center gap-1'>
            <input type='number' className='uppercase text-white bg-transparent font-[800] w-[50px]  text-[21px] ' placeholder='0' value={tradeVale} onChange={(e)=>{
              setTradeVal(e.target.value)
            }}/> 
            <p className=' uppercase text-white bg-transparent font-[800] text-[21px]'>
            ETH
            </p>
          </div>
          <Image src={eth} alt='' className='rounded-full w-[48px]'/>
        </div>
        <div className='border-primary border-s-[6px] ps-2'>
          <p className='font-bebasneue  text-[30px] '>
          <span className='text-white'>153 </span>
            <span className='text-opacity-30 text-white'>trades of size greater lian 0.01 ETH</span>
          </p>
        </div>
      </div>
      <div className='font-[800] rounded-[40px_40px_0px_0px] overflow-hidden'>
        <div className='w-full text-[32px]  '>
          <div className="uppercase">
            <ul className='grid grid-cols-6 text-white text-opacity-40   bg-[#38383F] py-7 px-12'>
              <li>ACCOUNT</li>
              <li>TYPE</li>                
              <li>Eli</li>
              <li>PROMOTION</li>
              <li>DATE</li>
              <li>TRANSACTION</li>
            </ul>
          </div>
          <div className='py-7 px-12 bg-[#111111] space-y-6 h-[42vh] overflow-y-scroll'>
            <ul className="grid grid-cols-6 ">
              <li className=" text-white font-[700]">TEG3....4efD</li>
              <li className={` text-[#FFFF00] `}>SELL</li>
              <li className=" text-white font-[700]">12,3456</li>
              <li className=" text-white ">571,201.94</li>
              <li className="text-white font-[700] ">1 min ago</li>
              <li className=" text-primary font-[700]">38HFH38RH..5347</li>
            </ul>
            
            <ul className="grid grid-cols-6 ">
              <li className=" text-white font-[700]">TEG3....4efD</li>
              <li className={` text-[#FFFF00] `}>SELL</li>
              <li className=" text-white font-[700]">12,3456</li>
              <li className=" text-white ">571,201.94</li>
              <li className="text-white font-[700] ">1 min ago</li>
              <li className=" text-primary font-[700]">38HFH38RH..5347</li>
            </ul>
            
            <ul className="grid grid-cols-6 ">
              <li className=" text-white font-[700]">TEG3....4efD</li>
              <li className={` text-[#FFFF00] `}>SELL</li>
              <li className=" text-white font-[700]">12,3456</li>
              <li className=" text-white ">571,201.94</li>
              <li className="text-white font-[700] ">1 min ago</li>
              <li className=" text-primary font-[700]">38HFH38RH..5347</li>
            </ul>
            
            <ul className="grid grid-cols-6 ">
              <li className=" text-white font-[700]">TEG3....4efD</li>
              <li className={` text-[#FFFF00] `}>SELL</li>
              <li className=" text-white font-[700]">12,3456</li>
              <li className=" text-white ">571,201.94</li>
              <li className="text-white font-[700] ">1 min ago</li>
              <li className=" text-primary font-[700]">38HFH38RH..5347</li>
            </ul>
            <ul className="grid grid-cols-6 ">
              <li className=" text-white font-[700]">TEG3....4efD</li>
              <li className={` text-[#FFFF00] `}>SELL</li>
              <li className=" text-white font-[700]">12,3456</li>
              <li className=" text-white ">571,201.94</li>
              <li className="text-white font-[700] ">1 min ago</li>
              <li className=" text-primary font-[700]">38HFH38RH..5347</li>
            </ul>
            <ul className="grid grid-cols-6 ">
              <li className=" text-white font-[700]">TEG3....4efD</li>
              <li className={` text-[#FFFF00] `}>SELL</li>
              <li className=" text-white font-[700]">12,3456</li>
              <li className=" text-white ">571,201.94</li>
              <li className="text-white font-[700] ">1 min ago</li>
              <li className=" text-primary font-[700]">38HFH38RH..5347</li>
            </ul>
            <ul className="grid grid-cols-6 ">
              <li className=" text-white font-[700]">TEG3....4efD</li>
              <li className={` text-[#FFFF00] `}>SELL</li>
              <li className=" text-white font-[700]">12,3456</li>
              <li className=" text-white ">571,201.94</li>
              <li className="text-white font-[700] ">1 min ago</li>
              <li className=" text-primary font-[700]">38HFH38RH..5347</li>
            </ul>
            <ul className="grid grid-cols-6 ">
              <li className=" text-white font-[700]">TEG3....4efD</li>
              <li className={` text-[#FFFF00] `}>SELL</li>
              <li className=" text-white font-[700]">12,3456</li>
              <li className=" text-white ">571,201.94</li>
              <li className="text-white font-[700] ">1 min ago</li>
              <li className=" text-primary font-[700]">38HFH38RH..5347</li>
            </ul>
            <ul className="grid grid-cols-6 ">
              <li className=" text-white font-[700]">TEG3....4efD</li>
              <li className={` text-[#FFFF00] `}>SELL</li>
              <li className=" text-white font-[700]">12,3456</li>
              <li className=" text-white ">571,201.94</li>
              <li className="text-white font-[700] ">1 min ago</li>
              <li className=" text-primary font-[700]">38HFH38RH..5347</li>
            </ul>
            <ul className="grid grid-cols-6 ">
              <li className=" text-white font-[700]">TEG3....4efD</li>
              <li className={` text-[#FFFF00] `}>SELL</li>
              <li className=" text-white font-[700]">12,3456</li>
              <li className=" text-white ">571,201.94</li>
              <li className="text-white font-[700] ">1 min ago</li>
              <li className=" text-primary font-[700]">38HFH38RH..5347</li>
            </ul>
            <ul className="grid grid-cols-6 ">
              <li className=" text-white font-[700]">TEG3....4efD</li>
              <li className={` text-[#FFFF00] `}>SELL</li>
              <li className=" text-white font-[700]">12,3456</li>
              <li className=" text-white ">571,201.94</li>
              <li className="text-white font-[700] ">1 min ago</li>
              <li className=" text-primary font-[700]">38HFH38RH..5347</li>
            </ul>
            <ul className="grid grid-cols-6 ">
              <li className=" text-white font-[700]">TEG3....4efD</li>
              <li className={` text-[#FFFF00] `}>SELL</li>
              <li className=" text-white font-[700]">12,3456</li>
              <li className=" text-white ">571,201.94</li>
              <li className="text-white font-[700] ">1 min ago</li>
              <li className=" text-primary font-[700]">38HFH38RH..5347</li>
            </ul>
            

          </div>
        </div>
      </div>
    </div>
      }
        

       

        
      </div>
  
    
  )
}

export default DetailedBottomView
