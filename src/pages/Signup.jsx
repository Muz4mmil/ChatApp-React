import React from 'react'

const Signup = () => {
  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className="logo">Chat</span>
        <span className="title">Signup</span>
        <form action="">
            <input type="text" name="name" id="name" placeholder='Name'/>
            <input type="email" name="" id="" placeholder='Email' />
            <input type="password" name="" id="" placeholder='Password'/>
            <input type="file" name="" id="" />
            <button>Sign Up</button>
        </form>
        <p>Already Have an account? Login</p>
      </div>
    </div>
  )
}

export default Signup
