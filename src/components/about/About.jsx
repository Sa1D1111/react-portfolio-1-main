import React from 'react'
import './about.css'
import ME from '../../assets/zion.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know </h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3rd year CS Student</small>
            </article>

            {/* <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article> */}

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Skills</h5>
              <small>Proficient</small>
            </article>
          </div>

          <p>
              
          Welcome!
          I’m a certified breathwork coach, personal trainer, and software developer with a passion for both human transformation and decentralized tech innovation.

          My work as a breathwork and fitness coach is rooted in the belief that true well-being comes from aligning the body, mind, and nervous system. 
          I guide individuals through somatic breathwork journeys and strength-focused training to help release emotional tension,
          build confidence, and reconnect with their inner power.
         </p>

          <p>
          After earning my degree in Computer Science from Cal State Fullerton, I dove into the world of blockchain and wireless innovation.
          </p>
          <p>  I now work on Helium Network deployments, blending my love for connectivity, infrastructure, and emerging technology. Whether it’s optimizing sensor data or expanding decentralized coverage, I’m driven by purpose and progress.
          From breath to bandwidth, my mission is to empower, elevate, and build systems—biological and digital—that support growth and freedom.
          Let’s connect, breathe, and build something meaningful.</p>
        
          

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About