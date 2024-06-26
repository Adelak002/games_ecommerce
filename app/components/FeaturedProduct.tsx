import React from 'react'
import FeaturedProductSlider from './helper/FeaturedProductSlider'

const FeaturedProduct = () => {
  return (
    <div className="pt-[6rem] pb-[3rem] bg-gray-900">
        <div className='mx-auto w-[80%] flex items-center justify-between'>
          <h1 className='md:text-[28px] text-[22px] lg:text-[34px] text-white'>Featured Products</h1>
          <button className='uppercase text-[13px] md:text-[15px] text-yellow-300'>
            View all Products
          </button>
        </div>
        <div className='w-[80%] mt-[2rem] mx-auto'>
            <FeaturedProductSlider/>
        </div>
    </div>
  )
}

export default FeaturedProduct