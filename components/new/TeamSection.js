import React from 'react'
import MemberCard from '../teamSection/MemberCard'

const TeamSection = () => {
  return (
    <div className="flex flex-col sm:mt-[150px]">
      <h1 className="place-self-center text-2xl sm:text-7xl font-semibold  mb-9">
        Team Members
      </h1>
      <section className="flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-center">
          <MemberCard
            image={'/rdPfp.png'}
            name={'rathod.lens'}
            bio={'Creative dev'}
          />
          <MemberCard
            image={'kirtirajPfp.png'}
            name={'boredhead.lens'}
            bio={'Frontend dev'}
          />
        </div>
        <div className="flex flex-row items-center justify-center">
          <MemberCard
            image={'tahaPfp.jpg'}
            name={'tahakhak.lens'}
            bio={'Community dev'}
          />
          <MemberCard image={'aliPfp.svg'} name={'ali'} bio={'Fullstack dev'} />
        </div>
      </section>
    </div>
  )
}

export default TeamSection
