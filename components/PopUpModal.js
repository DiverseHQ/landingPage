import React from 'react'

const PopUpModal = ({isOpen,children,onClose}) => {
  return (
      <>
      {isOpen && (
          <>
          <div className='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
          <div className='bg-black/[0.5] z-0 w-full absolute top-0 left-0 right-0 bottom-0' onClick={onClose}></div>
            <div className='bg-white z-20 p-3 rounded-3xl'>
                {children}
            </div>
          </div>
          </>
        )}
      </>
  )
}

export default PopUpModal