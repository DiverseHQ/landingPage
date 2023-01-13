import React from 'react'
const LogoComponent = () => {
  return (
    <div className="flex flex-row justify-center items-center  h-fit w-fit">
      <img
        src="/LogoV3TrimmedWithBG.png"
        className="w-[25px] h-[25px] sm:w-[40px] sm:h-[40px]"
        alt="Divrse HQ Logo"
      />
      <div className="text-xs sm:text-2xl mx-2">Diverse HQ</div>
    </div>
  )
}

export default LogoComponent
