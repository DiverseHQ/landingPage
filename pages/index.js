import { useState } from 'react'
import CenterContent from '../components/CenterContent'
import NavBar from '../components/NavBar'
import PopUpModal from '../components/PopUpModal'
import PrimaryBtn from '../components/PrimaryBtn'
import SignUpContent from '../components/SignUpContent'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [isOpen, setIsOpen] = useState
  (false);
  const close = () => {
    setIsOpen(false);
  }
  const open = () => {
    setIsOpen(true);
  }
  return (
    <div className="">
      <NavBar />
      <CenterContent />
      <PrimaryBtn text="Let the Journy begin" onClick={open} />
      <PopUpModal isOpen={isOpen} onClose={close} >
        <SignUpContent closePopUp={close}/>
      </PopUpModal>
    </div>
  )
}
