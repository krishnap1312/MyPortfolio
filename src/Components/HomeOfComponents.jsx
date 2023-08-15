import React from 'react'
import HeaderComponent from './HeaderComponent'
import IntroComponent from './IntroComponent'
import Nav from './Nav'
import Ribbion from './Ribbion'
import ProgrammingSkills from './ProgrammingSkills'
import Languages from './Languages'
import Experience from './Experience'
import WorkExp from './WorkExp'
import Portfolio from './Portfolio'

function Home() {
  return (
    <div>
        <Nav></Nav>
        <HeaderComponent></HeaderComponent>
        <IntroComponent></IntroComponent>
        <Ribbion></Ribbion>
        <ProgrammingSkills></ProgrammingSkills>
        <Languages></Languages>
        <Experience></Experience>
        <WorkExp></WorkExp>
        <Portfolio></Portfolio>
    </div>
  )
}

export default Home