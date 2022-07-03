import { useState } from 'react'
import CenterContent from '../components/CenterContent'
import ListOfCardComponents from '../components/ListOfCardComponents'
import NavBar from '../components/NavBar'
import PopUpModal from '../components/PopUpModal'
import PrimaryBtn from '../components/PrimaryBtn'
import SignUpContent from '../components/SignUpContent'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => {
    setIsOpen(false);
  }
  const open = () => {
    setIsOpen(true);
  }
  return (
    <div>
      <div className='h-screen'>
        <NavBar />
        <CenterContent />
        <div className='absolute bottom-[15px] left-0 w-screen flex justify-center items-center'>
        <PrimaryBtn text="Let the Journy begin" onClick={open} />
        </div>
        <PopUpModal isOpen={isOpen} onClose={close} >
          <SignUpContent closePopUp={close}/>
        </PopUpModal>
      </div>
      <div className='w-screen text-center mt-12'>
        <div className='text-6xl font-bold'>Why DiverseHQ ?</div>
        <div className='mt-3 text-3xl p-1 mb-10 text-slate-700'>DiverseHQ is a place where you get Value out of sharing your creativity, skills, and interests.</div>
        <ListOfCardComponents />
      </div>
    </div>
  )
}
