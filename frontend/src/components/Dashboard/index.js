import React, { useState, useEffect, useContext } from 'react';
import {useHistory} from 'react-router-dom'
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { useMenu } from '../../context/MenuContext';
import { Redirect } from 'react-router-dom';
import { getList } from '../../store/dashboard';
import SliderMenu from '../SliderMenu';
import './Dashboard.css'

function Dashboard() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { menuState, setMenu } = useMenu()
  const sessionUser = useSelector(state => state.session.user);
  const taskItems = useSelector(state => state.dashboard.list)
  const taskItemsArray = Object.values(taskItems)

  //convert these to a useState for Open and Close ---> Greenhouse project

  // const openNav = () => {
  //   document.getElementById("mySidebar").style.width = "250px";
  //   document.getElementById("main").style.marginLeft = "250px";
  //   document.getElementById("openbtn").style.visibility = "hidden";

  // }
  
  // const closeNav = () => {
  //   document.getElementById("mySidebar").style.width = "0";
  //   document.getElementById("main").style.marginLeft = "0";
  //   document.getElementById("openbtn").style.visibility = "visible";

  // }
  useEffect(() => {
    console.log("FROM USE EFFECT", sessionUser)
    if(!sessionUser.id){
      history.push("/login")
    } else {
    dispatch(getList(sessionUser.id))};
  }, [dispatch]);



  if (!sessionUser) return (
    <Redirect to="/login" />
  );

  return (
    <>
    
    <div className="dashboard-container">
    <SliderMenu />
    Hello, {sessionUser.username}
    <h1>List Items</h1>

    {console.log("FROM RETURN.... ", taskItemsArray)}
    {(taskItemsArray.length === 0 ? <p>start your skincare journey. click the '+' to add your first step</p> :<ul>
      {taskItemsArray.map(item =>(
        <li key={item.id}><p>{item.singleStep}</p><p>{item.tags}</p>
        {(item.lengthInMin !== null) ? <h4>{item.lengthInMin} min</h4> : <p>some other time</p>}</li>
      ) )}
    </ul> )}
    
    </div>
    </>
  );
}

export default Dashboard;