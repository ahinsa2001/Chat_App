import React, { useState } from 'react'
import Add from "../img/addUser.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { Link, useNavigate } from 'react-router-dom';

export const Register = () => {
  const [err,setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const file = e.target[0].files[0];
    const displayName = e.target[1].value;
    const email = e.target[2].value;
    const password = e.target[3].value;
    
    try{ 
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file).then

      uploadTask.on(
        (error) => {
          setErr(true);
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {

            await updateProfile (res.user,{
              displayName,
              photoURL: downloadURL,
            });

            await setDoc (doc(db, "users", res.user.uid),{
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc (doc(db, "userChats", res.user.uid),{ });
            navigate("/")

          });
        }
      );
      
 
    }catch(err){
      setErr(true);
    }
    
  };

  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className='logo'>MEAN Chat App</span>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit}>
                <input style={{display:"none"}} type="file" id='file'/>
                <label htmlFor='file'>
                    <img src={Add} alt='' />
                    <span>Add Profile Picture</span>
                </label>
                <input type="text" placeholder='Enter name' />
                <input type="email" placeholder='Enter email' />
                <input type="password" placeholder='Enter password' />
                <button>Sign up</button>
                {err && <span>Something went wrong</span>}
            </form>
            <p>Do you have an account? <Link to='/login'>Login</Link></p>
        </div>
    </div>
  )
}
