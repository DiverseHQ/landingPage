import React from 'react'
import PropTypes from 'prop-types'

import MainArea from '../landingSection/MainArea'
import NewNavBar from '../landingSection/NewNavBar'
import DiverseHQIntroDiv from '../landingSection/DiverseHQIntroDiv'

const LandingSection = ({ featureSectionRef, teamSectionRef }) => {
  console.log('rendered landingSection')
  return (
    <div className="h-fit">
      <NewNavBar
        featureSectionRef={featureSectionRef}
        teamSectionRef={teamSectionRef}
      />
      <DiverseHQIntroDiv />
      <MainArea />
    </div>
  )
}

LandingSection.propTypes = {
  featureSectionRef: PropTypes.object.isRequired,
  teamSectionRef: PropTypes.object.isRequired
}

export default LandingSection
