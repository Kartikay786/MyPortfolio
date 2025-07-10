import React, { forwardRef, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Header.css";
import { useNavigate } from "react-router";

gsap.registerPlugin(ScrollTrigger);

const Header = forwardRef((props,ref) => {
  const navigate = useNavigate();
  const headerRef = ref;
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    )
      .fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        buttonRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.3"
      );

    gsap.to(headerRef.current, {
      backgroundPosition: "100% 50%",
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="header_sct" ref={headerRef}>
      <div className="header_content">
        <div className="left_section" ref={textRef}>
          <h1>
            KARTIKAY GUPTA <br />
            <span>FRONTEND DEVELOPER</span>
          </h1>
          <p>Passionate about creating stunning web experiences.</p>
          <button onClick={()=>navigate('/projects')} className="cta_button" ref={buttonRef}>Explore My Work</button>
        </div>
        <div className="right_section">
          <div className="circle_effect"></div>
          <img
            src="https://i.pinimg.com/736x/25/5f/65/255f65c7b9971b3a78485c63ea9bcb26.jpg"
            alt="Profile"
            className="profile_image"
            ref={imageRef}
          />
        </div>
      </div>
    </div>
  );
});

export default Header;
