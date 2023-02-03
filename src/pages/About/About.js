
import React, { useEffect, useState } from 'react'
import { faApple, faGithub, faLinkedin, } from "@fortawesome/free-brands-svg-icons"
import { FaReact , FaNodeJs,FaHtml5, FaLaptopCode } from 'react-icons/fa'
import { SiJavascript, SiExpress, SiCss3,SiMongodb } from "react-icons/si"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../About/About.css"

function About() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="background-color">
    <div className={`about-container ${isMounted ? 'animate__animated animate__rubberBand' : ''}`}>
      <div className="about-head">
        <h1 >
        About 
      </h1>
      <hr></hr>
      </div>
      
      <div className='about-para'>
        <p className="about-text">
        I am an aspiring Software Engineer Professional who constantly seeks out innovative solutions to everyday problems. I recently graduated from <a className='link' href="https://www.perscholas.org">PerScholas</a> MERN Stack Software Engineering Bootcamp. I have four years of experience in the Tech World working at <FontAwesomeIcon  icon={faApple}  /> , totalling 7+ years of work experience in the Customer Service Industry. I am looking for my next adventure as a Software Engineer or Developer.
      </p>
      </div>
      <div className='about-img'>
         <img  src="../../../pp.png" ></img>
      </div>
      <div className='about-logo'>
        <a className='github-logo' href="https://github.com/hadiashafique97">
        <FontAwesomeIcon  icon={faGithub} size="2x" />
      </a>
      <a className='linkedin-logo' href="https://www.linkedin.com/in/hadia-shafique/">
      <FontAwesomeIcon icon={faLinkedin}  size="2x"  
 />
      </a>
      </div>
      <div className='skills'>
        <h4>Skills</h4>
        <hr></hr>
        <FaReact/> React  
        <FaNodeJs/> Node.Js  
        <SiJavascript/> JavaScript <br></br>
        <SiExpress/>Express.Js 
        <FaHtml5/> HTML5 
        <SiCss3/> CSS
        <SiMongodb/> MongoDB 
        <FaLaptopCode/>Programming
      </div>
      
    </div>
    </div>
  )
}

export default About

// import React from 'react'
// import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import "../About/About.css"

// function About() {
//   return (
//     <div className='about-container animate__animated animate__rubberBand'>
//       <div classname="about-head">
//         <h1 >
//         About 
//       </h1>
//       </div>
//       <div className='about-para'>
//         <p className="about-text">
//         A Paragraph explaining all the amazing skills I have, all the great experiences I have delivered and why I am such an asset to any company I work for
//       </p>
//       </div>
//       <div className='about-img'>
//          <img  src="../../../pp.png"></img>
//       </div>
//       <div className='about-logo'>

//         <a className='github-logo' href="https://github.com/hadiashafique97">
//         <FontAwesomeIcon  icon={faGithub} size="2x" />
//       </a>
//       <a className='linkedin-logo' href="https://www.linkedin.com/in/hadia-shafique/">
//       <FontAwesomeIcon icon={faLinkedin}  size="2x"  
//  />
//       </a>
//       </div>
     
      
//     </div>
//   )
// }

// export default About