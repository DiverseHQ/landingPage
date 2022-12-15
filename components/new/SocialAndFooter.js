import React from 'react'
import { FaDiscord, FaTelegramPlane } from 'react-icons/fa'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import LogoComponent from '../landingSection/LogoComponent'
import {
  BLOG_LINK,
  DISCORD_LINK,
  INSTAGRAM_LINK,
  TWITTER_LINK
} from '../../utils/config/config'

const SocialAndFooter = () => {
  return (
    <div className="flex flex-col mt-[100px] ms:mt-[300px]">
      <div className="flex flex-row justify-around items-center  place-self-center w-2/3 h-[30px] sm:h-[80px]  border rounded-t-[15px] sm:rounded-t-full  bg-s-bg p-1 sm:p-2">
        <a href={DISCORD_LINK} target={'_blank'} rel="noreferrer">
          <FaDiscord className="w-7 h-7 sm:w-14 sm:h-14 " />
        </a>
        <a href={TWITTER_LINK} target={'_blank'} rel="noreferrer">
          <BsTwitter className="w-5 h-5 sm:h-12 sm:w-12" />
        </a>
        <a href={INSTAGRAM_LINK} target={'_blank'} rel="noreferrer">
          <BsInstagram className="w-5 h-5 sm:w-12 sm:h-12" />
        </a>
        {/* <a>
          <FaTelegramPlane className="w-5 h-5 sm:w-12 sm:h-12" />
        </a> */}
      </div>

      <div className="bg-p-bg p-6 sm:p-12">
        <LogoComponent />
        <div className="flex flex-rowjustify-start mt-4 sm:mt-10">
          <div className="items-center">
            <ul>
              <h6 className="mb-2 sm:mb-6 text-base font-[500] sm:text-3xl">
                Quick Links
              </h6>
            </ul>
            <div className="text-sm sm:text-2xl">
              <ul className="hover:underline">
                <a href={DISCORD_LINK}>Discord</a>
              </ul>
              <ul className="hover:underline">
                <a href={TWITTER_LINK}>Twitter</a>
              </ul>
              <ul className="hover:underline">
                <a href={BLOG_LINK}>Blog</a>
              </ul>
              <ul className="hover:underline">
                <a
                  href="https://diversehq.gitbook.io/"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  Whitepaper
                </a>
              </ul>
            </div>
          </div>
          <div className="items-center justify-center ml-20 sm:ml-[258px]">
            <ul className="mb-6">
              <h6 className="items-center mb-1 text-base font-[500] sm:text-3xl">
                Contack US
              </h6>
            </ul>
            <ul className="text-sm sm:text-2xl hover:underline">
              <a href="mailto:diveresehq.xyz@gmail.com">
                diversehq.xyz@gmail.com
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialAndFooter
