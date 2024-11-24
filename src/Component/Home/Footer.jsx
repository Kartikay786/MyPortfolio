import React from 'react'
import 'remixicon/fonts/remixicon.css'
import './Footer.css'

const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="contact_box">
                <p>YOU WANT TO CONNECT WITH ME?</p>
                <span style={{fontFamily:'Portfolio_t',color:'#8d938f',fontSize:'17px'}}>Availavle 24*7</span>
                <br />
                <button>Contact</button>
            </div>
            <div className="bottom_sct">
               <span style={{fontFamily:'Portfolio_t',color:'#E2F1E7',fontSize:'15px'}}> Copyright &copy; 2024 Kuser Boy</span>
               <div className="icons">
                
               <div className="icon"><i class="ri-instagram-line"></i></div>
               <div className="icon"><i className="ri-github-fill"></i></div>
                <div className="icon"><i className="ri-linkedin-fill"></i></div>

                
               </div>
            </div>
        </div>
    </>
  )
}

export default Footer