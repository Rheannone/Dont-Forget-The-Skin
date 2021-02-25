import React, { useState, useEffect, useContext } from 'react';
import {useHistory} from 'react-router-dom'
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { useMenu } from '../../context/MenuContext';
import { Redirect } from 'react-router-dom';
import { getList } from '../../store/dashboard';
import './SliderMenu.css'

function SliderMenu() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { menu, setMenu } = useMenu()
  const WholeMenu = useMenu()
  const sessionUser = useSelector(state => state.session.user);
  const taskItems = useSelector(state => state.dashboard.list)
  const taskItemsArray = Object.values(taskItems)
console.log("WHOLE MENU", WholeMenu)
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

  const divStyle = {
    width: menu === 'open' ? "250px" : "0px",
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
        <h3 className="add-product-section-title">Add a Step</h3>
        <form>
        <div className="add-product-form-card">
          <input type="text" placeholder="name of product"></input>
          </div>
          <div className="add-product-form-card">
          <input type="checkbox" id="morning" name="morning" value="morning"></input>
          <label for="morning">morning</label>
          </div>
          <div className="add-product-form-card">
          <input type="checkbox" id="evening" name="evening" value="evening"></input>
          <label for="evening">evening</label>
          </div>
          <p className="add-product-section-title">Which days?</p>
          <div className="add-product-form-card">
          <input type="checkbox" id="monday" name="monday" value="monday"></input>
          <label for="monday">monday</label>
          </div>
          <div className="add-product-form-card">
          <input type="checkbox" id="tuesday" name="tuesday" value="tuesday"></input>
          <label for="tuesday">tuesday</label>
          </div>
          <div className="add-product-form-card">
          <input type="checkbox" id="wednesday" name="wednesday" value="wednesday"></input>
          <label for="wednesday">wednesday</label>
          </div>
          <div className="add-product-form-card">
          <input type="checkbox" id="thursday" name="thursday" value="thursday"></input>
          <label for="thursday">thursday</label>
          </div>
          <div className="add-product-form-card">
          <input type="checkbox" id="friday" name="friday" value="friday"></input>
          <label for="friday">friday</label>
          </div>
          <div className="add-product-form-card">
          <input type="checkbox" id="saturday" name="saturday" value="saturday"></input>
          <label for="saturday">saturday</label>
          </div>
          <div className="add-product-form-card">
          <input type="checkbox" id="sunday" name="sunday" value="sunday"></input>
          <label for="sunday">sunday</label>
          </div>
        </form>
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