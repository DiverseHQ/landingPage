import React from 'react'

const NavBar = () => {
  return (
    <div className='flex flex-row justify-end items-center p-2 h-[60px] w-full'>
        <img src="/discordIcon.png" onClick={() => {window.location.href= '/'}} className="pr-3 w-[50px]" />
        <img src="/twitterIcon.png" onClick={() => {window.location.href= '/'}} className="pr-3 w-[50px]"/>
    </div>
  )
}

export default NavBar