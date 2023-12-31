import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

export const Login = () => {

  const [err,setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    
    try{ 
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
      
 
    }catch(err){
      setErr(true);
    }
    
  };


  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className='logo'>MEAN Chat App</span>
            <hr/>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='Enter email' />
                <input type="password" placeholder='Enter password' />
                <button>Login</button>
                {err && <span>Something went wrong</span>}
            </form>
            <p>Don't you have an account? <Link to='/register'>Register</Link></p>
        </div>
    </div>
  )
}
