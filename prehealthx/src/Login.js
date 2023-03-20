import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase';
import {  signInWithEmailAndPassword } from "firebase/auth";
import './Login.css'


function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        signInWithEmailAndPassword( auth, email, password).then((auth) => {
            if (auth){
                navigate('/')
            }
        }).catch(error => alert(error.message))
    }


  return (
    <div className='login'>
        <div className='login__container'>
        <Link to='/'>
            <img className='login__logo'
            src='PreHealthx-logos_black.png' alt=''/>
        </Link>       
            <h1>Sign-in</h1>
            <p>Do not have an account yet?</p>
        <Link to='/signup'><p>Create an Account</p></Link>

            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                <button type='submit' onClick={signIn}
                className='login__signInButton'>Sign In</button>
            </form>

            <p>
                By Signing-in you agree to Amasampo's Conditions of use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
            </p>

        </div>
        
      
    </div>
  )
}

export default Login
