import React from 'react'
import useWindowSize from '../../utils/hook/useWindowSize'

const Roadmap = () => {
  const { isMobile } = useWindowSize()

  return (
    <div className="flex flex-col mt-16 sm:mt-32">
      <div className="px-4 sm:px-5 text-lg font-[500] sm:text-6xl text-center relative flex flex-row justify-center mb-16 sm:mb-16">
        <div className="w-1/4 mt-3 sm:mt-8 h-6 sm:h-20 border-t-2 border-l border-[#87C8D3]" />
        <div className="mx-3 sm:mx-5 gradient-text font-bold">
          Development Roadmap
        </div>
        <div className="w-1/4 mt-3 sm:mt-8 h-6 sm:h-20 border-t-2 border-r border-[#87C8D3]" />
      </div>
      {!isMobile && (
        <div className="w-full flex flex-row justify-center">
          <img
            className="image-unselectable w-[1100px] lg:p-28"
            src="/roadmap.png"
            alt="roadmap"
          />
        </div>
      )}
      {isMobile && (
        <div className="timeline">
          <div className="outer">
            <div class="card">
              <div class="info">
                <h3 class="title">Market Research</h3>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title">Project Brainstorming</h3>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title">Release Social Media</h3>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title">Team Formation</h3>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title">Release Landing page</h3>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title">Release Whitepaper</h3>
              </div>
            </div>
            <div class="card incomplete">
              <div class="info">
                <h3 class="title">Beta MVP Launch</h3>
              </div>
            </div>
            <div class="card incomplete">
              <div class="info">
                <h3 class="title">Launch Lens Integration</h3>
              </div>
            </div>
            <div class="card incomplete">
              <div class="info">
                <h3 class="title">Token Utility</h3>
              </div>
            </div>
            <div class="card incomplete">
              <div class="info">
                <h3 class="title">Sell Digital Content</h3>
              </div>
            </div>
            <div class="card incomplete">
              <div class="info">
                <h3 class="title">Tournaments Feature</h3>
              </div>
            </div>
            <div class="card incomplete">
              <div class="info">
                <h3 class="title">Voting Feature</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Roadmap
