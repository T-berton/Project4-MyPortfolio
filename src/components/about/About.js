import React, { useState } from "react";
import MyNav from "../nav/Nav";
import Footer from "../footer/Footer";
import './about.css';
import img_intro from "../../assets/Programmer-rafiki.svg";
import Qualification from "./Qualification";
import { Icon } from '@iconify/react';


function About() {
     const [grid,openGrid] = useState(false);

     return (
          <>
               <MyNav/>
                    <div class="about__container">
                         <div className="about-p"> 
                              <h2 className="about-title text-primary">Who Am I </h2>                                     
                                   <p>
                                        My name is Thomas Berton, and I am currently a <strong className="text-secondary">Software Developer</strong> in JavaScript/Ruby.  I have a <strong className="text-primary">Master degree in Engineering</strong> from INSA Toulouse in France with a specialization in electronics and embedded systems.
                                   </p>
                                   <p>
                                        I also have a <strong className="text-secondary"> professional certification</strong> "Développeur concepteur logiciel" (Software Developer) from OpenClassrooms. This certification is a <strong className="text-primary">Bachelor's-Level diploma</strong> (European Level 6) on the EQF (European Qualification Framework).
                                   </p> 
                         </div>
                         <div >
                              <img src={img_intro} className="about__image"></img>
                         </div>
                    </div>
                    <div className="container">
                         <h2 className="title skills_title "> My Technical Level</h2>
                         <div className="about-skills">
                              <div className="skills__content">
                                   <div className="skills__header" onClick={()=>
                                   {
                                        const myGrid = document.getElementById("grid1")

                                        if (grid==true){
                                             myGrid.setAttribute('data-visible',false);
                                             openGrid(false);
                                        }
                                        else{
                                             myGrid.setAttribute('data-visible',true);
                                             openGrid(true);
                                        }
                                   }}>
                                             <div className="skills_title">
                                                  <Icon icon="ph:brackets-curly-bold" className="skills__icon" />
                                                  <h3>Frontend Developer</h3>
                                             </div>
                                             <Icon icon="uil:angle-double-down" className="skills__arrow" />
                                        </div>
                                        <div className="skills__grid" id="grid1" data-visible="false">
                                             <div className="skills__data">                                       
                                                  <div className="skills__name">
                                                       HTML5
                                                  </div>
                                                  <div className="skills__bar skills__html">
                                                  </div>
                                             </div>
                                             <div className="skills__data">                                       
                                                  <div className="skills__name">
                                                       CSS3
                                                  </div>
                                                  <div className="skills__bar skills__css"></div>
                                             </div>
                                             <div className="skills__data">                                       
                                                  <div className="skills__name">
                                                       JavaScript
                                                  </div>
                                                  <div className="skills__bar skills__javascript"></div>
                                             </div>
                                             <div className="skills__data">                                       
                                                  <div className="skills__name">
                                                       React
                                                  </div>
                                                  <div className="skills__bar skills__react"></div>
                                             </div>
                                        </div>
                                   </div>
                              <div className="skills__content">
                                   <div className="skills__header" onClick={()=>
                                   {
                                        const myGrid = document.getElementById("grid2");

                                        if (grid==true){
                                             myGrid.setAttribute('data-visible',false);
                                             openGrid(false);
                                        }
                                        else{
                                             myGrid.setAttribute('data-visible',true);
                                             openGrid(true);
                                        }
                                   }}>
                                        <div className="skills_title">
                                             <Icon icon="uil:server-network-alt" className="skills__icon" id="backend" />
                                             <h3>Backend Developer</h3>
                                        </div>
                                        <Icon icon="uil:angle-double-down" className="skills__arrow" id="backend" />
                                   </div>
                                   <div className="skills__grid" id="grid2" data-visible="false">
                                        <div className="skills__data">                                       
                                             <div className="skills__name">
                                                  Ruby (onRails)
                                             </div>
                                             <div className="skills__bar skills__ruby"></div>
                                        </div>
                                        <div className="skills__data">                                       
                                             <div className="skills__name">
                                                  NodeJs
                                             </div>
                                             <div className="skills__bar skills__nodejs"></div>
                                        </div>
                                        <div className="skills__data">                                       
                                             <div className="skills__name">
                                                  PHP
                                             </div>
                                             <div className="skills__bar skills__php"></div>
                                        </div>
                                        <div className="skills__data">                                       
                                             <div className="skills__name">
                                                  Python (Django)
                                             </div>
                                             <div className="skills__bar skills__python"></div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               <Qualification/>
               <Footer/>   
          </>
     )
}

export default About