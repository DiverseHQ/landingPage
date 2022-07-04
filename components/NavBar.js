import React from 'react'

const NavBar = () => {
  const openInNewTab = (url) => {
    const win = window.open(url, '_blank')
    win.focus()
  }
  return (
    <div className='flex flex-row items-center p-6 pt-8 md:p-12 md:pt-12 h-6 md:h-[60px] justify-between'>
      <div className="flex flex-row align-center">
        <h1 className="text-2xl md:text-4xl">🤿</h1>
        <h1 className="text-2xl md:text-4xl text-purple-600">DIVERSE HQ</h1>
      </div>
      <div className="flex flex-row items-center">
        <img src="/discordIcon.png" onClick={() => {
          openInNewTab("https://discord.gg/TPmVgperuP");
        }} className="mr-4 w-10 md:w-[45px] cursor-pointer" />
        <img src="/twitterIcon.png" className="cursor-pointer w-10  md:w-[45px] cursor-pointer" onClick={() => {
          openInNewTab("https://twitter.com/useDiverseHQ");
        }}/>
      </div>
    </div>
  )
}

export default NavBar