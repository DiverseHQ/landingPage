import React from 'react'
import PropTypes from 'prop-types'

// import MainArea from '../landingSection/MainArea'
import NewNavBar from '../landingSection/NewNavBar'
import MainBlockArea from '../landingSection/MainBlockArea'
// import DiverseHQIntroDiv from '../landingSection/DiverseHQIntroDiv'

const LandingSection = ({ featureSectionRef, teamSectionRef }) => {
  return (
    <div className="h-[calc(100vh+75px)] bg-black text-white rounded-b-[75px]">
      <NewNavBar
        featureSectionRef={featureSectionRef}
        teamSectionRef={teamSectionRef}
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
