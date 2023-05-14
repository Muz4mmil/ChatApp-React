import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user'/>
      </div>
      <div className="userChat">
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
        <div className="userChatInfo">
          <span>Muzammil</span>
        </div>
      </div>
      
    </div>
  )
}

export default Search
