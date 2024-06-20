import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className='log-container'>
      <div className='log-form'>
        <h2>Login Form</h2>
        <label className='log-label'>UserName: </label>
        <input type="text" placeholder='Usernme' className='log-input' />
        <label className='log-label'>Password: </label>
        <input type="password" placeholder='Password' className='log-input mb-4' />
        <Link to={'/Home'}><button className='btn bg-primary'>Sign Up</button></Link>
      </div>
    </div>
  )
}

export default LoginPage
