import React, { useState, useEffect } from "react";
import Dropdown from 'rc-dropdown';
import 'rc-dropdown/assets/index.css';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
  function onSelect({ key }) {
    console.log(`${key} selected`);
  }
  
  function onVisibleChange(visible) {
    console.log(visible);
  }

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };
  
  const menu = (
    <Menu onSelect={onSelect}>
      <MenuItem disabled>disabled</MenuItem>
      <MenuItem key="1">one</MenuItem>
      <Divider />
      <MenuItem key="2">two</MenuItem>
      <MenuItem key="3"><button onClick={logout}>Log Out</button></MenuItem>
    </Menu>
  );

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);



  return (
    
    <div className="navbar-body">

      <Dropdown
        trigger={['click']}
        overlay={menu}
        onVisibleChange={onVisibleChange}>
        <button className="account-btn" style={{ width: 100 }}><i className="fas fa-cog"></i></button>
      </Dropdown>
    {showMenu && (
        <ul className="profile-dropdown">
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </div>
    
    
  );
}

export default ProfileButton;