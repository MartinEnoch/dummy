import React from 'react'
import { Element } from "react-scroll";
import skilling from "../../Images/teahub.io-computer-wallpaper-10344.jpg"
import LinearProgress from '@mui/material/LinearProgress';
import "./SkillContainer.css"

const SkillContainer = () => {
  return (
    <Element className='skillContainer' id='skills'>
        <div className='skillContainer__image'>
          <img src={skilling} alt=""/>
        </div>
        <div className='skillContainer__text'>
            <h2>SKILLSET</h2>
            <div className='skillContainer__skillSet'>
                <h5>React Js</h5>
                <div className='skillContainer__slider skillContainer__slider1'>
                <LinearProgress variant="determinate" value={50}/>
                </div>
            </div>

            <div className='skillContainer__skillSet'>
                <h5>Javascript</h5>
                <div className='skillContainer__slider skillContainer__slider2'>
                <LinearProgress variant="determinate" value={70}/>
                </div>
            </div>

            <div className='skillContainer__skillSet'>
                <h5>Cascading Style Sheets</h5>
                <div className='skillContainer__slider skillContainer__slider3'>
                <LinearProgress variant="determinate" value={80}/>
                </div>
            </div>

            <div className='skillContainer__skillSet'>
                <h5>html</h5>
                <div className='skillContainer__slider skillContainer__slider4'>
                <LinearProgress variant="determinate" value={85}/>
                </div>
            </div>
            
        </div>

    </Element>
  )
}

export default SkillContainer