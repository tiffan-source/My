import React from 'react'

function Statproject() {
  return (
    <div className='experience'>
      <div className='experience-state'>
        <div className='experience-state-years'>
          <span>5<span className='span-primary'>+</span></span>
          <p>Years of experience</p>
        </div>
        
        <div className='experience-state-project'>
          <span>25<span className='span-primary'>+</span></span>
          <p>Project accomplish</p>
        </div>
      </div>
      <div className='experience-project'>
        <div className='experience-project-web'>
          <h3 className='experience-project-title'>Web App Developpement</h3>
          <p className='experience-project-p'>XX project accomplish</p>
          <a href="#" className='link'>see more {">"}</a>
        </div>
        
        <div className='experience-project-design'>
          <h3 className='experience-project-title'>Web Design</h3>
          <p className='experience-project-p'>XX project accomplish</p>
          <a href="#" className='link'>see more {">"}</a>
        </div>
      </div>
    </div>
  )
}

export default Statproject