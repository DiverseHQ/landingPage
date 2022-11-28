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
      <div className="absolute top-[20px] sm:top-[190px] left-[100px] sm:left-[464px]">
        <ContentBlock
          title="😎 Cool Communities"
          body="Create and join communities of people who share your interests. Create exclusive community and let token holders post and access content."
        />
      </div>
      <div className="absolute top-[165px] sm:top-[650px] left-[50px] sm:left-[155px]">
        <ContentBlock
          title="🌿 Levitating Lens"
          body="We use the most popular and amazing decentralized social graph. Lens will keep your followers, follows and posts on the blockchain."
        />
      </div>
      <div className="absolute top-[230px] sm:top-[620px] right-[10px] sm:right-[120px]">
        <ContentBlock
          title="💰 Make Money"
          body="Post anything from your ebook, illustration, 3d models, or nfts on applicable communities to sell it. Only buyers will have access to it but will get exposure to entire community."
        />
      </div>
      <div className="absolute top-[360px] sm:top-[1060px] right-[30px] sm:right-[280px]">
        <ContentBlock
          title="🛹 Advent Actions"
          body="Create and join content tournaments of your community, and get rewarded for winning. Create and participate in the decision-making Voting process."
        />
      </div>
    </div>
  )
}

export default FeatureMain
