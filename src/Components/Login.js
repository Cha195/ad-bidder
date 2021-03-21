import React from 'react'
import './Login.css'
import wave from '../assets/wave.png'
import bg from '../assets/bg.svg'
import avatar from '../assets/avatar_login.svg'

const Login = () => { 


  return (
    <>
	    <img alt='wave' className="wave" src={wave} />
	    <div className="container">
		    <div className="img">
			    <img alt='background' src={bg} />
		    </div>  
		    <div className="login-content">
			    <form action="index.html">
				    <img alt='avatar' src={avatar} />
				    <h2 className="title">Welcome Back!</h2>
           		<div className="input-div one">
           		  <div className="i">
           		   	<i className="fas fa-user" />
           		  </div>
           		  <div className="div">
           		   	{/* <h5>Username</h5> */}
           		   	<input type="text" className="input"  placeholder='Username'/>
           		  </div>
           		</div>
           		<div className="input-div pass">
           		  <div className="i"> 
           		    <i className="fas fa-lock" />
           		  </div>
           		  <div className="div">
           		    {/* <h5>Password</h5> */}
           		    <input type="password" className="input" placeholder='Password' />
            	  </div>
            	</div>
            	<a href="#" style={{marginTop: '20px'}}>Forgot Password?</a>
            	<input type="submit" className="btn btn-login" value="Login"/>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login