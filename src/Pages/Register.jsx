import React from 'react'
import Add from "../img/addPic.png"

export const Register = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className='logo'>MEAN Chat App</span>
            <span className="title">Register</span>
            <form action="">
                <input type="text" placeholder='Enter Your Name' />
                <input type="email" placeholder='Enter Your Email' />
                <input type="password" placeholder='Enter Password' />
                <input style={{display:"none"}} type="file" id='file'/>
                <label htmlFor='file'>
                    <img src={Add} alt='' />
                    <span>Add Profile Picture</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>Do you have an account? Login</p>
        </div>
    </div>
  )
}
