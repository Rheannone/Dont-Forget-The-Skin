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
  const sessionUser = useSelector(state => state.session.user);
  const taskItems = useSelector(state => state.dashboard.list)



    const handleDelete = (e) => {
    dispatch(destroyTask(e.target.value))
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

  let getDay = () => {
    let d = new Date()
    let n = d.getDay()
    return n;
  }

  let item;

  return (
    <>

    
    <div className="dashboard-container"
    style={dashboardContainer}>
    <SliderMenu />
    <div className="dash-greeting">
    Hello, {sessionUser.username.toUpperCase()}
    </div>
    <div className="routine-container">
   
    {(getDay() === 0) ? <div><div><h1>Today's Routine</h1></div>{(taskItems?.length === 0 ? <p>start your skincare journey. click the '+' to add your first step</p> :<ul>
    <h4>Morning</h4>
      {taskItems?.map(item =>(
        <li key={item.id} className="product-list">{(item.sun === true && item.morning === true) ?  
        <div>
          <div>
          {(item.morning === true) ? <div><h3>{item.singleStep}</h3>
          <h5>{item.type}</h5></div>  : null}
        
        <button className="delete-btn" value={item.id} onClick={handleDelete}>x</button>
            </div>
        </div> 
        
        : null}
        </li>
                              ) 
                      )
      }
      
    </ul> 
    )
  } 
  <ul>
  <h4>Evening</h4>
      {taskItems?.map(item =>(
        <li key={item.id} className="product-list">{(item.sun === true && item.night === true) ?  
        <div>
          <div>

          {(item.night === true) ? <div><h3>{item.singleStep}</h3>
          <h5>{item.type}</h5></div>  : null}
        
        <button className="delete-btn" value={item.id} onClick={handleDelete}>x</button>
            </div>
        </div> 
        
        : null}
        </li>
                              ) 
                      )
      }
      
    </ul>
  
  
  
   </div> : null}

   {(getDay() === 1) ? <div><div><h1>Monday's Routine</h1></div>{(taskItems?.length === 0 ? <p>start your skincare journey. click the '+' to add your first step</p> :<ul>
    <h4>Morning</h4>
      {taskItems?.map(item =>(
        <li key={item.id} className="product-list">{(item.mon === true && item.morning === true) ?  
        <div>
          <div>
          
          {(item.morning === true) ? <div><h3>{item.singleStep}</h3>
          <h5>{item.type}</h5></div>  : null}
        
        <button className="delete-btn" value={item.id} onClick={handleDelete}>x</button>
            </div>
        </div> 
        
        : null}
        </li>
                              ) 
                      )
      }
      
    </ul> 
    )
  } 
  <ul>
      {taskItems?.map(item =>(
        <li key={item.id} className="product-list">{(item.mon === true && item.night === true) ?  
        <div>
          <div>
          <h4>Evening</h4>
          {(item.night === true) ? <div><h3>{item.singleStep}</h3>
          <h5>{item.type}</h5></div>  : null}
        
        <button className="delete-btn" value={item.id} onClick={handleDelete}>x</button>
            </div>
        </div> 
        
        : null}
        </li>
                              ) 
                      )
      }
      
    </ul>
  
  
  
   </div> : null}

   {(getDay() === 2) ? <div><div><h1>Tuesday's Routine</h1></div>{(taskItems?.length === 0 ? <p>start your skincare journey. click the '+' to add your first step</p> :<ul>
      {taskItems?.map(item =>(
        <li key={item.id} className="product-list">{(item.tues === true && item.morning === true) ?  
        <div>
          <div>
          <h4>Morning</h4>
          {(item.morning === true) ? <div><h3>{item.singleStep}</h3>
          <h5>{item.type}</h5></div>  : null}
        
        <button className="delete-btn" value={item.id} onClick={handleDelete}>x</button>
            </div>
        </div> 
        
        : null}
        </li>
                              ) 
                      )
      }
      
    </ul> 
    )
  } 
  <ul>
      {taskItems?.map(item =>(
        <li key={item.id} className="product-list">{(item.tues === true && item.night === true) ?  
        <div>
          <div>
          <h4>Evening</h4>
          {(item.night === true) ? <div><h3>{item.singleStep}</h3>
          <h5>{item.type}</h5></div>  : null}
        
        <button className="delete-btn" value={item.id} onClick={handleDelete}>x</button>
            </div>
        </div> 
        
        : null}
        </li>
                              ) 
                      )
      }
      
    </ul>
  
  
  
   </div> : null}
   {(getDay() === 3) ? <div><div><h1>Wednesday's Routine</h1></div>{(taskItems?.length === 0 ? <p>start your skincare journey. click the '+' to add your first step</p> :<ul>
      {taskItems?.map(item =>(
        <li key={item.id} className="product-list">{(item.wed === true && item.morning === true) ?  
        <div>
          <div>
          <h4>Morning</h4>
          {(item.morning === true) ? <div><h3>{item.singleStep}</h3>
          <h5>{item.type}</h5></div>  : null}
        
        <button className="delete-btn" value={item.id} onClick={handleDelete}>x</button>
            </div>
        </div> 
        
        : null}
        </li>
                              ) 
                      )
      }
      
    </ul> 
    )
  } 
  <ul>
      {taskItems?.map(item =>(
        <li key={item.id} className="product-list">{(item.wed === true && item.night === true) ?  
        <div>
          <div>
          <h4>Evening</h4>
          {(item.night === true) ? <div><h3>{item.singleStep}</h3>
          <h5>{item.type}</h5></div>  : null}
        
        <button className="delete-btn" value={item.id} onClick={handleDelete}>x</button>
            </div>
        </div> 
        
        : null}
        </li>
                              ) 
                      )
      }
      
    </ul>
  
  
  
   </div> : null}
   {(getDay() === 4) ? <div><div><h1>Thursday's Routine</h1></div>{(taskItems?.length === 0 ? <p>start your skincare journey. click the '+' to add your first step</p> :<ul>
      {taskItems?.map(item =>(
        <li key={item.id} className="product-list">{(item.thur === true && item.morning === true) ?  
        <div>
          <div>
          <h4>Morning</h4>
          {(item.morning === true) ? <div><h3>{item.singleStep}</h3>
          <h5>{item.type}</h5></div>  : null}
        
        <button className="delete-btn" value={item.id} onClick={handleDelete}>x</button>
            </div>
        </div> 
        
        : null}
        </li>
                              ) 
                      )
      }
      
    </ul> 
    )
  } 
  <ul>
      {taskItems?.map(item =>(
        <li key={item.id} className="product-list">{(item.thur === true && item.night === true) ?  
        <div>
          <div>
          <h4>Evening</h4>
          {(item.night === true) ? <div><h3>{item.singleStep}</h3>
          <h5>{item.type}</h5></div>  : null}
        
        <button className="delete-btn" value={item.id} onClick={handleDelete}>x</button>
            </div>
        </div> 
        
        : null}
        </li>
                              ) 
                      )
      }
      
    </ul>
  
  
  
   </div> : null}
   {(getDay() === 5) ? <div><div><h1>Friday's Routine</h1></div>{(taskItems?.length === 0 ? <p>start your skincare journey. click the '+' to add your first step</p> :<ul>
      {taskItems?.map(item =>(
        <li key={item.id} className="product-list">{(item.fri === true && item.morning === true) ?  
        <div>
          <div>
          <h4>Morning</h4>
          {(item.morning === true) ? <div><h3>{item.singleStep}</h3>
          <h5>{item.type}</h5></div>  : null}
        
        <button className="delete-btn" value={item.id} onClick={handleDelete}>x</button>
            </div>
        </div> 
        
        : null}
        </li>
                              ) 
                      )
      }
      
    </ul> 
    )
  } 
  <ul>
      {taskItems?.map(item =>(
        <li key={item.id} className="product-list">{(item.fri === true && item.night === true) ?  
        <div>
          <div>
          <h4>Evening</h4>
          {(item.night === true) ? <div><h3>{item.singleStep}</h3>
          <h5>{item.type}</h5></div>  : null}
        
        <button className="delete-btn" value={item.id} onClick={handleDelete}>x</button>
            </div>
        </div> 
        
        : null}
        </li>
                              ) 
                      )
      }
      
    </ul>
  
  
  
   </div> : null}
   {(getDay() === 6) ? <div><div><h1>Saturday's Routine</h1></div>{(taskItems?.length === 0 ? <p>start your skincare journey. click the '+' to add your first step</p> :<ul>
      {taskItems?.map(item =>(
        <li key={item.id} className="product-list">{(item.sat === true && item.morning === true) ?  
        <div>
          <div>
          <h4>Morning</h4>
          {(item.morning === true) ? <div><h3>{item.singleStep}</h3>
          <h5>{item.type}</h5></div>  : null}
        
        <button className="delete-btn" value={item.id} onClick={handleDelete}>x</button>
            </div>
        </div> 
        
        : null}
        </li>
                              ) 
                      )
      }
      
    </ul> 
    )
  } 
  <ul>
      {taskItems?.map(item =>(
        <li key={item.id} className="product-list">{(item.sat === true && item.night === true) ?  
        <div>
          <div>
          <h4>Evening</h4>
          {(item.night === true) ? <div><h3>{item.singleStep}</h3>
          <h5>{item.type}</h5></div>  : null}
        
        <button className="delete-btn" value={item.id} onClick={handleDelete}>x</button>
            </div>
        </div> 
        
        : null}
        </li>
                              ) 
                      )
      }
      
    </ul>
   </div> : null}

    </div>
    <div className="stats-container">


    </div>
    </div>
    </>
  );
  
}

export default Dashboard;