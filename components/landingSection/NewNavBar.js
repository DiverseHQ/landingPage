import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
// import { GrMenu } from 'react-icons/gr'

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
import { ImCross } from 'react-icons/im'

const NewNavBar = ({ featureSectionRef, teamSectionRef, roadMapRef }) => {
  const [hambergerState, setHambergerState] = useState(false)
  const [mobileHamberGerState, setMobileHambergerState] = useState(false)
  const { isMobile } = useWindowSize()

  const toggleHamberger = () => {
    setHambergerState(!hambergerState)
  }

  const toggleMobileHamberGer = () => {
    setMobileHambergerState(!mobileHamberGerState)
  }

  const onClickFeatures = () => {
    featureSectionRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const onClickTeam = () => {
    teamSectionRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const onClickRoadmap = () => {
    roadMapRef.current.scrollIntoView({ behavior: 'smooth' })
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

  if (typeof window !== 'undefined') {
    let prevScrollpos = window ? window.pageYOffset : null
    window.onscroll = function () {
      if (!prevScrollpos) {
        prevScrollpos = window.pageYOffset
        return
      }
      const mobileTopNavEl = document.getElementsByClassName('navbar')[0]
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
      {hambergerState && (
        <MenuDrawer
          hambergerState={hambergerState}
          setHambergerState={setHambergerState}
        />
      )}
      {!isMobile && (
        <div
          className="navbar fixed w-full flex flex-row justify-center items-center z-30 top-[50px] px-20"
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

              <div
                onClick={() => {
                  notifyInfo(
                    `We are not ready yet, Please wait for our launch! Join our discord for more updates!`
                  )
                }}
                className="cursor-pointer bg-p-h py-3 px-9 rounded-full text-xl leading-9 ease-in-out duration-300 transition delay-150 duration-300 hover:scale-110 hover:bg-purple-800"
              >
                Launch APP
              </div>
            </div>
          </div>
        </div>
      )}
      {isMobile && (
        <div
          style={{
            transition: 'top 0.5s ease-in-out'
          }}
          className="navbar fixed top-[50px] flex flex-row items-center justify-between  px-4 w-full z-30 "
        >
          <div className="background-blurred-black p-2 px-4  w-full h-full flex flex-col justify-between items-center">
            <div className=" flex flex-row justify-between items-center justify-between">
              <LogoComponent />
              <div>
                <section className="flex text-white">
                  <button onClick={toggleMobileHamberGer}>
                    {mobileHamberGerState ? (
                      <ImCross className="w-6 h-6" />
                    ) : (
                      <img
                        src="/hamburger.png"
                        alt="hamburger"
                        className="w-6"
                      />
                    )}
                  </button>
                </section>
              </div>
            </div>

            {mobileHamberGerState && (
              <div
                className={` flex items-center flex-col  w-full transition ease-in-out  duration-300 ${
                  mobileHamberGerState ? 'top-20 ' : 'top-[-490px]'
                } `}
              >
                <div className="flex flex-col mt-16 ml-6">
                  <a
                    href={DISCORD_LINK}
                    target={'_blank'}
                    className="text-xl font-medium"
                    rel="noreferrer"
                  >
                    Discord
                  </a>

                  <a
                    href={TWITTER_LINK}
                    target={'_blank'}
                    className="text-xl font-medium mt-6"
                    rel="noreferrer"
                  >
                    Twitter
                  </a>

                  <a
                    href={WHITEPAPER_LINK}
                    target={'_blank'}
                    className="text-xl font-medium mt-6"
                    rel="noreferrer"
                  >
                    Whitepaper
                  </a>

                  <a href={BLOG_LINK} className="text-xl font-medium mt-6">
                    Blog
                  </a>

                  <button className="background-gradient font-[500] text-base rounded-full sm:text-5xl py-3 px-5 sm:py-7 sm:px-20 mt-6 max-w-xs mr-1">
                    Launch App
                  </button>
                </div>
              </div>
            )}
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

export default memo(NewNavBar)
