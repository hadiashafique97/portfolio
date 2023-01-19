import React from 'react'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function About() {
  return (
    <div className='about-container'>
      <h1 className='about-heading'>
        About Me
      </h1>
      <p className='about-heading'>
        A Paragraph explaining all the amazing skills I have, all the great experiences I have delivered and why I am such an asset to any company I work for
      </p>
  
      <img className='about-img' src="../../../pp.png"></img>
      <a className='github-logo' href="https://github.com/hadiashafique97">
        <FontAwesomeIcon className="hover:text-black-600" icon={faGithub} size="2x" />
      </a>
      <a className='linkedin-logo' href="https://www.linkedin.com/in/hadia-shafique/">
        <FontAwesomeIcon icon={faLinkedin} className="hover:text-black-600" size="2x" />
      </a>

    </div>
  )
}

export default About