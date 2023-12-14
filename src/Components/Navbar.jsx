import React from 'react'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">MEAN Chat</span>
      <div className="user">
        <img src='https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg' alt='' />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  )
}
