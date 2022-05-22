import React, { useEffect, useRef, useState } from 'react'
import PrimaryBtn from './PrimaryBtn'
const Airtable = require('airtable');
const base = new Airtable({apiKey: "keyX217mb8lxAgZS6"}).base("appH3euv1Dzz8CQx1");

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpContent = () => {
    const emailInputRef = useRef();
    const [signingUp, setSigningUp] = useState(false);
    const notifySuccess = () => toast.success('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
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
        console.log("email : ",email);
        base('join').create([
            {
            "fields":{'emails':email},
            }],function (err, records){
            if(err){
                console.error(err);
                setSigningUp(false)
                return;
            }
            if(records.length > 0){
                notifySuccess();
                console.log("Successfully");
                setSigningUp(false)
            }
            console.log('records',records);
            });
        }catch(error){
            setSigningUp(false);
        console.error(error);
        }
    }
  return (
    <div className="w-[450px] flex flex-col items-center justify-center">
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
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