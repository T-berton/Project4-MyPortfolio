import React from "react";

import "./skill.css"
import { Icon } from "@iconify/react";

function Skill() {
    return(
        <div className="skill__container">
                <h2 className="title"> My Skills </h2>
                <div className="row row__skill">
                    <div className="col-lg-3 col-md-4 flex card col-sm-6">
                        <Icon icon="cib:cplusplus" />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 flex card">
                        <Icon icon="mdi:language-javascript"/>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 flex card">
                        <Icon icon="mdi:language-html5" /> 
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 flex card">
                        <Icon icon="ci:css3" />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 flex card">
                        <Icon icon="simple-icons:rubyonrails" />   
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 flex card">
                        <Icon icon="mdi:language-rust" />
                    </div>    
                    <div className="col-lg-3 col-md-4 col-sm-6 flex card">
                        <Icon icon="mdi:nodejs" />
                    </div>                   
                    <div className="col-lg-3 col-md-4 col-sm-6 flex card">
                        <Icon icon="simple-icons:mysql" />
                    </div>
            </div>
        </div>
    )
}

export default Skill