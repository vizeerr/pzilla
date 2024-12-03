import TopNavbar from '@/components/TopNavbar'
import React from 'react'

import DetailedTopView from '@/components/DetailedTopView'
import DetailedBottomView from '@/components/DetailedBottomView'


const page = () => {
  return (
    <>
      <TopNavbar/>
      <div className='bg-[#111111] p-[20px]'>
        <DetailedTopView/>
        <DetailedBottomView/>
      </div>
    </>
  )
}

export default page
