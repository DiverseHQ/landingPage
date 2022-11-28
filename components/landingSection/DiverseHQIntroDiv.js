import React from 'react'
import useWindowSize from '../../utils/hook/useWindowSize'

const DiverseHQIntroDiv = () => {
  const { isMobile } = useWindowSize()

  return (
    <div className="top-[700px] sm:top-[890px] h-fit w-full absolute z-10 p-4 sm:p-5">
      <div className="py-4 sm:py-7 px-5 sm:px-8 relative relative z-20 rounded-[40px] background-blurred min-h-[120px] sm:min-h-[300px]">
        <div className="text-lg font-[500] sm:text-7xl pb-2 sm:pb-8">
          What is Diverse<span className="text-p-h">HQ</span>?
        </div>
        <div
          style={{
            lineHeight: `${isMobile ? '' : '50px'}`,
            letterSpacing: '1px'
          }}
          className="text-sm sm:text-4xl"
        >
          DiverseHQ is a web3 social platform for building, managing, and
          developing communities, with a focus on the micro creator economy and
          assisting creators in converting their audience to the community.
        </div>
      </div>
    </div>
  )
}

export default DiverseHQIntroDiv
