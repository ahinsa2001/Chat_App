import React from 'react'
import Add from "../img/addUser.png"

export const Register = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className='logo'>MEAN Chat App</span>
            <span className="title">Register</span>
            <hr/>
            <form action="">
                <input style={{display:"none"}} type="file" id='file'/>
                <label htmlFor='file'>
                    <img src={Add} alt='' />
                    <span>Add Profile Picture</span>
                </label>
                <input type="text" placeholder='Enter Name' />
                <input type="email" placeholder='Enter Email' />
                <input type="password" placeholder='Enter Password' />
                <button>Sign up</button>
            </form>
            <p>Do you have an account? Login</p>
        </div>
    </div>
  )
}
