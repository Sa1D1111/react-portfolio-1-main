import React from 'react'
import './about.css'
import ME from '../../assets/me-about2.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
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
          CS student @ CSU Fullerton. I am actively exploring a variety of technologies. My current interests are on Machine learning/AR (Augmented Reality),
           MR (Mixed Reality)/Stable Diffusion/Warp Fusion  I am very excited to continue my education and apply what I have learned to real-world scenarios.
          I'm eager to learn and work on projects that champion AI ethics, and help shape a future where AI serves as a powerful tool for good, 
          benefiting society as a whole. Let's come together and create a world where AI is responsibly harnessed, paving the way for a brighter,
           more secure future. 
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About