import React from 'react'
import DiverseHQIntroPanel from '../components/new/DiverseHQIntroPanel'
import FeaturesSection from '../components/new/FeaturesSection'
import LandingSection from '../components/new/LandingSection'
import SocialAndFooter from '../components/new/SocialAndFooter'
import TeamSection from '../components/new/TeamSection'

export default function Home () {
  return (
    <div>
      <LandingSection />
      <DiverseHQIntroPanel />
      <FeaturesSection />
      <TeamSection />
      <SocialAndFooter />
      {/* <div className='h-screen'>
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
      </div> */}
    </div>
  )
}
