import React from 'react'

export const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type='text' placeholder='Find a user' />
      </div>
      <div className="userChat">
        <img src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}
 