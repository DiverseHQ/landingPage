import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { GrMenu } from 'react-icons/gr'

import LogoComponent from './LogoComponent'
import useWindowSize from '../../utils/hook/useWindowSize'
import MenuDrawer from './MenuDrawer'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import HoverDrawerDownMenuItem from './HoverDrawerDownMenuItem'
import {
  BLOG_LINK,
  DISCORD_LINK,
  INSTAGRAM_LINK,
  TWITTER_LINK,
  WHITEPAPER_LINK
} from '../../utils/config/config'

const NewNavBar = ({ featureSectionRef, teamSectionRef }) => {
  const [hambergerState, setHambergerState] = useState(false)
  const { isMobile } = useWindowSize()

  const toggleHamberger = () => {
    setHambergerState(!hambergerState)
  }

  const onClickFeatures = () => {
    featureSectionRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const onClickTeam = () => {
    teamSectionRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const onClickRoadmap = () => {
    // todo
  }

  const onClickWhitepaper = () => {
    window.open(WHITEPAPER_LINK, '_blank')
  }

  const onClickBlog = () => {
    window.open(BLOG_LINK, '_blank')
  }

  const onClickDiscord = () => {
    window.open(DISCORD_LINK, '_blank')
  }

  const onClickTwitter = () => {
    window.open(TWITTER_LINK, '_blank')
  }

  const onClickInstagram = () => {
    window.open(INSTAGRAM_LINK, '_blank')
  }

  const notifyInfo = (text) =>
    toast.info(text, {
      position: 'top-center',
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light'
    })
  const docsMenuItem = {
    title: 'Docs',
    items: [
      {
        title: 'Whitepaper',
        onClick: onClickWhitepaper
      },
      {
        title: 'Blog',
        onClick: onClickBlog
      }
    ]
  }

  const aboutUsMenuItem = {
    title: 'About Us',
    items: [
      {
        title: 'Features',
        onClick: onClickFeatures
      },
      {
        title: 'Team',
        onClick: onClickTeam
      },
      {
        title: 'Roadmap',
        onClick: onClickRoadmap
      }
    ]
  }

  const communityMenuItem = {
    title: 'Community',
    items: [
      {
        title: 'Discord',
        onClick: onClickDiscord
      },
      {
        title: 'Twitter',
        onClick: onClickTwitter
      },
      {
        title: 'Instagram',
        onClick: onClickInstagram
      }
    ]
  }

  let prevScrollpos = window.pageYOffset

  if (window) {
    window.onscroll = function () {
      const mobileTopNavEl = document.getElementById('desktopNavBar')
      if (!mobileTopNavEl) return
      const currentScrollPos = window.pageYOffset
      if (prevScrollpos > currentScrollPos) {
        mobileTopNavEl.style.top = '50px'
      } else {
        mobileTopNavEl.style.top = '-200px'
      }
      prevScrollpos = currentScrollPos
    }
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <MenuDrawer
        hambergerState={hambergerState}
        setHambergerState={setHambergerState}
        onClickTeam={onClickTeam}
        onClickFeatures={onClickFeatures}
      />
      {!isMobile && (
        <div
          id="desktopNavBar"
          className="fixed w-full flex flex-row justify-center items-center z-30 top-[50px] px-20"
          style={{
            transition: 'top 0.5s ease-in-out'
          }}
        >
          <div className="flex flex-row items-center py-10 px-5 rounded-3xl justify-between w-full background-blurred-black">
            <LogoComponent />
            <div className="flex flex-row items-center justify-center gap-x-11 text-2xl">
              {/* div with on hover shows more options */}
              <HoverDrawerDownMenuItem menuItem={docsMenuItem} />
              <HoverDrawerDownMenuItem menuItem={aboutUsMenuItem} />
              <HoverDrawerDownMenuItem menuItem={communityMenuItem} />

              {/* <a
              href="https://discord.gg/CwKq8Q8UcT"
              target={'_blank'}
              rel="noreferrer"
            >
              <div className="cursor-pointer text-xl hover:text-p-h hover:border-b-4 hover:border-p-h hover:mb-[-4px] py-6">
                Discord
              </div>
            </a>
            <div
              className="cursor-pointer text-xl hover:text-p-h hover:border-b-4 hover:border-p-h hover:mb-[-4px] py-6"
              onClick={onClickTeam}
            >
              Team
            </div>
            <a
              href="https://diversehq.gitbook.io/whitepaper/"
              target={'_blank'}
              rel="noreferrer"
            >
              <div className="cursor-pointer text-xl hover:text-p-h hover:border-b-4 hover:border-p-h hover:mb-[-4px] py-6">
                Whitepaper
              </div>
            </a>
            <div className="cursor-pointer text-xl hover:text-p-h hover:border-b-4 hover:border-p-h hover:mb-[-4px] py-6">
              Blog
            </div>

            <div
              className="cursor-pointer text-xl hover:text-p-h hover:border-b-4 hover:border-p-h hover:mb-[-4px] py-6"
              onClick={onClickFeatures}
            >
              Features
            </div> */}
              <div
                onClick={() => {
                  notifyInfo(
                    `We are not ready yet, Please wait for our launch! Join our discord for more updates!`
                  )
                }}
                className="cursor-pointer bg-p-h py-3 px-9 rounded-full text-xl leading-9"
              >
                Launch APP
              </div>
            </div>
          </div>
        </div>
      )}
      {isMobile && (
        <div className="flex flex-row items-center justify-between h-14 bg-p-bg rounded-b-[20px] p-3 absolute w-full z-30">
          <LogoComponent />
          <div>
            <section className="flex">
              <button onClick={toggleHamberger}>
                <GrMenu className="w-6 h-6" />
              </button>
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
