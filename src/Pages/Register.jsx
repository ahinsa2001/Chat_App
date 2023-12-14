import React, { useState } from 'react'
import Add from "../img/addUser.png"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export const Register = () => {
  const [err,setErr] = useState(false)

  const handleSubmit = async (e)=>{
    e.preventDefault()
    const enterName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].file[0];

    try{
      const res = await createUserWithEmailAndPassword(auth, email, password)
 
    }catch(err){
      setErr(true);
    }
    
  }

  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className='logo'>MEAN Chat App</span>
            <span className="title">Register</span>
            <hr/>
            <form onSubmit={handleSubmit}>
                <input style={{display:"none"}} type="file" id='file'/>
                <label htmlFor='file'>
                    <img src={Add} alt='' />
                    <span>Add Profile Picture</span>
                </label>
                <input type="text" placeholder='Enter Name' />
                <input type="email" placeholder='Enter Email' />
                <input type="password" placeholder='Enter Password' />
                <button>Sign up</button>
                {err && <span>Something went wrong</span>}
            </form>
            <p>Do you have an account? Login</p>
        </div>
    </div>
  )
}
