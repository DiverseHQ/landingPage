import React from 'react'
import useWindowSize from '../../utils/hook/useWindowSize'
import ContentBlock from './ContentBlock'

const FeatureMain = () => {
  const { isMobile } = useWindowSize()
  return (
    <div className="relative w-full h-[500px] sm:h-[1200px]">
      <img
        src={isMobile ? '/leftBlobMobile.png' : '/leftBlob.png'}
        className="absolute top-[70px] sm:top-[200px] left-3 sm:left-0"
      />
      <img
        src={isMobile ? '/rightBlobMobile.png' : '/rightBlob.png'}
        className="absolute top-[265px] sm:top-[628px] right-[140px] sm:right-[371px]"
      />
      <div className="absolute top-[60px] sm:top-[190px] left-[100px] sm:left-[464px]">
        <ContentBlock
          title="Sharing is Earning"
          body="Creating a positive sum game for everyone and rewarding users for posting their content."
        />
      </div>
      <div className="absolute top-[155px] sm:top-[650px] left-[50px] sm:left-[155px]">
        <ContentBlock
          title="Useful content"
          body="Make your content discoverable using the power of community."
        />
      </div>
      <div className="absolute top-[255px] sm:top-[620px] right-[10px] sm:right-[120px]">
        <ContentBlock
          title="Create Community"
          body="Develop a niche community.Deep dive into things and promote with those who have similar interests."
        />
      </div>
      <div className="absolute top-[360px] sm:top-[1060px] right-[30px] sm:right-[280px]">
        <ContentBlock
          title="Something for everyone"
          body="The primary goal is to assist independent artists, creators, builders, and journalists in sharing  their work and receiving recognition in tokens."
        />
      </div>
    </div>
  )
}

export default FeatureMain
