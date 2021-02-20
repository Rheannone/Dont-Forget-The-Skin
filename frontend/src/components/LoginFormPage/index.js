import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css'

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <div className="login-form-container">
    <div className="login-screen">
    <form className="login-form" onSubmit={handleSubmit}>
    {(!errors.length > 0) ? <div className="login-title">Login</div> : 
        <div className="signup-title">Woops! <div className="error-list">
        {errors.map((error, idx) => <p key={idx}>{error}</p>)}
      </div> </div> }
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
      
      
    </form>
    </div>
    </div>
  );
}

export default LoginFormPage;