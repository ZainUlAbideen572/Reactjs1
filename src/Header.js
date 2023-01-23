import React from "react"
import { Link } from "react-router-dom";
const Header=()=>{
    return <nav class="navbar navbar-expand-lg bg-light">
       <div className="container">
    <Link to="/" className="navbar-brand">FSA</Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"><Link  className="nav-link" to="/Home">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/About">About</Link></li>
         </ul>
         </div>
    </nav> 
}
export default Header;