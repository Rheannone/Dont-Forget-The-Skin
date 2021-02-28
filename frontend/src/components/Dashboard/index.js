import React, { useState, useEffect, useContext } from 'react';
import {useHistory} from 'react-router-dom'
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { useMenu } from '../../context/MenuContext';
import { Redirect } from 'react-router-dom';
import { getList, destroyTask } from '../../store/dashboard';
import SliderMenu from '../SliderMenu';
import './Dashboard.css'

function Dashboard() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { menu, setMenu } = useMenu()
  // const {listRefresh, setListRefresh} = useMenu()
  const sessionUser = useSelector(state => state.session.user);
  const taskItems = useSelector(state => state.dashboard.list)



    const handleDelete = (e) => {
    dispatch(destroyTask(e.target.value))
    // dispatch(getList(sessionUser.id)) 
  }


const length = taskItems?.length

  useEffect(() => {
    if(!sessionUser.id){
      history.push("/login")
    } else {

    dispatch(getList(sessionUser.id))};
  }, [dispatch, length]);



  if (!sessionUser) return (
    <Redirect to="/login" />
  );

  const dashboardContainer = {
    left: (menu === 'open' ? "500px" : "0"),
  };

  return (
    <>

    
    <div className="dashboard-container"
    style={dashboardContainer}>
    <SliderMenu />
    <div className="routine-container">
    Hello, {sessionUser.username}
    <h1>List Items</h1>

    {(taskItems?.length === 0 ? <p>start your skincare journey. click the '+' to add your first step</p> :<ul>
      {taskItems?.map(item =>(
        <li key={item.id}><p>{item.singleStep}</p><p>{item.tags}</p><button value={item.id} onClick={handleDelete}>x</button><button>edit</button>
        {(item.lengthInMin > 0) ? <h4>{item.lengthInMin} min</h4> : null}</li>
        
        
      ) )}
      
    </ul> )}

    </div>

    <p>Monday Routine</p>
        
    
    </div>
    </>
  );
}

export default Dashboard;