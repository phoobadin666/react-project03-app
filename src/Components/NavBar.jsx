import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'


export default function NavBar() {
  return (
   <>
     <div style={{textAlign:"center"}}>
        <h4>
            <Link to="/Home"style={{textDecoration:"none", marginRight:"10px",marginLeft:"10px"}}>Home</Link>|
            <Link to="/about"style={{textDecoration:"none", marginRight:"10px",marginLeft:"10px"}}>About</Link>|
            <Link to="/register"style={{textDecoration:"none", marginRight:"10px",marginLeft:"10px"}}>Register</Link>|
            <Link to="/login"style={{textDecoration:"none", marginRight:"10px",marginLeft:"10px"}}>Login</Link>|
            <Link to="/contact"style={{textDecoration:"none", marginRight:"10px",marginLeft:"10px"}}>Contact</Link>|
        </h4>
        <Header/>
        <hr/>
     </div>
   </>
  )
}