import React, { useState, useEffect } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getList } from '../../store/dashboard';

import Webcam from "react-webcam";
import './Dashboard.css'

function Dashboard() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const taskItems = useSelector(state => state.session.list)
  // const taskItemsArray = Object.values(taskItems)
  useEffect(() => {
    dispatch(getList(sessionUser.id));
  }, [dispatch, sessionUser.id]);

  if (!sessionUser) return (
    <Redirect to="/login" />
  );

  return (
    <>
    <div className="dashboard-container">
    Hello, {sessionUser.username}
    <h1>List Items</h1>
    {console.log("FROM RETURN", taskItems)}
    <ul>
      {}
    </ul>
    </div>
    </>
  );
}

export default Dashboard;