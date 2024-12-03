import React from 'react'
import DetailedLefView from './DetailedLefView'
import DetailedRightView from './DetailedRightView'

const DetailedTopView = () => {
  return (
    <div className='flex justify-between mt-10 items-start gap-[32px] text-white font-montserrat'>
        <DetailedLefView/>    
        <DetailedRightView/>
    </div>
  )
}

export default DetailedTopView
