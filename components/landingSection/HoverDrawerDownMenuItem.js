import React, { useState } from 'react'

const HoverDrawerDownMenuItem = ({ menuItem }) => {
  const [toolTip, setToolTIp] = useState({ top: 0, left: 0, visiblity: false })
  const onMouseEnter = (e) => {
    if (!toolTip.visiblity) {
      //   const height = e.target.clientHeight / 2
      //   const width = e.target.clientWidth

      setToolTIp({
        ...toolTip,
        visiblity: true,
        top: '75px',
        left: 0
      })
    }
  }
  const onMouseLeave = (e) => {
    setToolTIp({ ...toolTip, visiblity: false })
  }

  return (
    <div
      className="cursor-pointer relative"
      onMouseEnter={onMouseEnter}
      onFocus={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex flex-row justify-between hover:text-p-h items-center">
        <div className="text-xl px-4 py-6">{menuItem.title}</div>
        <div className="text-xl py-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      {/* //show items when hover */}
      {toolTip.visiblity && (
        <div
          className="absolute flex flex-col gap-y-2 z-20 bg-s-bg text-black w-40 rounded-3xl shadow-lg text-center"
          style={{
            top: toolTip.top,
            left: toolTip.left
          }}
        >
          {menuItem.items.map((item, index) => (
            <div
              key={item.title}
              className={`text-xl p-6 hover:bg-p-h cursor-pointer ${
                index === 0 ? 'rounded-t-3xl' : ''
              } ${index === menuItem.items.length - 1 ? 'rounded-b-3xl' : ''}`}
              onClick={item.onClick}
            >
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default HoverDrawerDownMenuItem
