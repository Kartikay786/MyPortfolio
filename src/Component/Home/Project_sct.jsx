import React from 'react'
import './Project_sct.css'
import project1 from '../../assets/Images/project1.png'
import project2 from '../../assets/Images/project2.png'
import { Link, useNavigate } from 'react-router'

const Project_sct = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="project_sct">
                <div className="project_card">
                    <div className="uppertext">#<i>kuser</i> </div>
                    <div className="img">
                        <img src={project1} alt="" />
                    </div>
                    <div className="details">
                        <div className="right_txt">
                            <span id='project_name' style={{ fontFamily: 'Portfolio_l', fontWeight: '900', fontSize: '22px', }}>Evo_Sphere</span>
                            <span style={{ fontFamily: 'Portfolio_t', color: '#8d938f', fontSize: '17px' }}>Reactjs &nbsp;Nodejs  &nbsp;Expressjs &nbsp; MongoDb</span>
                        </div>
                        <div className="btns">
                           <div className='git_icon' >
                              <i  className="ri-github-fill"></i>
                            </div> 
                     
                        <Link to='https://myevosphere.netlify.app'>    <button>Visit Site</button> </Link>
                        </div>
                    </div>
                </div>
                <div className="project_card">
                    <div className="uppertext">#<i>kuser</i> </div>
                    <div className="img" style={{background:'antiquewhite'}}>
                    <img src={project2} alt="" />
                    </div>
                    <div className="details">
                        <div className="right_txt">
                            <span id='project_name' style={{ fontFamily: 'Portfolio_l', fontWeight: '900', fontSize: '22px', }}>Evo_Sphere</span>
                            <span style={{ fontFamily: 'Portfolio_t', color: '#8d938f', fontSize: '17px' }}>Reactjs &nbsp;Nodejs  &nbsp;Expressjs &nbsp; MongoDb</span>
                        </div>
                        <div className="btns">
                           <div className='git_icon' >
                              <i  className="ri-github-fill"></i>
                            </div> 
                         
                        <Link to='https://kuserportfolio.netlify.app'>    <button>Visit Site</button> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project_sct