import React from 'react'
import 'remixicon/fonts/remixicon.css'
import './Footer.css'
import { Link, useNavigate } from 'react-router'

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="footer">
        <div className="contact_box">
          <p>YOU WANT TO CONNECT WITH ME?</p>
          <span style={{ fontFamily: 'Portfolio_t', color: '#8d938f', fontSize: '17px' }}>Availavle 24*7</span>
          <br />
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <button style={{cursor:'pointer'}} onClick={()=>navigate('contact')}>Contact</button>
            <div className="icons">

              <div className="icon"> <a target='_blank' href="https://www.instagram.com/_kuser_boy?igsh=ZzF2ODhwZ2pwY2E="  > <i class="ri-instagram-line"></i></a></div>
              <div className="icon"><a target='_blank' href="https://github.com/Kartikay786" > <i className="ri-github-fill"></i></a></div>
             <div className="icon" ><a target='_blank' href='mailto:kg5724443@gmail.com' style={{ textDecoration: 'none', fontSize: '24px' }} > <i className="ri-mail-fill"></i></a></div>
              <div className="icon"><a  target='_blank' href="https://www.linkedin.com/in/kumar-kartikay-b7818a315" > <i className="ri-linkedin-fill"></i></a></div>


            </div>
          </div>



        </div>
        <div className="bottom_sct">
          <span style={{ fontFamily: 'Portfolio_t', color: '#0c121c', fontSize: '15px' }}> Copyright &copy; 2024 Kuser Boy</span>

        </div>
      </div>
    </>
  )
}

export default Footer