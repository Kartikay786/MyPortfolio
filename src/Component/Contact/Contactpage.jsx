import React, { useState, useEffect } from "react";
import "./Contact.css";
import { Link } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const Contactpage = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');
  const [theme, setTheme] = useState("dark"); // Default to dark mode

  useEffect(() => {
    // Automatically detect theme from the body background color
    const bgColor = getComputedStyle(document.body).backgroundColor;
    setTheme(bgColor === "rgb(14, 25, 44)" ? "dark" : "light");
  }, []);

  const formSubmit = async (e) => {
    const formData = {name,email,message} ;

    emailjs
      .send(
        "service_bquo33v",  // 🔹 Replace with your EmailJS service ID
        "template_3toc5ba", // 🔹 Replace with your EmailJS template ID
        formData,
        "cEcCF0wPBcXOls6P5"   // 🔹 Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          toast.success("Message Sent Successfully!");
          
        },
        (error) => {
          console.log("Failed to send email", error);
          toast.error("Failed to send message. Please try again.");
        }
      );
  }

  return (
    <div className="service_sct" >
      <div className="heading_sct">
        <div className="content">
          <p> <br />Contact</p>
        </div>
      </div>
      <div className="contact_content_section" style={{ minHeight: '40vh', display: 'flex', justifyContent: 'center', gap: '3vh', backgroundColor: '#f1f1f1', padding: '16px' }}>
        {/* leftpart  */}
        <div className="left-section" style={{ padding: '24px', marginTop: '3vh' }}>
          <div style={{ padding: '16px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' }}>
            <p style={{ fontSize: '18px', fontFamily: 'Portfolio_t', marginTop: '8px' }}> <strong>Email</strong>: kg57244432gmail.com</p>
            <p style={{ fontSize: '18px', fontFamily: 'Portfolio_t', marginTop: '8px' }}> <strong>Location</strong>: New Delhi, India</p>
          </div>

          <div style={{ padding: '16px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '16px' }}>

            <div className="icon" ><Link style={{ textDecoration: 'none', fontSize: '24px' }} to="https://www.instagram.com/_kuser_boy?igsh=ZzF2ODhwZ2pwY2E=" > <i className="ri-instagram-line"></i></Link></div>
            <div className="icon" ><Link style={{ textDecoration: 'none', fontSize: '24px' }} to="https://github.com/Kartikay786" > <i className="ri-github-fill"></i></Link></div>
            <div className="icon" ><Link style={{ textDecoration: 'none', fontSize: '24px' }} to="mailto:kg5724443@gmail.com" > <i className="ri-mail-fill"></i></Link></div>
            <div className="icon" ><Link style={{ textDecoration: 'none', fontSize: '24px' }} to="https://www.linkedin.com/in/kumar-kartikay-b7818a315" > <i className="ri-linkedin-fill"></i></Link></div>

          </div>
        </div>

        {/* right part  */}
        <div className={`contact-container ${theme}`}>

          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-subtitle">I'd love to hear from you! Drop me a message below.</p>

          <form className="contact-form" onSubmit={formSubmit}>
            <div className="input-group">
              <input 
              type="text" 
              name="name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              id="name" required />
              <label htmlFor="name">Your Name</label>
            </div>

            <div className="input-group">
              <input 
              type="email" 
              name="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              id="email" required />
              <label htmlFor="email">Your Email</label>
            </div>

            <div className="input-group">
              <textarea 
              name="message"
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
              id="message" required></textarea>
              <label htmlFor="message">Your Message</label>
            </div>

            <button type="submit" className="contact-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
