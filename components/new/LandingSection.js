import React from 'react'
import PropTypes from 'prop-types'

// import MainArea from '../landingSection/MainArea'
import NewNavBar from '../landingSection/NewNavBar'
import MainBlockArea from '../landingSection/MainBlockArea'
// import DiverseHQIntroDiv from '../landingSection/DiverseHQIntroDiv'

const LandingSection = ({ featureSectionRef, teamSectionRef, roadMapRef }) => {
  return (
    <div className="h-[calc(100vh+75px)] bg-black text-white rounded-b-[60px]  sm:rounded-b-[75px]">
      <NewNavBar
        featureSectionRef={featureSectionRef}
        teamSectionRef={teamSectionRef}
        roadMapRef={roadMapRef}
      />
      <MainBlockArea />
      {/* <DiverseHQIntroDiv /> */}
      {/* <MainArea /> */}
    </div>
  )
}

LandingSection.propTypes = {
  featureSectionRef: PropTypes.object.isRequired,
  teamSectionRef: PropTypes.object.isRequired
}

export default LandingSection
