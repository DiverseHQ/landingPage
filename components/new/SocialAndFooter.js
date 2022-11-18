import React from 'react'
import {FaDiscord, FaTelegramPlane} from "react-icons/fa"
import {BsTwitter, BsInstagram} from "react-icons/bs"

const SocialAndFooter = () => {
  return (
    <div className="flex flex-col">
      <div className="flex  flex-row justify-around items-center  place-self-center w-2/3  border rounded-t-full  bg-purple-200 p-2">
        <a><FaDiscord className="w-10 h-10 "/></a>
        <a><BsTwitter className="h-9 w-9" /></a>
        <a><BsInstagram className="w-9 h-9" /></a>
        <a><FaTelegramPlane className="w-9 h-9" /></a> 
      </div>

    <div className="flex flex-row text-center bg-cyan-600 justify-start p-2">
      <div className="items-center
            justify-center mx-3 p-3">
        <ul>
          <h6 className="items-center mb-1 font-semibold">Quick Links</h6>
        </ul>
          <ul>
            <a href="#">Home</a>
          </ul>
          <ul>
            <a href="#">Blog</a>
          </ul>
          <ul>
            <a href="#">Feature</a>
          </ul>
          <ul>
            <a href="#">Whitepaper</a>
          </ul>
      </div>
      <div className="items-center justify-center p-3" >
        <ul>
        <h6 className="items-center mb-1 font-semibold">Contack US</h6>
        </ul>
          <ul>
            <a>diversehq.xyz@gmail.com</a>
          </ul>
      </div>
        
    </div>
    </div>
  )
}

export default SocialAndFooter
