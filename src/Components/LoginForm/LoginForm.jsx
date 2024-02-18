import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

function LoginForm() {
    return (
        <div className='wrapper-login'>
            <form action="">
                <h1>
                    Login
                </h1>
                <div className='input-box'>
                    <input type='text' placeholder='Username' required />
                    <FaUser className='icon'/>
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='Password' required />
                    <FaLock className='icon' />
                </div>
                <div className='Remember-forgot'>
                    <label><input type='checkbox' />Remember me </label>
                    <a href='#'>Forgot password?</a>
                </div>
                <button type='submit'>Login</button>
                <div className='Register-link'>
                    <p>Don't have an account? <Link to='/signup'>Register</Link></p>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;

