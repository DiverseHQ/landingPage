import React from 'react'
import useWindowSize from '../../utils/hook/useWindowSize'

const Roadmap = () => {
  const { isMobile } = useWindowSize()

  return (
    <div className="flex flex-col mt-16 sm:mt-32">
      <div className="px-4 sm:px-5 text-lg font-[500] sm:text-6xl text-center relative flex flex-row justify-center mb-16 sm:mb-32">
        <div className="w-1/4 mt-3 sm:mt-8 h-6 sm:h-20 border-t-2 border-l border-[#87C8D3]" />
        <div className="mx-3 sm:mx-5 gradient-text font-bold">
          New Development Roadmap
        </div>
        <div className="w-1/4 mt-3 sm:mt-8 h-6 sm:h-20 border-t-2 border-r border-[#87C8D3]" />
      </div>
      {!isMobile && (
        <img className="p-12 lg:p-28" src="/roadmap.png" alt="roadmap" />
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
      {/* desktop timeline */}
      {/* <div className="timeline">
        <div classNameName="outer">
          <div className="card">
            <div className="info">
              <p className="title">Market Research</p>
              <p className="title">Project Brainstorming</p>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <p className="title">Release Social Media</p>
              <p className="title">Team formation</p>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <p className="title">Release Landing Page</p>
              <p className="title">Release Whitepaper</p>
            </div>
          </div>
          <div className="card incomplete">
            <div className="info">
              <p className="title">Beta MVP Launch</p>
              <p className="title">Launch Lens Integration</p>
            </div>
          </div>
          <div className="card incomplete">
            <div className="info">
              <p className="title">Token Ulity</p>
              <p className="title">Sell Digital Content</p>
            </div>
          </div>
          <div className="card incomplete">
            <div className="info">
              <p className="title">Tournaments Feature</p>
              <p className="title">Voting Feature</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Roadmap
