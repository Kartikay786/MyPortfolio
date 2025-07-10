import React, { forwardRef } from 'react'
import './Service_sct.css'

const Service_sct = forwardRef((props, ref) => {

    const services = [
        {
            id: 1,
            serviceName: 'FRONTEND DEVELOPMENT',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure error, expedita atque tenetur quo itaque placeat magnam laudantium possimus unde.',
            skills: ['Reactjs', 'Tailwind CSS', 'JavaScript', 'Bootstrap', 'CSS', 'HTML']
        },
        {
            id: 2,
            serviceName: 'BACKEND DEVELOPMENT',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure error, expedita atque tenetur quo itaque placeat magnam laudantium possimus unde.',
            skills: ['Nodejs', 'Expressjs', 'MongoDb', 'JsonWebToken', 'Bcrypt', 'Authentication', 'Restful Api']
        },
        {
            id: 3,
            serviceName: 'UI DESIGNING',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure error, expedita atque tenetur quo itaque placeat magnam laudantium possimus unde.',
            skills: ['Figma', 'Canva']
        },
        {
            id: 4,
            serviceName: 'TOOLS AND DEPLOYMENT',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure error, expedita atque tenetur quo itaque placeat magnam laudantium possimus unde.',
            skills: ['Netlify', 'Render', 'Github', 'Postman', 'Hostinger Web Hosting', 'Website Indexing on Google']
        }
    ]

    return (
        <>
            <div className="service_sct" ref={ref}>
                <div className="heading_sct">
                    <div className="content">
                        <p>SKILLS AND <br /> MY SERVICES</p>
                    </div>
                </div>

                {/* skills */}


                {
                    services.map((service) => (
                        <div className="section" key={service.id}>
                            <div className="content">
                                <div className="leftpart">
                                    <p id='service_name' >{service.serviceName}</p>
                                    <span style={{ fontFamily: 'Portfolio_t', color: '#8d938f', fontSize: '15px' }}>{service.description}</span>
                                </div>
                                <div className="right_txt">
                                    <p style={{ fontSize: '1.3rem', width: '100%', marginBottom: '1px', color: '#0c121c' }}>LANGUAGES</p>
                                    <div className="skillbox">
                                        {
                                            service.skills.map((skill, idx) => (
                                                <span className="lang" key={idx} >{skill}</span>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    )
})

export default Service_sct