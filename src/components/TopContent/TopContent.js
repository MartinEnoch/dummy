import React from 'react'
import { Link } from 'react-scroll'
import "./TopContent.css"

const TopContent = () => {
  return (
    <div className='topContent'>
        <div className='topContent__Container'>
        <h1>Mr.Martin Caleb </h1>
            <p>A Fresher as a seed,to the Experienced Developer's Garden,will going to Grow and Bloom as a flower.</p>
        <a href="https://drive.google.com/file/d/1ZFRfUAdLozYnANFlLsvknrbOPqLxBv5L/view">
            <button className='topContent__downloadButton'>VIEW CV</button>
        </a>
        <Link to="projects" smooth={true} duration={500}>
            <button className='topContent__workButton'>My Work</button>
        </Link>
        </div>


    </div>
  )
}

export default TopContent