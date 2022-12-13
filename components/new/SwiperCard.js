import React from 'react'

const SwiperCard = ({ title, description, ImageComp }) => {
  return (
    <div className="sm:w-[600px] h-[450px] sm:h-[600px] bg-s-bg text-black flex flex-col justify-center items-start p-4 sm:pl-16 sm:pr-8 rounded-[50px] my-4 sm:my-0 sm:mx-20">
      <div className="w-full flex flex-row justify-center sm:justify-start">
        <ImageComp />
      </div>
      <div className="text-2xl sm:text-3xl mt-2 sm:mt-20 font-bold mb-2 sm:mb-8">
        {title}
      </div>
      <div className="text-xl sm:text-2xl ">{description}</div>
    </div>
  )
}

export default SwiperCard
