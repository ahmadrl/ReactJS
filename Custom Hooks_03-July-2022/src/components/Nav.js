import { Link, NavLink} from "react-router-dom";

function Nav() {
  const { user, message, isLoggedIn } = useContext(userContext);
    return (
      
<div className="container-fluid">
<nav class="navbar navbar-expand-lg navbar-light bg-light">

  <div style={{display:'inline'}} class="row collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item ">

        <NavLink   style={({ isActive }) => ({
    color : '#545e6f',
    background:'#f0f0f0',
  })} class="nav-link" to="">Home </NavLink>
      </li> &#160;&#160;

      <li class="nav-item">
        <NavLink   style={({ isActive }) => ({
    color:  '#545e6f',
    background : '#f0f0f0',
  })} class="nav-link" to="/Second">Second Login</NavLink>
      </li>&#160;&#160;   
      
        <li class="nav-item">
        <NavLink   style={({ isActive }) => ({
    color:  '#545e6f',
    background : '#f0f0f0',
  })} 
  class="nav-link" to="">Log Out</NavLink>
      </li>
   
    
 
    </ul>
  
  </div>
</nav>
 </div>
    );
}
export default Nav;

import "../App.css";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import { userContext } from "./userContext";
import { useContext } from "react";
import useAuth from "./useAuth";
