import React from "react";
import "./Project.css"; // Import custom CSS
import EvoTravelism from '../../assets/Images/Evotravelism.png'
import EvoSphere from '../../assets/Images/EvoSphere.png'
import Portfolio from '../../assets/Images/Portfolio.png'
import Yaadon from '../../assets/Images/yaadon_ka_pitara.png'
import { Link } from "react-router";

const projects = [
    {
        id: 1,
        title: "Yaadon Ka Pitara",
        description:
            "Create, share, and preserve your most precious family moments in a beautiful, secure digital space.",
        technologies: ["React", "Tailwind CSS",'Nodejs','ExpressJs','MongoDb', 'Multer'],
        image: Yaadon,
        liveDemo: "https://yaadon-ka-pitara.netlify.app",
        github: "https://github.com/Kartikay786/FamilyVaultFrontend",
    },
    {
        id: 2,
        title: "Evo_Sphere",
        description:
            "A scalable and secure backend for an e-commerce platform with authentication, cart management, and payment integration.",
        technologies: ["React",'Nodejs','ExpressJs','MongoDb'],
        image: EvoSphere,
        liveDemo: "https://evospherek.netlify.app",
        github: "https://github.com/Kartikay786/Evo-talker",
    },
    {
        id: 3,
        title: "Portfolio ",
        description:
            "A visually stunning portfolio showcasing skills, projects, and contact details with smooth animations and transitions.",
        technologies: ["React",'Nodejs','ExpressJs','MongoDb'],
        image: Portfolio,
        liveDemo: "https://kusergportfolio.netlify.app/",
        github: "https://github.com/Kartikay786/MyPortfolio",
    },
     {
        id: 4,
        title: "Evo_Travelism",
        description:
            "A visually stunning portfolio showcasing skills, projects, and contact details with smooth animations and transitions.",
        technologies: ["React", "Tailwind CSS",'Nodejs','ExpressJs','MongoDb'],
        image: EvoTravelism,
        liveDemo: "https://evo-travelismk.netlify.app",
        github: "https://github.com/Kartikay786/Evo-Travelism-Frontend",
    },
];

const ProjectPage = () => {
    return (
        <>
            <div className="project_sct">
                <div className="heading_sct">
                    <div className="content">
                        <p>PROJECTS AND <br /> MY WORK</p>
                    </div>
                </div>
                <div className="project_st">
                    {
                        projects.map((project) => (
                            <div className="project_card" key={project.id}>
                                <div className="uppertext">#<i>kuser</i> </div>
                                <div className="img">
                                    <img src={project.image} alt="" />
                                </div>
                                <div className="details">
                                    <div className="right_txt">
                                        <span id='project_name' style={{ fontFamily: 'Portfolio_l', fontWeight: '900', fontSize: '22px', }}>{project.title}</span>
                                        <span style={{ fontFamily: 'Portfolio_t', color: '#0c121c', fontSize: '17px' }}>
                                            {
                                                project.technologies.map((technology) => (<>{technology} &nbsp;</>))
                                            }
                                        </span>
                                    </div>
                                    <div className="btns">
                                        <div className='git_icon' >
                                            <Link style={{ textDecoration: 'none', color: '#333' }} to={project.github}> <i className="ri-github-fill"></i> </Link>
                                        </div>

                                        <Link to={project.liveDemo}>    <button>Visit Site</button> </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>

        </>
    );
};

export default ProjectPage;
