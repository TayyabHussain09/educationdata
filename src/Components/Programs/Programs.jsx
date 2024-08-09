import React from 'react'
import './Programs.css'
import program_1 from '../../assets/pro1.jpeg'
import program_2 from '../../assets/pro2.jpeg'
import program_3 from '../../assets/pro3.jpeg'
import icon_1 from '../../assets/icon1.png'
import icon_2 from '../../assets/icon2.png'
import icon_3 from '../../assets/icon3.png'


const Programs = () => {
  return (
    <div className='programs'>
        <div className='program'>
            <img src={program_1}></img>
            <div className="caption">
              <img src={icon_1}></img>
              <p>courses</p>
            </div>
        </div>
        <div className='program'>
            <img src={program_2}></img>
            <div className="caption">
              <img src={icon_2}></img>
              <p>programs</p>
            </div>
        </div>
        <div className='program'>
            <img src={program_3}></img>
            <div className="caption">
              <img src={icon_3}></img>
              <p>associate education</p>
            </div>
        </div>
      
    </div>
  )
}

export default Programs
