import React, { useRef } from "react";
// import DiverseHQIntroDiv from '../components/new/DiverseHQIntroDiv'
import FeaturesSection from "../components/new/FeaturesSection";
import LandingSection from "../components/new/LandingSection";
import SocialAndFooter from "../components/new/SocialAndFooter";
import TeamSection from "../components/new/TeamSection";

export default function Home() {
  const featureSectionRef = useRef();
  const teamSectionRef = useRef();
  return (
    <div>
      <LandingSection
        featureSectionRef={featureSectionRef}
        teamSectionRef={teamSectionRef}
      />
      {/* <DiverseHQIntroDiv /> */}
      <div className="relative">
        <div ref={featureSectionRef}>
          <FeaturesSection />
        </div>
        <div ref={teamSectionRef}>
          <TeamSection />
        </div>
        <img src="/secondRightCurve.svg" className="absolute right-0 top-0" />
        <img
          src="/secondLeftCurve.svg"
          className="absolute left-0 top-[1000px]"
        />
      </div>
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
  );
}
