import { useState } from 'react'
import CenterContent from '../components/CenterContent'
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
    <div >
      <NavBar />
      <CenterContent />
      <div className='absolute bottom-[15px] left-0 w-screen flex justify-center items-center'>
      <PrimaryBtn text="Let the Journy begin" onClick={open} />
      </div>
      <PopUpModal isOpen={isOpen} onClose={close} >
        <SignUpContent closePopUp={close}/>
      </PopUpModal>
    </div>
  )
}
