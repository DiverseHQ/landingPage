import React from 'react'
import useWindowSize from '../../utils/hook/useWindowSize'
// import useDevice from '../../utils/hook/useDevice'

const MainArea = () => {
  const { isMobile } = useWindowSize()

  return (
    <div className="h-fit w-full relative">
      {!isMobile && (
        <div className="text-p-h absolute text-8xl top-[234px] left-[99px] z-20 flex flex-row items-start font-bold">
          <div className="pr-6 flex flex-col items-center justify-center">
            <div>Create</div>
            <div className="border-p-h border w-[250px] font-normal" />
            <div className="text-3xl">Comment</div>
            <div className="border border-p-h w-[180px] font-normal" />
            <div className="text-3xl">Socialize</div>
          </div>
          <div className="font-bold"> to Earn </div>
        </div>
      )}
      {isMobile && (
        <div className="flex flex-col justify-center alignt-start absolute top-[112px] left-10">
          <div className="text-base text-p-h font-[500]">Comment</div>
          <div className="border-p-h border-b w-[70px] font-normal" />
          <div className="text-3xl text-p-h font-[500]">Create To Earn</div>
          <div className="border-p-h border-b w-[70px] font-normal" />
          <div className="text-base text-p-h font-[500]">Socialize</div>
        </div>
      )}
      <div className="absolute top-[263px] right-10 sm:top-[497px] sm:right-[90px] ">
        <div className="flex flex-col items-start">
          <a href="https://forms.gle/kjAJFHQexzamtsKt5">
            <div className="background-gradient font-[500] text-base sm:text-5xl py-3 px-5 sm:py-7 sm:px-20 rounded-full mb-3 sm:mb-8">
              Start Creating
            </div>
          </a>
          <div>
            <div className="flex flex-row items-center">
              <div className="rounded-full w-3 h-3 sm:w-6 sm:h-6 bg-p-h" />
              <div className="text-xs sm:text-3xl ml-2">Join Communities</div>
            </div>
            <div className="flex flex-row items-center">
              <div className="rounded-full w-3 h-3 sm:w-6 sm:h-6 bg-p-h" />
              <div className="text-xs sm:text-3xl ml-2">
                Express Your Creativity
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="rounded-full w-3 h-3 sm:w-6 sm:h-6 bg-p-h" />
              <div className="text-xs sm:text-3xl ml-2">
                Get noticed for your work!
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <img src="/leftCurve.svg" className="absolute w-[1287px] h-[1206px] top-[0px] left-[-200px] image-unselectable" />
        <img src="/rightCurve.svg" className='absolute w-[1000px] h-[1250px] right-[0px] top-[0px] image-unselectable' style={{ transform: 'translate(400px,-50px)' }}/> */}
      <img
        src={isMobile ? '/allCurvesMobile.png' : '/allCurves.png'}
        className="w-full z-0 image-unselectable"
      />
      <img
        src="/3dIllustrator.png"
        className="absolute top-[300px] left-[-30px] sm:top-[425px] sm:left-[50px] "
      />
      {/* <img src="/rightCircle.svg" className='absolute w-[400px] h-[400px] top-[938px] right-[-50px] image-unselectable'/> */}
    </div>
  )
}

export default MainArea
