import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'

const HomeScreen = () => {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default HomeScreen
