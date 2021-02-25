import React, {useState, useEffect, useContext} from 'react';
import {useDispatch} from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { MenuContext } from "react-flexible-sliding-menu";
import MenuProvider from "react-flexible-sliding-menu";
import Menu from './components/Menu';
import * as sessionActions from './store/session'
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupForm';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';

import './index.css'



function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch])


  return isLoaded && (
    <>
    <Navigation isLoaded={isLoaded} />
    {isLoaded && (
      <Switch>
        <Route path="/" exact>
          <LoginFormPage />
        </Route>
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>

      </Switch>
      
    )}
  </>
  );
}

export default App;