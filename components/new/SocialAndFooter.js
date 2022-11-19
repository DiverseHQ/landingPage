import React from 'react'
import { FaDiscord, FaTelegramPlane } from 'react-icons/fa'
import { BsTwitter, BsInstagram } from 'react-icons/bs'

const SocialAndFooter = () => {
  return (
    <div className="flex flex-col mt-[300px]">
      <div className="flex flex-row justify-around items-center  place-self-center w-2/3 h-[80px]  border rounded-t-full  bg-s-bg p-2">
        <a>
          <FaDiscord className="w-14 h-14 " />
        </a>
        <a
          href="https://twitter.com/useDiverseHQ"
          target={'_blank'}
          rel="noreferrer"
        >
          <BsTwitter className="h-12 w-12" />
        </a>
        <a>
          <BsInstagram className="w-12 h-12" />
        </a>
        <a>
          <FaTelegramPlane className="w-12 h-12" />
        </a>
      </div>

      <div className="flex flex-row bg-p-bg justify-start p-14">
        <div
          className="items-center
             mx-3"
        >
          <ul>
            <h6 className="mb-6 text-3xl">Quick Links</h6>
          </ul>
          <div className="text-2xl ">
            <ul className="hover:underline">
              <a href="#">Home</a>
            </ul>
            <ul className="hover:underline">
              <a href="#">Blog</a>
            </ul>
            <ul className="hover:underline">
              <a href="#">Feature</a>
            </ul>
            <ul className="hover:underline">
              <a href="#">Whitepaper</a>
            </ul>
          </div>
        </div>
        <div className="items-center justify-center ml-[258px]">
          <ul className="mb-6">
            <h6 className="items-center mb-1 text-3xl">Contack US</h6>
          </ul>
          <ul className="text-2xl hover:underline">
            <a href="mailto:diveresehq.xyz@gmail.com">
              diversehq.xyz@gmail.com
            </a>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SocialAndFooter
