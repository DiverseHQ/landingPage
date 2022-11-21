import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { GrMenu } from 'react-icons/gr'
import {ImCross} from 'react-icons/Im'

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
        <div className="w-full flex flex-row justify-between items-center border-b border-[#999292] px-6 absolute z-10">
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
        <div className="flex flex-row items-center justify-between h-14 bg-p-bg rounded-b-[20px] p-3 absolute w-full z-10">
          <LogoComponent />
          <nav>
            <section className="flex">
              <button onClick={() => setHambergerState(!hambergerState)}><GrMenu className="w-6 h-6" /></button>
              {
                hambergerState && (

              <nav className="h-screen  top-[0px] right-[0px] flex flex-col justify-around items-center w-full md:hidden bg-p-bg border z-60 duration-1000 absolute ">
          <button className="self-end mr-10" onClick={() => setHambergerState(!hambergerState)}><ImCross className="w-6 h-6" /></button>
          <a href="#" className="underline decoration-2 text-lg">
            Community
          </a>
          <a href="#" className=" underline decoration- decoration-2 text-lg">
            Team
          </a>
          <a href="#" className="underline decoration-2 text-lg">
            Blog
          </a>
          <a href="#" className="underline decoration-2 text-lg">
            Features
          </a>
          
        </nav>
                )
              }

            </section>
          </nav>
        
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
