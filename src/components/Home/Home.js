import React from 'react'
import Skill from './skill/Skill'
import Footer from '../footer/Footer'
import Header from './header/Header'
import Nav from '../nav/Nav'
import Project_ex from './project/Project_ex'



function Home() {
  return (
    <>
    <Nav/>
    <Header/>
    <Skill/>
    <Project_ex/>
    <Footer/>
    </>

    
  ) 
}


export default Home