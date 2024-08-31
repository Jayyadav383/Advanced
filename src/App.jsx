import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [register,setRegister]=useState(true);
  function toggleLogin(){
    setRegister(register)
  }
  function toggleRegister(){
    setRegister(!register)
  }
return (
   <div>
      <div className="container"  id="container">
        <div className="form-container sign-up">
            <form>
                <h2>Create Account</h2>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button>Sign Up</button>
            </form>
        </div>
        <div className="form-container sign-in">
            <form>
                <h2>Sign In</h2>  
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <a>Forget Your Password?</a>
                <button>Sign In</button>
            </form>
        </div>
        <div className="toggle-container">
            <div className="toggle">
                <div className={`toggle-panel toggle-left ${register} ? active : `}>
                    <h2>Welcome Back!</h2>
                    <p>Enter your personal details to use all of site features</p>
                    <button className="hidden" id="login" onClick={toggleLogin()}>Sign In</button>
                </div>
                <div className={`toggle-panel toggle-right ${!register} ?  : active `}>
                    <h2>Hello, Friend!</h2>
                    <p>Register with your personal details to use all of site features</p>
                    <button className="hidden" id="register" onClick={toggleRegister()}>Sign Up</button>
                </div>
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default App

