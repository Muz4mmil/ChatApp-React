import React from 'react'

const Login = () => {
  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className="logo">Chat</span>
        <span className="title">Login</span>
        <form action="">
            <input type="email" name="" id="" placeholder='Email' />
            <input type="password" name="" id="" placeholder='Password'/>
            <button>Sign In</button>
        </form>
        <p>Don't Have an account? Register</p>
      </div>
    </div>
  )
}

export default Login;
