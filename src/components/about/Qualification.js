import React from "react";
import './qualification.css'
import { Icon } from "@iconify/react";
import { UilGraduationCap, UilBag, UilCalendarAlt } from '@iconscout/react-unicons'

function Qualification() {
    return(
        <div className="container">
            <h2 className="title qualification__title">My Qualifications</h2>
            <div className="qualification__header">
                <div className="education__title">
                    <Icon icon="mdi:graduation-cap-outline" className="education__icon" />
                    <h3>Education</h3>
                </div>
                <div className="experience__title">
                    <Icon icon="uil:bag" className="experience__icon" />
                    <h3>Experience</h3>
                </div>

            </div>
            <div className="qualification__content">
                <div className="education__item">
                    <div className="education__data">
                        <h4 className="education__title"> OpenClassrooms - France</h4>
                        <h5 className="education__description"> FullStack Developer - Bachelor Degree Level</h5>
                        <h6 className="education__date"><Icon icon="uil:calendar-alt"  className="qualification__calendar"/> 2022 - 2023</h6>
                    </div>
                </div>
                <div >
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                </div>
                <div></div>
                <div></div>
                <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                </div>
                <div className="experience__item">
                    <div className="education__data">
                        <h4 className="experience__title"> Embedded Software Engineer - SII France</h4>
                        <h5 className="experience__description"> Work Training Program (one year)</h5>
                        <h6 className="experience__date"><Icon icon="uil:calendar-alt"  className="qualification__calendar" id="exp"/> 2021 - 2022</h6>
                    </div>
                </div>
                <div className="education__item">
                    <div className="education__data">
                        <h4 className="education__title"> National Institute for Applied Sciences (INSA Toulouse) - France</h4>
                        <h5 className="education__description"> Engineering Master Degree in Electronic and Automatic - Major in Embedded systems</h5>
                        <h6 className="education__date"><Icon icon="uil:calendar-alt"  className="qualification__calendar"/> 2018 - 2022</h6>
                    </div>
                </div>
                <div >
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                </div>
                <div></div>
                <div></div>
                <div >
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                <div className="experience__item">
                    <div className="experience__data">
                        <h4 className="experience__title"> Software Developer  - Actia Automotive France</h4>
                        <h5 className="experience__description"> Engineer Internship</h5>
                        <h6 className="experience__date"><Icon icon="uil:calendar-alt" id="exp"  className="qualification__calendar"/> 2021 - 2021</h6>
                    </div>
                </div>
                <div className="education__item">
                    <div className="education__data">
                        <h4 className="education__title" > Toulouse III  Paul Sabatier University - France</h4>
                        <h5 className="education__description"> Preparatory class - One year intensive foundation degree in Mathematics and Physics</h5>
                        <h6 className="education__date"><Icon icon="uil:calendar-alt"  className="qualification__calendar"/> 2017 - 2018</h6>
                    </div>
                </div>
                <div >
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                </div>
                <div></div>
                <div></div>
                <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                </div>
                <div className="experience__item">
                    <div className="experience__data">
                        <h4 className="experience__title"> Study Office Assistant - Airbus Atlantic France</h4>
                        <h5 className="experience__description"> Engineer Internship</h5>
                        <h6 className="experience__date"><Icon icon="uil:calendar-alt" id="exp" className="qualification__calendar"/> 2018 - 2018</h6>
                    </div>
                </div>
            </div>
        </div>
    )
   
}

export default Qualification