import React from 'react'
import './Project_sct.css'
import EvoTravelism from '../../assets/Images/Evotravelism.png'
import EvoSphere from '../../assets/Images/EvoSphere.png'
import Yaadon from '../../assets/Images/yaadon_ka_pitara.png'
import { Link, useNavigate } from 'react-router'

const Project_sct = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="project_sct">

                {/* 1 */}
                <div className="project_card" style={{ marginTop: '4vh' }}>
                    <div className="uppertext">#<i>kuser</i> </div>
                    <div className="img" style={{ background: 'antiquewhite' }}>
                        <img src={Yaadon} alt="" />
                    </div>
                    <div className="details">
                        <div className="right_txt">
                            <span id='project_name' style={{ fontFamily: 'Portfolio_l', fontWeight: '900', fontSize: '22px', }}>Yaadon Ka Pitara</span>
                            <span style={{ fontFamily: 'Portfolio_t', color: '#0c121c', fontSize: '17px' }}>Reactjs &nbsp; Tailwind CSS &nbsp; Nodejs  &nbsp; Expressjs &nbsp; MongoDb &nbsp; Multer</span>
                        </div>
                        <div className="btns">
                          <a target='_blank' style={{ textDecoration: 'none', color: '#0c121c' }} href='https://github.com/Kartikay786/FamilyVaultFrontend' >
                                <div className='git_icon'  >
                                    <i className="ri-github-fill"></i>
                                </div>
                            </a>

                            <a target='_blank' href='https://yaadon-ka-pitara.netlify.app/'>    <button>Visit Site</button> </a>
                        </div>
                    </div>
                </div>


                {/* 2 */}
               
                <div className="project_card" >
                    <div className="uppertext">#<i>kuser</i> </div>
                    <div className="img">
                        <img src={EvoSphere} alt="" />
                    </div>
                    <div className="details">
                        <div className="right_txt">
                            <span id='project_name' style={{ fontFamily: 'Portfolio_l', fontWeight: '900', fontSize: '22px', }}>Evo_Sphere</span>
                            <span style={{ fontFamily: 'Portfolio_t', color: '#0c121c', fontSize: '17px' }}>Reactjs &nbsp; Nodejs &nbsp; Expressjs &nbsp; MongoDb</span>
                        </div>
                        <div className="btns">
                            <a target='_blank' style={{ textDecoration: 'none', color: '#0c121c' }} href='https://github.com/Kartikay786/Evo-talker' >
                                <div className='git_icon'  >
                                    <i className="ri-github-fill"></i>
                                </div>
                            </a>

                            <a target='_blank' href='https://evospherek.netlify.app'>    <button>Visit Site</button> </a>
                        </div>
                    </div>
                </div>

                {/* 3  */}

                 <div className="project_card" style={{ marginTop: '3vh' }}>
                    <div className="uppertext">#<i>kuser</i> </div>
                    <div className="img">
                        <img src={EvoTravelism} alt="" />
                    </div>
                    <div className="details">
                        <div className="right_txt">
                            <span id='project_name' style={{ fontFamily: 'Portfolio_l', fontWeight: '900', fontSize: '22px', }}>Evo_Travelism</span>
                            <span style={{ fontFamily: 'Portfolio_t', color: '#0c121c', fontSize: '17px' }}>Reactjs &nbsp; Tailwind CSS &nbsp; Nodejs  &nbsp; Expressjs &nbsp; MongoDb</span>
                        </div>
                        <div className="btns">
                            <a target='_blank' style={{ textDecoration: 'none', color: '#0c121c' }} href='https://github.com/Kartikay786/Evo-Travelism-Frontend' >
                                <div className='git_icon'  >
                                    <i className="ri-github-fill"></i>
                                </div>
                            </a>

                            <a target='_blank' href='https://evo-travelismk.netlify.app'>    <button>Visit Site</button> </a>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Project_sct