import{Element}from 'react-scroll'
import Experience from '../ExperienceBox/Experience'
import "./ExperienceContainer.css"
const ExperirnceContainer = () => {
  return (
    <Element className='experienceContainer' id='exp'>
        <h1>Experience</h1>
        <div className='experienceContainer__info'>
            <Experience number="+1" title="clients" />
            <Experience number="3+" title="projects" style={{backgroundColor:"aqua"}}/>
            <Experience number="3" title="internship course" />
            <Experience number="1" title="year of non-IT organaization works" />
        </div>
    </Element>
  )
}

export default ExperirnceContainer