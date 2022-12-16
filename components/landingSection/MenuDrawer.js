import React from 'react'
import { ImCross } from 'react-icons/im'
import PropTypes from 'prop-types'
import {
  BLOG_LINK,
  DISCORD_LINK,
  TWITTER_LINK,
  WHITEPAPER_LINK
} from '../../utils/config/config'

const MenuDrawer = ({ hambergerState, setHambergerState }) => {
  return (
    <div
      className={`text-black z-0 fixed top-0 left-0 right-0 bottom-0 w-full overflow-hidden ${
        hambergerState ? 'z-40' : ''
      }`}
    >
      {/* backdrop */}
      {hambergerState && (
        <div
          className="absolute bg-black/20 top-0 right-0 left-0 bottom-0 w-full"
          onClick={() => {
            setHambergerState(false)
          }}
        />
      )}
      <div
        className={`top-0 right-0  w-[64vw] h-screen fixed  flex flex-col bg-p-bg border rounded-l-2xl absolute transition ease-in-out  duration-300 ${
          hambergerState ? 'translate-x-0' : 'translate-x-full'
        } `}
      >
        <button
          className="self-end mr-5 mt-5 right-10 top-6 "
          onClick={() => setHambergerState(!hambergerState)}
        >
          <ImCross className="w-6 h-6" />
        </button>
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
    </div>
  )
}

MenuDrawer.propTypes = {
  hambergerState: PropTypes.bool.isRequired,
  setHambergerState: PropTypes.func.isRequired,
  onClickTeam: PropTypes.func.isRequired,
  onClickFeatures: PropTypes.func.isRequired
}

export default MenuDrawer
