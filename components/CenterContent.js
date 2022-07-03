import React from 'react'
import styles from "../styles/CenterContent.module.css"
import Typewriter from 'typewriter-effect';

const CenterContent = () => {
  return (
    <div className="flex flex-col items-center min-h-[70vh] justify-center mb-[90px] relative">
      <img src="/vector-bg.png" className="max-h-[80vh] object-contain" />
      <div className="absolute">
      <div className="text-5xl md:text-6xl flex items-center justify-center pt-16">
      <div>
      <Typewriter
  options={{
    strings: ['Create', 'Comment', 'Socialize'],
    autoStart: true,
    loop: true,
    wrapperClassName: 'text-purple-600',
  }}
/>
</div>
<h1 className="text-5xl md:text-6xl">To Earn</h1>
    </div>
   <div className="pt-4">
     <h1 className="text-2xl max-w-2xl text-center leading-10 p-1 text-slate-700"> Join communities, express your creativity, and get noticed for your work! </h1>
     </div>   
    </div>
    </div>
  )
}

export default CenterContent