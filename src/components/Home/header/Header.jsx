import React from "react"
import './header.css'
import Profile from '../../../assets/header.svg'
import { Link } from "react-router-dom"


function Header() {
    return (
        <header className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 col-sm-12">
                        <div className="header__txt">
                            <h1 className="text-primary header__h1">Hi! I'm Thomas <strong class='text-secondary'>FullStack Developer</strong></h1>
                            <h2 className="text-primary header__h2">
                                JavaScript - Ruby
                            </h2>
                        </div>
                        <div className="header__btn">
                            <Link to={`/about`} className="btn-secondary flex align-items-center justify-center"> More About me </Link>
                            <Link to={`/#project__sections`} className="btn-primary flex align-items-center justify-center"> My Projects </Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <img className="header__img" src={Profile} alt="Computer image"></img>
                    </div>
                </div>
        </header>        
    )
    
}

export default Header