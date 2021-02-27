import React, { useState, useEffect, useContext } from 'react';
import {useHistory} from 'react-router-dom'
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { useMenu } from '../../context/MenuContext';
import {list, useList} from '../../context/ListContext';
import { Redirect } from 'react-router-dom';
import { getList, destroyTask } from '../../store/dashboard';
import SliderMenu from '../SliderMenu';
import './Dashboard.css'

function Dashboard() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { menuState, setMenu } = useMenu()
  const {list, setList } = useList()
  const sessionUser = useSelector(state => state.session.user);
  const taskItems = useSelector(state => state.dashboard.list)
  const taskItemsArray = Object.values(taskItems);


    console.log("from component task items", taskItems)
    const handleDelete = (e) => {
    dispatch(destroyTask(e.target.value))
    // dispatch(getList(sessionUser.id)) 
  }



const length = taskItemsArray?.length
  useEffect(() => {
    if(!sessionUser.id){
      history.push("/login")
    } else {

    dispatch(getList(sessionUser.id))};
  }, [dispatch, length]);



  if (!sessionUser) return (
    <Redirect to="/login" />
  );

  return (
    <>

    
    <div className="dashboard-container">
    <SliderMenu />
    Hello, {sessionUser.username}
    <h1>List Items</h1>

    {(taskItemsArray.length === 0 ? <p>start your skincare journey. click the '+' to add your first step</p> :<ul>
      {taskItemsArray.map(item =>(
        <li key={item.id}><p>{item.singleStep}</p><p>{item.tags}</p><button value={item.id} onClick={handleDelete}>x</button><button>edit</button>
        {(item.lengthInMin > 0) ? <h4>{item.lengthInMin} min</h4> : null}</li>
        
        
      ) )}
    </ul> )}
    
    </div>
    </>
  );
}

export default Dashboard;