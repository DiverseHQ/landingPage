import React from 'react'
import useWindowSize from '../../utils/hook/useWindowSize'
import MemberCard from '../teamSection/MemberCard'

const TeamSection = () => {
  const { isMobile } = useWindowSize()
  return (
    <div className="flex flex-col sm:mt-[300px]">
      <h1 className="place-self-center text-2xl sm:text-7xl font-semibold  mb-9">
        Team Members
      </h1>
      <section className="flex flex-col items-center justify-center">
        {!isMobile && (
          <div className="flex flex-row itemse-center justify-center">
            <MemberCard
              image={
                'https://cdn.discordapp.com/attachments/1014407377056968754/1043118148926312528/WFDFwC_I_400x400.jpg'
              }
              name={'rathod.lens'}
              bio={'Creative dev'}
            />
            <MemberCard
              image="/Kirrttiraj.jpg"
              name={'boredhead.lens'}
              bio={'Frontend dev'}
            />
          </div>
        )}
        {isMobile && (
          <>
            <div className="self-start ml-10">
              <MemberCard
                image={
                  'https://cdn.discordapp.com/attachments/1014407377056968754/1043118148926312528/WFDFwC_I_400x400.jpg'
                }
                name={'rathod.lens'}
                bio={'Creative dev'}
              />
            </div>
            <div className="self-end mr-10">
              <MemberCard
                image="/Kirrttiraj.jpg"
                name={'boredhead.lens'}
                bio={'Frontend dev'}
              />
            </div>
          </>
        )}
        <div className="self-start sm:self-center ml-10 sm:ml-0">
          <MemberCard
            image="/taha.png"
            name={'tahakhak.lens'}
            bio={'Community dev'}
          />
        </div>
      </section>
    </div>
  )
}

export default TeamSection
