import { Link, NavLink} from "react-router-dom";

function Header() {
    return (
<div className="container-fluid">
<nav class="navbar navbar-expand-lg navbar-light bg-light">

  <div style={{display:'inline'}} class="row collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item ">
        <NavLink   style={({ isActive }) => ({
    color: isActive ? '#fff' : '#545e6f',
    background: isActive ? '#7600dc' : '#f0f0f0',
  })} class="nav-link" to="/">Home </NavLink>
      </li> &#160;&#160;

      <li class="nav-item">
        <NavLink   style={({ isActive }) => ({
    color: isActive ? '#fff' : '#545e6f',
    background: isActive ? '#7600dc' : '#f0f0f0',
  })} class="nav-link" to="/About">About</NavLink>
      </li>&#160;&#160;   
      
        <li class="nav-item">
        <NavLink   style={({ isActive }) => ({
    color: isActive ? '#fff' : '#545e6f',
    background: isActive ? '#7600dc' : '#f0f0f0',
  })} class="nav-link" to="/Contact">Contact</NavLink>
      </li>
   
    
 
    </ul>
  
  </div>
</nav>
 </div>
    );
}
export default Header;
