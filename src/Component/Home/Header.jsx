import React from 'react'
import './Header.css'
import ReactCurvedText from 'react-curved-text';

const Header = () => {
  return (
    <>
      <div className="header_sct">
        <div className="text">
          <div className="left">
            <p>KARTIKAY GUPTA <br />FRONTEND <br /> DEVELOPER</p>
            <i> <span>Self Confidence & Motivated <i className="ri-arrow-right-up-line"></i></span> </i>

          </div>
          {/* <div className="div_cir">
           <ReactCurvedText
            width={150}
            height={150}
            cx={75}
            cy={75}
            rx={70}
            ry={70}
            startOffset={15}
            reversed={false}
            text=" - &nbsp; #KUSER * PORTFOLIO  -  #KARTIKAY *  PORTFOLIO - BOY "
            textProps={{ style: { color:'#E2F1E7',fontSize: 14 ,fontFamily:'Portfolio_t',letterSpacing:'1.05',fontWeight:'600' } }}
            textPathProps={null}
            tspanProps={null}
            ellipseProps={null}
            svgProps={null}
          />
          </div> */}
          
        </div>

        

      </div>
    </>
  )
}

export default Header