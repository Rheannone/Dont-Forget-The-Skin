import React, { useState, useEffect, useContext, useCallback } from 'react';
import {useHistory} from 'react-router-dom'
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector,  } from 'react-redux';
import { useMenu } from '../../context/MenuContext';
import { Redirect } from 'react-router-dom';
import Tooltip from 'react-tooltip-lite';
import { getList, destroyTask } from '../../store/dashboard';
import SliderMenu from '../SliderMenu';
import Webcam from 'react-webcam'
import './Dashboard.css'

function Dashboard() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { menu, setMenu } = useMenu()
  const sessionUser = useSelector(state => state.session.user);
  const taskItems = useSelector(state => state.dashboard.list)
  const dash = useSelector(state => state.dashboard)
  const webcamRef = React.useRef(null);
  const mediaRecorderRef = React.useRef(null);
  const [capturing, setCapturing] = React.useState(false);
  const [recordedChunks, setRecordedChunks] = React.useState([]);

  const handleStartCaptureClick = React.useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm"
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef]);

  const handleDataAvailable = React.useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStopCaptureClick = React.useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, webcamRef, setCapturing]);

  const handleDownload = React.useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm"
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = `${new Date()} - dont-forget-the-face.webm`;
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);


    const handleDelete = (e) => {
    dispatch(destroyTask(e.target.value))
  }


const length = taskItems ? taskItems.length : null

  useEffect(() => {
    if(!sessionUser?.id){
      history.push("/login")
    } else {

    dispatch(getList(sessionUser.id))};
  }, [dispatch, dash.length]);



  if (!sessionUser) return (
    <Redirect to="/login" />
  );

  const dashboardContainer = {
    left: (menu === 'open' ? "500px" : "0"),
  };

  const movedCamera = {
    visibility: (menu !== 'open' ? "visible" : "hidden"),
    transition: "5ms",



  }

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
    <div>
    
      <div className="list-container">
    
    {(getDay() === 0) ? <div><div><h1 className="today-title">Sunday's Routine</h1></div>{(taskItems?.length === 0 ? <p>start your skincare journey. click the '+' to add your first step</p> :<ul>
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

   {(getDay() === 1) ? <div><div><h1 className="today-title">Monday's Routine</h1></div>{(taskItems?.length === 0 ? <p>start your skincare journey. click the '+' to add your first step</p> :<ul>
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

   {(getDay() === 2) ? <div><div><h1 className="today-title">Tuesday's Routine</h1></div>{(taskItems?.length === 0 ? <p>start your skincare journey. click the '+' to add your first step</p> :<ul>
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
   {(getDay() === 3) ? <div><div><h1 className="today-title">Wednesday's Routine</h1></div>{(taskItems?.length === 0 ? <p>start your skincare journey. click the '+' to add your first step</p> :<ul>
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
   {(getDay() === 4) ? <div><div><h1 className="today-title">Thursday's Routine</h1></div>{(taskItems?.length === 0 ? <p>start your skincare journey. click the '+' to add your first step</p> :<ul>
     <h4 className="today-title">☀️☀️☀️</h4>
      {taskItems?.map(item =>(
        <li key={item.id} className="product-list">{(item.thur === true && item.morning === true) ?  
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
    <h4 className="today-title">🌜🌝🌛</h4>

      {taskItems?.map(item =>(
        <li key={item.id} className="product-list">{(item.thur === true && item.night === true) ?  
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
   {(getDay() === 5) ? <div><div><h1 className="today-title">Friday's Routine</h1></div>{(taskItems?.length === 0 ? <p>start your skincare journey. click the '+' to add your first step</p> :<ul>
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
   {(getDay() === 6) ? <div><div><h1 className="today-title">Saturday's Routine</h1></div>{(taskItems?.length === 0 ? <p>start your skincare journey. click the '+' to add your first step</p> :<ul>
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
   <div style={{color: 'pink'}}>



    </div></div>
    

    </div>
    </div>

    <div className="routine-container"
    style={movedCamera}>
      <div className="control-right">
        <div className="dash-greeting">
    Hello, {sessionUser?.username}.<br></br>
    </div>
    <div className="progress-cam">
      <h3>take a progress video</h3>
    <Webcam audio={false} ref={webcamRef}
    width="250"
    height="250"
    className="progress-cam"
     style={{
      width: '250px',
      borderRadius: '50%',
      objectFit: 'cover',
      borderStyle: 'dashed',
      borderColor: 'whitesmoke',
      alignSelf: 'baseline'}}
    />
      {capturing ? (
        <button className="cam-btn" onClick={handleStopCaptureClick}>Stop Capture</button>
      ) : (

        <button className="cam-btn" onClick={handleStartCaptureClick}>        <Tooltip tipContentClassName="react-tooltip-lite" direction="up" forceDirection content="Click here to start recording">
        Start Capture</Tooltip></button>
   
      )}
      {recordedChunks.length > 0 && (
        <button className="cam-btn" onClick={handleDownload}>        <Tooltip tipContentClassName="react-tooltip-lite" direction="up" forceDirection content="Click and drag the file into your browser to play. I'm working on saving the encoded BLOB file to the Postgres database.">
        Download</Tooltip></button>
      )}

    </div>
    </div>
    </div>
    {/* </div> */}
    
    </>
  );
  
}

export default Dashboard;