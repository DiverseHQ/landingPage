import React, { useEffect, useRef, useState } from 'react'
import PrimaryBtn from './PrimaryBtn'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const Airtable = require('airtable')
const base = new Airtable({ apiKey: 'keyjfDe2TPynDc275' }).base(
  'appH3euv1Dzz8CQx1'
)

const SignUpContent = ({ closePopUp }) => {
  const emailInputRef = useRef()
  const [signingUp, setSigningUp] = useState(false)
  const notifySuccess = (text) =>
    toast.success(text, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined
    })

  const notifyError = (text) =>
    toast.error(text, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
  const signUp = async () => {
    setSigningUp(true)
    try {
      const email = emailInputRef.current.value
      // how to check if string ends with .com

      if (!email || email === '' || !email.endsWith('.com')) {
        notifyError('Please enter a valid email')
        setSigningUp(false)
        return
      }
      base('join').create(
        [
          {
            fields: { emails: email }
          }
        ],
        function (err, records) {
          if (err) {
            setSigningUp(false)
            notifyError('Something went wrong. Please try again later.')
            return
          }
          if (records.length > 0) {
            notifySuccess('LFG! 🚀')
            setSigningUp(false)
            setTimeout(closePopUp, 3000)
          }
        }
      )
    } catch (error) {
      console.log(error)
      setSigningUp(false)
      notifyError('Something went wrong. Please try again later.')
    }
  }

  // function to return days left for 31 july 2022
  const getDaysLeft = () => {
    const date = new Date()
    const currentDate = date.getDate()
    const currentMonth = date.getMonth()
    const currentYear = date.getFullYear()
    const currentHours = date.getHours()
    const currentMinutes = date.getMinutes()
    const currentSeconds = date.getSeconds()
    const currentMilliseconds = date.getMilliseconds()
    const currentTime = new Date(
      currentYear,
      currentMonth,
      currentDate,
      currentHours,
      currentMinutes,
      currentSeconds,
      currentMilliseconds
    )
    const futureDate = new Date(
      2022,
      6,
      31,
      currentHours,
      currentMinutes,
      currentSeconds,
      currentMilliseconds
    )
    const timeDiff = futureDate.getTime() - currentTime.getTime()
    const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24))
    return daysLeft
  }

  const daysLeft = getDaysLeft()

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      signUp()
    }
  }
  return (
    <div className="max-w-[450px] flex flex-col items-center justify-center">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
      />
      {/* Same as */}
      <ToastContainer />
      <div className="text-4xl text-center font-bold">
        Beta Testing Live in<br></br>
        <span className="text-purple-300"> {daysLeft} Days </span>
      </div>
      <input
        placeholder="email..."
        onKeyUp={handleEnter}
        type="email"
        className="w-full h-10 p-2 mt-6 rounded-lg border border-gray-400"
        ref={emailInputRef}
        required
      />
      <PrimaryBtn
        text="Get Notified 🔔"
        isLoading={signingUp}
        onClick={signUp}
        style={{ marginTop: '20px' }}
      />
    </div>
  )
}

export default SignUpContent
