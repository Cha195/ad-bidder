import React from 'react'
import './Login.css'
import wave from '../assets/wave_register.png'
import bg from '../assets/bg_register.svg'
import avatar from '../assets/avatar_register.svg'

const Register = () => { 


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
			  <h2 className="title">Hey there!</h2>
           	  <div className="input-div one">
           		<div className="i">
           		  <i className="fas fa-user" />
           		</div>
           		<div className="div">
           		   	{/* <h5>Username</h5> */}
           		  <input type="text" className="input"  placeholder='Name'/>
           		</div>
           	  </div>
              <div className="input-div one">
           		<div className="i">
           		  <i className="fas fa-user" />
           		</div>
           		<div className="div">
           		  {/* <h5>Email</h5> */}
           		  <input type="text" className="input"  placeholder='Email'/>
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
              <input style={{marginTop: '30px'}} type="submit" className="btn btn-register" value="Sign Up"/>
            </form>
        </div>
      </div>
    </>
  )
}

export default Register