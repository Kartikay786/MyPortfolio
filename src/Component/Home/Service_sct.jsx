import React from 'react'
import './Service_sct.css'

const Service_sct = () => {
    return (
        <>
            <div className="service_sct">
                <div className="heading_sct">
                    <div className="content">
                        <p>SKILLS AND <br /> MY SERVICES</p>
                    </div>
                </div>

                {/* skills */}

                <div className="section">
                    <div className="content">
                        <div className="leftpart">
                            <p id='service_name' >FRONTEND DEVELOPMENT</p>
                            <span style={{ fontFamily: 'Portfolio_t', color: '#8d938f', fontSize: '15px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure error, expedita atque tenetur quo itaque placeat magnam laudantium possimus unde.</span>
                        </div>
                        <div className="right_txt">
                            <p style={{ fontSize: '1.3rem', width: '100%', marginBottom: '1px' }}>LANGUAGES</p>
                            <div className="skillbox">
                                <span className="lang">Reactjs</span>
                                <span className="lang">Tailwind CSS</span>
                                <span className="lang">JavaScript</span>
                                <span className="lang">Bootstrap</span>
                                <span className="lang">CSS</span>
                                <span className="lang">HTML</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="content">
                        <div className="leftpart">
                            <p id='service_name'>BACKEND DEVELOPMENT</p>
                            <span style={{ fontFamily: 'Portfolio_t', color: '#8d938f', fontSize: '15px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure error, expedita atque tenetur quo itaque placeat magnam laudantium possimus unde.</span>
                        </div>
                        <div className="right_txt">
                            <p style={{ fontSize: '1.3rem', width: '100%', marginBottom: '1px' }}>LANGUAGES</p>
                            <div className="skillbox">
                                <span className="lang">Nodejs</span>
                                <span className="lang">Expressjs</span>
                                <span className="lang">MongoDb</span>
                                <span className="lang">JsonWebToken</span>
                                <span className="lang">Bcrypt</span>
                                <span className="lang">Authentication</span>
                                <span className="lang">Restful Api</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="content">
                        <div className="leftpart">
                            <p id='service_name'>UI DESIGNING</p>
                            <span style={{ fontFamily: 'Portfolio_t', color: '#8d938f', fontSize: '15px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure error, expedita atque tenetur quo itaque placeat magnam laudantium possimus unde.</span>
                        </div>
                        <div className="right_txt">
                            <p style={{ fontSize: '1.3rem', width: '100%', marginBottom: '1px' }}>LANGUAGES</p>
                            <div className="skillbox">
                                <span className="lang">Figma</span>
                                <span className="lang">Canva</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="content">
                        <div className="leftpart">
                            <p id='service_name'>TOOLS AND DEPLOYMENT</p>
                            <span style={{ fontFamily: 'Portfolio_t', color: '#8d938f', fontSize: '15px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure error, expedita atque tenetur quo itaque placeat magnam laudantium possimus unde.</span>
                        </div>
                        <div className="right_txt">
                            <p style={{ fontSize: '1.3rem', width: '100%', marginBottom: '1px' }}>TOOLS</p>
                            <div className="skillbox">
                                <span className="lang">Netlify</span>
                                <span className="lang">Render</span>
                                <span className="lang">Github</span>
                                <span className="lang">Postman</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service_sct