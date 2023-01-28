import React from "react"
import './nav.css'
import Hamburger from 'hamburger-react'

import {Link } from "react-router-dom";



function MyNav() {
    return(
        <nav className="nav">
            <span className="logo">
                TB
            </span>
            <div className="mobile-nav-toggle">
                <Hamburger label="Show menu" rounded duration={0.8} onToggle={toggled =>{
                    const navListe = document.querySelector(".nav__liste");
                    if (toggled){
                        navListe.setAttribute('data-visible',true);
                    }
                    else{
                        navListe.setAttribute('data-visible',false);
                    }
                    
                }}/>
            </div>
            
            <ul id="nav__liste" className="nav__liste" data-visible="false">    
                <li>
                    <Link to={`/`} className="text-light nav__home">Home</Link>
                </li>  
                <li>
                    <Link to={`/about`} className="text-primary">About Me</Link>
                </li>  
                {/* <li>
                    <Link to={`/project`} className="text-primary">Project</Link>
                </li>   */}
                <li>
                    <Link to={`/contact`} className="text-primary">Contact</Link>
                </li>    
            </ul>
        </nav>
    )
    
}
export default MyNav