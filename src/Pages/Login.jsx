import React from 'react'

export const Login = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className='logo'>MEAN Chat App</span>
            <hr/>
            <form>
                <input type="email" placeholder='Enter Email' />
                <input type="password" placeholder='Enter Password' />
                <button>Login</button>
            </form>
            <p>Don't you have an account? Register</p>
        </div>
    </div>
  )
}
