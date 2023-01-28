import React from "react";
import Site1 from "../../../assets/Chalet and Caviar.PNG"
import Site2 from "../../../assets/Festival Film.PNG"
import "./project.css"

function Project_ex() {
    return(
        <div className="container" id="project__section">
            <h2 className="title">Some of my project</h2>
            <div className="row row__projectex">                
                <div className="col-md-8 col-sm-12 ">
                    <img className="img__projectex" src={Site1} alt="Chalet and Caviar Website"></img>
                </div>
                <div className="col-md-4 col-sm-12 col__projectex">
                    <h3 className="h3__projectex">Real Estate Agency for Chalet. <br/>Made in WordPress.</h3>
                    <a className="btn-secondary flex align-items-center justify-center" href="https://dev-chalets-and-caviar-321.pantheonsite.io/">
                        More About...
                    </a>
                </div>

                <div className="col_reverse1__projectex ">
                    <img className="img__projectex" src={Site2} alt="Festival Boston Website"></img>    
                </div>
                <div className="col_reverse2__projectex col__projectex">
                    <h3 className="h3__projectex">
                        Festival Film in Boston.<br/>Made in HTML5 and CSS3(Bootstrap).
                    </h3>
                    <a className="btn-primary flex align-items-center justify-center" href="https://github.com/T-berton/Project-3---Website-Festival-Film">
                        More About...
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project_ex