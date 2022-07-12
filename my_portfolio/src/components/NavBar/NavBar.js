import React, {useState} from "react";
import {Link} from 'react-router-dom'
function NavBar(){
    return (
        <>
        <nav className="navbar">
          <div className="App">
            <Link to="/" className="">Hompage Logo</Link>
          </div>
        </nav>
      </>
    )
}

export default NavBar