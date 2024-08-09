import React from 'react'
import './About.css'
import about_image from '../../assets/aboutus.png'
import play_icon from '../../assets/playicon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left"> 
            <img src={about_image} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' />
        </div>
        <div className="about-right">
          <h2>About University</h2>
          <br></br>
          <h3>Nurturing tommarow's leadeers today</h3>
          <br></br>
          <p>
            Harvard University's curriculum is renowned for its breadth and depth, offering students a well-rounded education across a diverse range of disciplines. From the humanities to the sciences, Harvard's programs are designed to cultivate critical thinking, problem-solving, and interdisciplinary collaboration. 
          </p>
          <p>Harvard is a leader in developing the next generation of visionary thinkers and innovators. The university's commitment to research and hands-on learning opportunities empowers students to push the boundaries of knowledge and make meaningful contributions to their respective fields.</p>

        </div>
      
    </div>
  )
}

export default About
