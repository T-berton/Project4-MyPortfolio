import React from "react";
import "./footer.css";

import { FaGithub,FaLinkedin } from "react-icons/fa";

function Footer() {
    return(
    <div className="footer__container">
        <hr/>
        <footer className="footer">
            <div className="footer__description"> 
                Designed and Developped by Thomas Berton <br/> <span className="strong">Copyright ©</span> 
            </div>
            <div className="footer__social">
                <a href=""><FaGithub/></a>
                <a href=""><FaLinkedin/></a>
            </div>
        </footer>
    </div>
    )
}

export default Footer