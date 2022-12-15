import React from 'react'

const DiverseHQIntroDiv = () => {
  return (
    <>
      <div className="intro my-[150px] mx-4 sm:mx-8 md:mx-20 relative">
        <h2 className="intro-title text-xl font-medium tracking-tight mb-3">
          What is Diverse <span className="text-[#9378D8]">HQ</span>?{' '}
        </h2>
        <p className="text-xl  sm:w-[80%]">
          DiverseHQ is a web3 social platform for building, managing, and
          developing communities, with a focus on the micro creator economy and
          assisting creators in converting their audience to the community.
        </p>

        {/* <img
          className="absolute top-0  left-[1235px] w-[150px]"
          src="./introIllustration.png"
          alt="semi-circle for aesthetic reasons"
        /> */}
      </div>
    </>
  )
}

export default DiverseHQIntroDiv
