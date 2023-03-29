import React from 'react'
import Contact from './components/Contact/Contact'
import ExperirnceContainer from './components/ExperienceContainer/ExperirnceContainer'
import Header from './components/Header/Header'
import SkillContainer from './components/SkillContainer/SkillContainer'
import TopContainer from './components/TopContainer/TopContainer'

const App = () => {
  return (
    <div>
      <Header/>
      <TopContainer/>
      <SkillContainer/>
      <ExperirnceContainer/>
      <Contact/>
    </div>
  )
}

export default App