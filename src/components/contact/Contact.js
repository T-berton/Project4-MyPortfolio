import React, { useState } from "react";
import MyNav from "../nav/Nav";
import Footer from "../footer/Footer";
import { UilPhoneAlt, UilLocationPinAlt, UilEnvelopeEdit  } from '@iconscout/react-unicons'
import './contact.css'

function Contact() {
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    return (
        <>
        <MyNav/>
        <div className="container">
            <div className="contact__container">
                <div className="contact__title">
                    <h2 className="header__title">Contact Me</h2>
                    <h3 className="header__subtitle">Get In Touch</h3>
                </div>
                <div className="contact__grid">
                    <div className="card__grid">
                        <div className="card__content">
                            <h4 className="card__text"><UilPhoneAlt color="var(--color-secondary-variant)"/>+33 632629693</h4>
                        </div>
                        <div className="card__content">
                            <h4 className="card__text"><UilEnvelopeEdit color="var(--color-secondary-variant)"/>thomas.berton@live.fr</h4>
                        </div>
                        <div className="card__content">
                            <h4 className="card__text"><UilLocationPinAlt color="var(--color-secondary-variant)"/>Toulouse, France</h4>
                        </div>
                    </div>
                    <div className="line__container">
                        <span className="line"></span>
                    </div>
                    <form className="form__grid">
                        <div className="form__name">
                            <label for="name" className="form__label">
                                Name
                            </label>
                            <input type="text" id="name" name="user-name" className="form__input" value={name} onChange={e => setName(e.target.value)}></input>
                        </div>
                        <div className="form__subject">
                            <label for="subject" className="form__label">Subject</label>
                            <input type="text" id="subject" name="user-subject" className="form__input" value={subject} onChange={e => setSubject(e.target.value)}></input>
                        </div>
                        <div className="form__message">
                            <label for="message" className="form__label">Message</label>
                            <textarea className="form__input__message" placeholder="Enter your message" value={message} onChange={e =>{
                                  setMessage(e.target.value)
                            }}>

                            </textarea>
                        </div>
                        <div>
                            <a className="form__btn"  href={`mailto:thomas.berton@live.fr?subject=${subject}&body=From%20%3A%20${name}%0A%0A${message.replace("\n","%0A%0A")}`}>Submit</a>
                        </div>
                    </form>     
                </div>
            </div>
        </div>    
        <Footer/> 
        </>
    )
    
}
export default Contact