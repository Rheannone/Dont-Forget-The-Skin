import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Webcam from "react-webcam";
import './Dashboard.css'

function Dashboard() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  return (
    <>
    <div className="dashboard-container">
    <h1>List Items</h1>
    <p>testing</p>
    </div>
    </>
  );
}

export default Dashboard;