import React, { useState, useEffect, useContext } from 'react';
import {useHistory} from 'react-router-dom'
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { useMenu } from '../../context/MenuContext';
import { Redirect } from 'react-router-dom';
import { getList } from '../../store/dashboard';
import { createTask } from '../../store/dashboard'
import './SliderMenu.css'

function SliderMenu() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { menu, setMenu } = useMenu();
  const {listRefresh, setListRefresh} = useMenu();
  const WholeMenu = useMenu()
  const sessionUser = useSelector(state => state.session.user);
  const taskItems = useSelector(state => state.dashboard.list)
  const [singleStep, setSingleStep] = useState("")
  const [morning, setMorning] = useState(false)
  const [night, setNight] = useState(false)
  const [mon, setMon] = useState(false)
  const [tues, setTues] = useState(false)
  const [wed, setWed] = useState(false)
  const [thur, setThur] = useState(false)
  const [fri, setFri] = useState(false)
  const [sat, setSat] = useState(false)
  const [sun, setSun] = useState(false)
  const [tags, setTags] = useState("")
  const [lengthInMin, setLengthInMin] = useState(0)
  const [type, setType] = useState("")
  const [startDate, setStartDate] = useState(null)
  const [emptyDate, setEmptyDate] = useState(null)
  const [sizeInFlOz, setSizeInFlOz] = useState(0)
  const [activeIngredients, setActiveIngredients] = useState("")

  let updateStep = (e) => setSingleStep(e.target.value);
  const isMorning = (e) => setMorning(e.target.value);
  const isNight = (e) => setNight(e.target.value)
  const isMon = (e) => setMon(e.target.value)
  const isTues = (e) => setTues(e.target.value)
  const isWed = (e) => setWed(e.target.value)
  const isThur = (e) => setThur(e.target.value)
  const isFri = (e) => setFri(e.target.value)
  const isSat = (e) => setSat(e.target.value)
  const isSun = (e) => setSun(e.target.value)
  const isTags = (e) => setTags(e.target.value)
  const isTime = (e) => setLengthInMin(e.target.value)
  const isType = (e) => setType(e.target.value)
  const isStartDate = (e) => setStartDate(e.target.value)
  const isEmptyDate = (e) => setEmptyDate(e.target.value)
  const isSize = (e) => setSizeInFlOz(e.target.value)
  const isIngredients = (e) => setActiveIngredients(e.target.value)

  let handleSubmit = async (e) => {
      e.preventDefault();
      // setMenu('closed')
      setListRefresh("updated")
      setSingleStep("")
      setMorning(false);
      setNight(false);
      setMon(false);
      setTues(false);
      setWed(false);
      setThur(false);
      setFri(false);
      setSat(false);
      setSun(false);
      setTags("");
      setLengthInMin(0);
      setType("");
      setStartDate(null);
      setEmptyDate(null);
      setSizeInFlOz(0);
      setActiveIngredients(0);

    let payload = {
      userId: sessionUser.id,
      singleStep,
      tags,
      lengthInMin,
      type,
      startDate,
      emptyDate,
      sizeInFlOz,
      mon,
      tues,
      wed,
      thur,
      fri,
      sat,
      sun,
      night,
      morning,
      activeIngredients,
    };


     await dispatch(createTask(payload, sessionUser.id));
   
  }



  if (!sessionUser) return (
    <Redirect to="/login" />
  );

  const divStyle = {
    width: menu === 'open' ? "500px" : "0px",
  };

  const obtnStyle = {
    visibility: menu === 'open' ? "hidden" : "visible",
  };
  

  return (
    <>

    <div id="mySidebar" 
    className="sidebar"
    style={divStyle}
    
    >
        <a href="javascript:void(0)" className="closebtn" onClick={() => setMenu('closed')}>&times;</a>
        <div className="add-product-div">
          <div className="titles-conatiner">
        <h3 className="add-product-section-title">Add a Step</h3>
        <h3 className="add-product-section-title">Days</h3>
        </div>

        <div className="form-container">
        <form>
        
        <div className="form-start">
        <input type="hidden" name="_csrf" value="csrfToken" />

        

          <input type="text"
          className="quick-submit-input"
          placeholder="name of product"
          value={singleStep}
          onChange={updateStep} />

          <div className="button-container">
          <button type="button" className="slider-btn" onClick={handleSubmit}>Save</button>
          <a href="javascript:void(0)" className="slider-btn"  onClick={() => setMenu('closed')}>+</a>
          </div>
          </div>

        <div className="add-product-form-card">
          
          <input type="checkbox"
          id="morning"
          name="morning"
          value={morning}
          onChange={(e) => setMorning(!morning)}
          checked={morning === true ? true : false}
           />
           <label className="add-label" htmlFor="morning">morning</label >
           </div>

        <div className="add-product-form-card">
        


          <input type="checkbox" 
          id="evening" 
          name="evening" 
          value={night}
          onChange={(e) => setNight(!night)}
          checked={night === true ? true : false}
          />
          <label className="add-label"htmlFor="evening">evening</label >
          </div>

          
          <div className="add-product-div">

          <input type="checkbox"
          id="monday"
          name="monday"
          value={false}
          onChange={(e) => setMon(!mon)}
          checked={mon === true ? true : false}
          />
          <label className="add-label"  htmlFor="monday">monday</label >
          </div>
          {/* </div> */}


          {/* <div className="add-product-form-card"> */}
          <div className="add-product-div">

          <input type="checkbox" 
          id="tuesday" 
          name="tuesday" 
          value={tues} 
          onChange={(e) => setTues(!tues)}
          checked={tues === true ? true : false}
          />
          <label className="add-label" htmlFor="tuesday">tuesday</label >
          </div>
          {/* </div> */}

          <div className="add-product-form-card">
          <input type="checkbox" 
          id="wednesday" 
          name="wednesday" 
          value={wed}
          onChange={(e) => setWed(!wed)}
          checked={wed === true? true : false}
          />
          <label className="add-label"  htmlFor="wednesday">wednesday</label >
          </div>


          <div className="add-product-form-card">
          <input type="checkbox" 
          id="thursday" 
          name="thursday" 
          value={thur}
          onChange={(e) => setThur(!thur)}
          checked={thur === true ? true : false}
          />
          <label className="add-label"  htmlFor="thursday">thursday</label >
          </div>


          <div className="add-product-form-card">
          <input type="checkbox" 
          id="friday" 
          name="friday" 
          value={fri}
          onChange={(e) => setFri(!fri)}
          checked={fri === true ? true : false}
          />
          <label className="add-label"  htmlFor="friday">friday</label >
          </div>



          <div className="add-product-form-card">
          <input type="checkbox" 
          id="saturday" 
          name="saturday" 
          value={sat}
          onChange={(e) => setSat(!sat)}
          checked={sat === true ? true : false} 
          />
          <label className="add-label"  htmlFor="saturday">saturday</label >
          </div>



          <div className="add-product-form-card">
          <input type="checkbox"
          id="sunday"
          name="sunday"
          value={sun}
          onChange={(e) => setSun(!sun)}
          checked={sun === true ? true : false}
          />
          <label className="add-label"  htmlFor="sunday">sunday</label >
          </div>
        
        
        </form>
        </div>
        </div>
           
          </div>
          
        

  <div id="main-menu"
    style={{marginLeft: menu === "open" ? "0px" : "250px" }}
  >
      <button 
      className="openbtn" 
      id="openbtn" 
      style={obtnStyle}
      onClick={() => setMenu('open')}
      
      >&#9776; +</button>
</div>
</>
    )
};

export default SliderMenu;