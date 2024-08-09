import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next.png'
import prev_icon from '../../assets/prev.png'
import user_1 from '../../assets/user_1.png'
import user_2 from '../../assets/user_2.png'
import user_3 from '../../assets/user_3.png'
import user_4 from '../../assets/user_4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{

    if(tx > -50){
        tx = -50;
    }
    slider.current.style.transform = `translateX(${tx}%)`;


}

const slideBackward = ()=>{
    if(tx < 0){
        tx = -0;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={prev_icon} alt="" className='prev-btn' onClick={slideBackward}/>
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>William jackson</h3>
                                <span>Startbucks, new jersey</span>
                            </div>
                        </div>
                        <p>choosing to study at the harvard was particularly was my best decision, the good facity and state of the art community and many more and commitment to academic exillence truky reputated me</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>mike ross</h3>
                                <span>harvard, washington</span>
                            </div>
                        </div>
                        <p>choosing to study at the harvard was particularly was my best decision, the good facity and state of the art community and many more and commitment to academic exillence truky reputated me</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>harvey specter</h3>
                                <span>harvard, new jersey</span>
                            </div>
                        </div>
                        <p>choosing to study at the harvard was particularly was my best decision, the good facity and state of the art community and many more and commitment to academic exillence truky reputated me</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>david j malan</h3>
                                <span>educity, new jersey</span>
                            </div>
                        </div>
                        <p>choosing to study at the harvard was particularly was my best decision, the good facity and state of the art community and many more and commitment to academic exillence truky reputated me</p>
                    </div>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Testimonials
