import React, { useState, useEffect, useContext } from 'react';
import { MenuContext } from "react-flexible-sliding-menu";

import * as sessionActions from '../../store/session';
import * as dashboardActions from '../../store/dashboard'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getList } from '../../store/dashboard';

import Webcam from "react-webcam";
import './Dashboard.css'

function Dashboard() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const { toggleMenu } = useContext(MenuContext);
  const taskItems = useSelector(state => state.dashboard.list)
  const taskItemsArray = Object.values(taskItems)






  useEffect(() => {
    if(!sessionUser.id){
      <Redirect to="/login" />
    } else {
    dispatch(getList(sessionUser.id))};
  }, [dispatch, sessionUser.id]);

  // if dispatch is in the useEffect dependancy, the page errors
  // that there is no session id when rendering the login component. 



  if (!sessionUser) return (
    <Redirect to="/login" />
  );

  return (
    <>
    <div className="dashboard-container">
    Hello, {sessionUser.username}
    <h1>List Items</h1>
    <button onClick={toggleMenu} className="primary-button">
        Toggle Menu
      </button>
    {console.log("FROM RETURN.... ", taskItemsArray)}
    <ul>
      {taskItemsArray.map(item =>(
        <li key={item.id}><h3>{item.singleStep}</h3><p>{item.tags}</p></li>
      ) )}
    </ul>
    </div>
    </>
  );
}

export default Dashboard;