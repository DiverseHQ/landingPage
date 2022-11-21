import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { GrMenu } from 'react-icons/gr'
import { ImCross } from 'react-icons/Im'

import LogoComponent from './LogoComponent'
import useWindowSize from '../../utils/hook/useWindowSize'

const NewNavBar = ({ featureSectionRef, teamSectionRef }) => {
  const onClickFeatures = () => {
    featureSectionRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const [hambergerState, setHambergerState] = useState(false)
  const onClickTeam = () => {
    teamSectionRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const { isMobile } = useWindowSize()
  return (
    <>
      {!isMobile && (
        <div className="w-full flex flex-row justify-between items-center border-b border-[#999292] px-6 absolute z-30">
          <LogoComponent />
          <div className="flex flex-row items-center justify-center gap-x-11">
            <div className="text-xl hover:text-p-h hover:border-b-4 hover:border-p-h hover:mb-[-4px] py-6">
              Community
            </div>
            <div
              className="text-xl hover:text-p-h hover:border-b-4 hover:border-p-h hover:mb-[-4px] py-6"
              onClick={onClickTeam}
            >
              Team
            </div>
            <div className="text-xl hover:text-p-h hover:border-b-4 hover:border-p-h hover:mb-[-4px] py-6">
              Blog
            </div>
            <div
              className="text-xl hover:text-p-h hover:border-b-4 hover:border-p-h hover:mb-[-4px] py-6"
              onClick={onClickFeatures}
            >
              Features
            </div>
            <div className="background-gradient py-2 px-9 rounded-full text-xl leading-9">
              Launch APP
            </div>
          </div>
        </div>
      )}
      {isMobile && (
        <div className="flex flex-row items-center justify-between h-14 bg-p-bg rounded-b-[20px] p-3 absolute w-full z-30">
          <LogoComponent />
          <div>
            <section className="flex">
              <button onClick={() => setHambergerState(!hambergerState)}>
                <GrMenu className="w-6 h-6" />
              </button>
              {hambergerState && (
                <div className={`top-0 right-0  w-[64vw] h-screen fixed  flex flex-col bg-p-bg border rounded-l-2xl z-40  absolute transition ease-in-out  duration-300 ${hambergerState ? "translate-x-0" : "translate-x-full" } `}>
                  <button
                    className="self-end mr-5 mt-5 right-10 top-6 "
                    onClick={() => setHambergerState(!hambergerState)}
                  >
                    <ImCross className="w-6 h-6" />
                  </button>
                  <div className="flex flex-col mt-16 ml-6">
                  <a href="#" className="text-xl font-medium">
                    Community
                  </a>
                  <a
                    href="#"
                    className="text-xl font-medium mt-6"
                  >
                    Team
                  </a>
                  <a href="#" className="text-xl font-medium mt-6">
                    Blog
                  </a>
                  <a href="#" className="text-xl font-medium mt-6">
                    Features
                  </a>
                  <button className="background-gradient font-[500] text-base rounded-full sm:text-5xl py-3 px-5 sm:py-7 sm:px-20 mt-6 max-w-xs mr-1"> 
                    Launch App
                  </button>
                  </div>
                </div>
              )}   
            </section>
          </div>
        </div>
      )}
    </>
  )
}

NewNavBar.propTypes = {
  featureSectionRef: PropTypes.object.isRequired,
  teamSectionRef: PropTypes.object.isRequired
}

export default NewNavBar
