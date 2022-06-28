import React, { useEffect, useRef, useState } from 'react'
import PrimaryBtn from './PrimaryBtn'
const Airtable = require('airtable');
const base = new Airtable({apiKey: "keyX217mb8lxAgZS6"}).base("appH3euv1Dzz8CQx1");

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpContent = ({closePopUp}) => {
    const emailInputRef = useRef();
    const [signingUp, setSigningUp] = useState(false);
    const notifySuccess = (text) => toast.success(text, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });

    const notifyError = (text) => toast.error(text, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    const signUp = async() => {
        setSigningUp(true);
        try{
        const email = emailInputRef.current.value;
        //how to check if string ends with .com

        if(!email || email === "" || !email.endsWith(".com")){
            notifyError("Please enter a valid email");
            setSigningUp(false);
            return;
        }
        base('join').create([
            {
            "fields":{'emails':email},
            }],function (err, records){
            if(err){
                setSigningUp(false)
                notifyError("Something went wrong. Please try again later.");
                return;
            }
            if(records.length > 0){
                notifySuccess("LFG! 🚀");
                setSigningUp(false);
                setTimeout(closePopUp, 3000);
            }
            });
        }catch(error){
            setSigningUp(false);
            notifyError("Something went wrong. Please try again later.");

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
          <div className="text-5xl text-center font-bold">Will tell you when we are ready </div>
          <input placeholder='email...' className="w-full h-10 p-2 mt-10 rounded-lg border border-gray-400" ref={emailInputRef}/>
          <PrimaryBtn text="Sign Up" isLoading={signingUp} onClick={signUp} style={{marginTop: "20px"}}/>
        </div>
  )
}

export default SignUpContent