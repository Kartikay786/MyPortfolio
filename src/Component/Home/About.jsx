import React, { forwardRef } from 'react'
import './About.css'
import img from '../../assets/Images/myimgfull.jpg'
// import Spline from '@splinetool/react-spline';


const About = forwardRef((props,ref) => {
  return (
    <>
        <div className="about_sct" ref={ref}>
            <div className="textbox">
                <div>
                <p>NO EXPERIANCE <br />WORKING FOR <br /> OURSELVES</p>
                <div id='para_text' >
                    <span style={{fontFamily:'Portfolio_t',color:'#0c121c',fontSize:'17px'}}>
                    Highly motivated Software Architect in designing and developing scalable software systems. Skilled in using agile methodologies, React, React Native, JavaScript. Passionate about learning new technologies and upskilling teams for successful project execution.   </span>
                    
                </div>
                </div>
                <div className='sphere3d'>
               
                <img src={img} alt="" />
                </div>
            </div>
        </div>
    </>
  )
})

export default About


