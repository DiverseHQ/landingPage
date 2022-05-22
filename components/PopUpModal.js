import React from 'react'

const PopUpModal = ({isOpen,children,onClose}) => {
  return (
      <>
      {isOpen && (
          <>
          <div className='bg-black/[0.5] z-0 w-full absolute top-0 left-0 right-0 bottom-0' onClick={onClose}></div>
          <div className='bg-white z-10 h-full p-3'>
              {children}
          </div>
          </>
        )}
      </>
  )
}

export default PopUpModal