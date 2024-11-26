import React from 'react'
import './About.css'
import img from '../../assets/Images/myimgfull.jpg'
// import Spline from '@splinetool/react-spline';


const About = () => {
  return (
    <>
        <div className="about_sct">
            <div className="textbox">
                <div>
                <p>NO EXPERIANCE <br />WORKING FOR <br /> OURSELVES</p>
                <div id='para_text' >
                    <span style={{fontFamily:'Portfolio_t',color:'#8d938f',fontSize:'17px'}}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea nobis consequuntur consectetur dicta voluptatum culpa ad dolore libero enim. Error in porro quam itaque vero ex, cumque cum minus laudantium deleniti, fugit soluta, iure ad architecto.
                    </span>
                    
                </div>
                </div>
                <div className='sphere3d'>
                {/* <Spline
        scene="https://prod.spline.design/OcEXgSEOf7D0-6Mk/scene.splinecode" 
      /> */}
                <img src={img} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default About


