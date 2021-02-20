import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import * as sessionActions from '../../store/session'
import LoginFormPage from '../LandingPage';
import SignupFormPage from '../SignupForm';
import Navigation from '../Navigation';




function LandingPage() {
//   const dispatch = useDispatch();
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
//   }, [dispatch])


  return (
    <>
        <div>
        hi
        </div>
        <div>
        
        </div>
   </>
  );
}

export default LandingPage;