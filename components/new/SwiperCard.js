import React from 'react'

const SwiperCard = ({ title, description, ImageComp }) => {
  return (
    <div className="flex-shrink-0 sm:w-[530px] h-[450px] sm:h-[550px] bg-s-bg text-black flex flex-col justify-center items-start p-4 sm:pl-10 sm:pr-8 rounded-3xl my-4 sm:my-0 sm:mx-6">
      <div className="w-full flex flex-row justify-center sm:justify-start">
        <ImageComp />
      </div>
      <div className="text-2xl sm:text-3xl mt-4 sm:mt-20 font-bold mb-2 sm:mb-8">
        {title}
      </div>
      <div className="text-xl sm:text-2xl ">{description}</div>
    </div>
  )
}

export default SwiperCard
