import React from 'react'
import './Campus.css'
import gallery_one from '../../assets/campusone.jpg'
import gallery_two from '../../assets/campus2.jpg'
import gallery_three from '../../assets/campus3.jpg'
import gallery_four from '../../assets/campus4.jpg'

const Campus = () => {
  return (
    <div className='campus'>

        <div className='gallery'>
            <img src={gallery_one} alt="" />
            <img src={gallery_two} alt="" />
            <img src={gallery_three} alt="" />
            <img src={gallery_four} alt="" />
        </div> 

        <button className='btn'>See more here</button>
      
    </div>
  )
}

export default Campus
