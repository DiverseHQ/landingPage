import React from 'react'

const NavBar = () => {
  const openInNewTab = (url) => {
    const win = window.open(url, '_blank')
    win.focus()
  }
  return (
    <div className='flex flex-row justify-end items-center p-12 h-[60px] w-full'>
        <img src="/discordIcon.png" onClick={() => {
          openInNewTab("https://discord.gg/AHWXpyaKCc");
        }} className="mr-8 w-[45px] cursor-pointer" />
        <img src="/twitterIcon.png" className="cursor-pointer" onClick={() => {
          openInNewTab("https://twitter.com/useDiverseHQ");
        }} className="w-[45px] cursor-pointer"/>
    </div>
  )
}

export default NavBar