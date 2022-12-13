import React, { useState } from 'react'
import useWindowSize from '../../utils/hook/useWindowSize'

const Newsletter = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submitted')
  }

  const { isMobile } = useWindowSize()

  return (
    <>
      {!isMobile && (
        <div className="flex flex-col lg:flex-row center items-center justify-center border-solid border-2 border-[#D2DAFF]  my-16 rounded-[50px] pl-[150px] pr-4 relative w-[85%] h-[150px] ml-auto mr-8 xl:mr-16 ">
          {/* border: 2px solid #D2DAFF;
border-radius: 0px 50px 50px 0px */}
          <img
            src="/3dIllustrator.png"
            className="w-[303px] mr-2 md:mr-4 lg:mr-6 absolute left-[-120px] top-[-53px]"
          />
          <div className="flex flex-col md:flex-row w-full justify-between items-center">
            <div className="flex-col mr:0 md:mr-8 px-4 sm:px-0">
              <h3 className="text-[#000] font-semibold text-lg">
                Subscribe to our newsletter
              </h3>
              <p>
                Be the first to receive the latest news about Diverse HQ
                updates, events and airdrops !
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="justify-start md:justify-self-end flex  md:flex-row gap-1 sm:gap-4"
            >
              <input
                placeholder="Enter your Email"
                type="email"
                className="text-[#000000CC] bg-transparent border-solid border-b-2 border-[#D2DAFF] mr-2 md:mr-4 text-md md:text-lg outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="bg-[#B1B2FF] rounded-[10px] px-2 py-1 md:px-4 md:py-2 hover:text-[#FFF] hover:bg-[#D2DAFF]">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      )}
      {isMobile && (
        <div className="flex flex-col items-center px-8 pb-4 border-solid border-2 border-[#D2DAFF] rounded-[50px] mx-4 mt-12">
          <img src="/3dIllustrator.png" alt="Illustration" />
          <div className="mb-4">
            <h3 className="text-[#000] font-semibold text-lg">
              Subscribe to our newsletter
            </h3>
            <p>
              Be the first to receive the latest Diverse HQ updates, news and
              events!
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex self-start w-full justify-between"
          >
            <input
              placeholder="Enter your Email"
              type="email"
              className="text-[#000000CC] bg-transparent border-solid border-b-2 border-[#D2DAFF] mr-2 md:mr-4 text-md md:text-lg outline-none pl-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="bg-[#B1B2FF] rounded-[10px] px-2 py-1 md:px-4 md:py-2 hover:text-[#FFF] hover:bg-[#D2DAFF] self-end">
              Subscribe
            </button>
          </form>
        </div>
      )}
    </>
  )
}

export default Newsletter
