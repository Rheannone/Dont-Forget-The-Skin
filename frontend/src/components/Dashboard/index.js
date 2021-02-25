import React, { useState, useEffect, useContext } from 'react';
import {useHistory} from 'react-router-dom'
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getList } from '../../store/dashboard';
import './Dashboard.css'

function Dashboard() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const taskItems = useSelector(state => state.dashboard.list)
  const taskItemsArray = Object.values(taskItems)

  //convert these to a useState for Open and Close ---> Greenhouse project

  const openNav = () => {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("openbtn").style.visibility = "hidden";

  }
  
  const closeNav = () => {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("openbtn").style.visibility = "visible";

  }

  useEffect(() => {
    console.log("FROM USE EFFECT", sessionUser)
    if(!sessionUser.id){
      history.push("/login")
    } else {
    dispatch(getList(sessionUser.id))};
  }, [dispatch, sessionUser.id]);



  if (!sessionUser) return (
    <Redirect to="/login" />
  );

  return (
    <>
    <div className="dashboard-container">
    <div id="mySidebar" className="sidebar">
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
        <h3>Add a Step</h3>
        <form>
          <input type="text" placeholder="name of product"></input>
          <input type="checkbox" id="morning" name="morning" value="morning"></input>
          <label for="morning">a.m.?</label>
          <input type="checkbox" id="evening" name="evening" value="evening"></input>
          <label for="evening">p.m.?</label>
          <p>Which days?</p>
          <input type="checkbox" id="monday" name="monday" value="monday"></input>
          <label for="monday">monday</label>
          <input type="checkbox" id="tuesday" name="tuesday" value="tuesday"></input>
          <label for="tuesday">tuesday</label>
          <input type="checkbox" id="wednesday" name="wednesday" value="wednesday"></input>
          <label for="wednesday">wednesday</label>
          <input type="checkbox" id="thursday" name="thursday" value="thursday"></input>
          <label for="thursday">thursday</label>
          <input type="checkbox" id="friday" name="friday" value="friday"></input>
          <label for="friday">friday</label>
          <input type="checkbox" id="saturday" name="saturday" value="saturday"></input>
          <label for="saturday">saturday</label>
          <input type="checkbox" id="sunday" name="sunday" value="sunday"></input>
          <label for="sunday">sunday</label>
        </form>
    </div>

  <div id="main">
      <button className="openbtn" id="openbtn" onClick={openNav}>&#9776; +</button>
</div>
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