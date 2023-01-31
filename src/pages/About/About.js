
import React, { useEffect, useState } from 'react'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
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
      </div>
      <div className='about-para'>
        <p className="about-text">
        A Paragraph explaining all the amazing skills I have, all the great experiences I have delivered and why I am such an asset to any company I work for
      </p>
      </div>
      <div className='about-img'>
         <img  src="../../../pp.png"></img>
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