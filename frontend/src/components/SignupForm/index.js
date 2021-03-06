import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css'

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <>
    <div className="landing-page-container">
    <div className="panel-container">
      <div className="signup-welcome">
      <div className="panel-logo">
        <img className="logo-main"src="https://i.imgur.com/3RRsOjg.png"></img>
      </div>
        <h5>Don't <br></br>Forget <br></br>The Face</h5>
        <p className="panel-caption">Stop guessing and start tracking.<br></br>Quantify your skincare routine today.</p>
      </div>  
      
    </div>
    <div className="form-container">
      <div className="signup-screen">
    <form className="signup-form" onSubmit={handleSubmit}>
      
        {(!errors.length > 0) ? <div className="signup-title">Signup</div> : 
        <div className="signup-title">Woops! <div className="error-list">
        {errors.map((error, idx) => <p key={idx}>{error}</p>)}
      </div> </div> }
        
      <div className="input-group">
      <label>
        <input
          className="signup-field"
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      </div>
      <div className="input-group">
      <label>
        <input
          type="text"
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      </div>
      <div className="input-group">
        <label>
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      </div>
      <div className="input-group">
      <label>
        <input
          type="password"
          placeholder="confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </label>
      </div>
      <button className="btn" type="submit">Sign Up</button>
      <p><a href="/login">or click here to log in.</a></p>
    </form>
    </div>
    </div>
    </div>
    </>
  );
}

export default SignupFormPage;