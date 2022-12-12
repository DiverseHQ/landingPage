import React, { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submitted')
  }

  return (
    <div className="flex flex-col lg:flex-row center items-center border-solid border-2 border-[#D2DAFF] mx-12 my-16 rounded-[50px] p-4">
      {/* border: 2px solid #D2DAFF;
border-radius: 0px 50px 50px 0px */}
      <img
        src="/3dIllustrator.png"
        className="w-[303px] mr-2 md:mr-4 lg:mr-8"
      />
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex-col mr:0 md:mr-8 px-4 sm:px-0">
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
          className="justify-start md:justify-self-end flex  md:flex-row gap-1 sm:gap-4"
        >
          <input
            placeholder="Enter your Email"
            type="email"
            className="text-[#000000CC] bg-transparent border-solid border-b-2 border-[#D2DAFF] mr-2 md:mr-4 text-md md:text-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="bg-[#B1B2FF] rounded-[10px] px-2 py-1 md:px-4 md:py-2 hover:text-[#FFF] hover:bg-[#D2DAFF]">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}

export default Newsletter
