import React from 'react'

const PoweredBySection = () => {
  return (
    <div className="powered-div my-[150px] mx-4 sm:mx-8 md:mx-20 relative">
      <h2 className="powered-title text-2xl text-[#121315] mb-4 tracking-tight font-semibold">
        DiverseHQ powered By Polygon and LensProtcol{' '}
      </h2>{' '}
      <p className="text-[18px] sm:w-[90%] md:w-[85%] lg:w-[75%]">
        We are Built our platform on Lens Protcol and use their Document to have
        decentralized Media and in Future we will launch something on polygon.
      </p>
      <div className="powered-icons flex justify-between items-center sm:flex-shrink-0 bg-[#B3B4F3] w-[228px] h-[77px] rounded-[30px]">
        <div className="flex items-center p-[10px] rounded-[30px] ">
          <img
            className="w-[100px] h-[20px]"
            src="./polygonLogo.png"
            alt="Polygon logo"
          />
        </div>
        <div className="flex items-center py-[4px] px-[25px] bg-white rounded-[30px] ">
          <img
            className="w-[54px] h-[68px]"
            src="./lensLogo.png"
            alt="Lens Protocol logo"
          />
        </div>
      </div>
    </div>
  )
}

export default PoweredBySection
