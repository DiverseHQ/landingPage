import React from 'react'
import CenterContent from '../components/CenterContent'
import ListOfCardComponents from '../components/ListOfCardComponents'
import NavBar from '../components/NavBar'
import PrimaryBtn from '../components/PrimaryBtn'

export default function Home() {
  const open = () => {
    window.open("https://diversehq-diversehq.vercel.app/", "_blank");
  }
  return (
    <div>
      <div className='h-screen'>
        <NavBar />
        <CenterContent />
        <div className='absolute bottom-[15px] left-0 w-full flex justify-center items-center'>
        <PrimaryBtn text="Launch APP 🚀" onClick={open} />
        </div>
      </div>
      <div className='w-full text-center mt-12'>
        <div className='text-6xl font-bold'>Why DiverseHQ ?</div>
        <div className='mt-3 text-3xl p-1 mb-10 text-slate-700'>DiverseHQ is a place where you get Value out of sharing your creativity, skills, and interests.</div>
        <ListOfCardComponents />
      </div>
    </div>
  )
}
