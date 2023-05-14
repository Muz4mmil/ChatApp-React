import React from 'react'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className="chat">
      <div className='chatInfo'>
        <span>Muzammil</span>
        <div className="chatIcons">
          <span class="material-symbols-outlined">more_vert</span>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat
