import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Webcam from "react-webcam";
import Tooltip from 'react-tooltip-lite';
import GoogleLogin from 'react-google-login'
import './LoginForm.css'

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/dashboard" />
  );

  const authGoogle = (googleUser) => {
    setErrors([]);
    const credential = googleUser.profileObj.email
    const googleToken = googleUser.getAuthResponse().id_token;
    const password = googleToken;
    return dispatch(sessionActions.login({ credential, password })) .catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  navigator.mediaDevices.getUserMedia !== undefined ? console.log(navigator.mediaDevices.getUserMedia) : console.log(false)

  const demoLogin = (e) => {
    setCredential('demo@user.io')
    setPassword('password')
    e.preventDefault()
    setErrors([])
    return dispatch(sessionActions.login({ credential, password }))
    .catch(async (res) => {
      console.log(res)
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });
  }
  let video;
  let canvas; 
  let context; 
  


  return (
    <>
    
    <div className="landing-page-container">
      <div className="panel-container">
        <div className="login-welcome">
          <div className="panel-logo">
              <img className="logo-main"src="https://i.imgur.com/3RRsOjg.png"></img>
           </div>
        <h5>Welcome Back, <br></br>Beautiful.</h5>
        <p className="panel-caption">Stop guessing and start tracking.<br></br>Quantify your skincare routine today.</p>
      </div>
    </div>
    <div className="login-form-container">
      <div className="login-screen">
      
        <form className="login-form" onSubmit={handleSubmit}>
        <Tooltip direction="up" forceDirection content="Make sure your webcam is enabled">
        <Webcam
          audio={false}
          screenshotFormat="image/jpeg"
          width="250"
          height="250"
           style={{
            borderRadius: '50%',
            objectFit: 'cover',
            borderStyle: 'dashed',
            borderColor: 'pink',

          }}
        />
        </Tooltip>
            {(!errors.length > 0) ? <div className="login-title">Login</div> : 
        <div className="signup-title">Woops! <div className="error-list">
                {errors.map((error, idx) => <p key={idx}>{error}</p>)}
                </div>
            </div> }

            <div> <GoogleLogin
    clientId="622766758827-gh1ghhp6c880n96e571stc5gm34rsp96.apps.googleusercontent.com"
    buttonText="Login With Google"
    onSuccess={authGoogle}
    onFailure={authGoogle}
    cookiePolicy={'single_host_origin'}
    /> </div>
    <div><br></br><p>or</p></div>
      <div className="input-group">
      <label>
        <input
          className="login-field"
          type="text"
          placeholder="username or email" 
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      </label>
      </div>
      <div className="input-group">
      <label>
        <input
          type="password"
          placeholder="password" 
          className="login-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      </div>
      
      <button className="btn" type="submit">Log In</button>
      <p><a href="/signup">click here to create an account</a></p>

    </form>
      <button className="btn" type="button" onClick={demoLogin}>Demo Login</button>
      
    </div>
    </div>
    </div>
    </>
  );
}

export default LoginFormPage;