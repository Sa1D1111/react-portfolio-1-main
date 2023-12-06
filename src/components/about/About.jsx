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
          Welcome! I'm a web developer, software engineer, and data enthusiast currently honing my craft as a Computer Science student at CSU Fullerton. 
          My journey through code and pixels is driven by a deep fascination with the possibilities of Machine Learning, Augmented Reality, Mixed Reality, 
          Stable Diffusion, and Warp Fusion. As I navigate the ever-evolving tech landscape, my goal is to harness these technologies to build innovative 
          solutions that resonate with users and spark progress. Join me as I meld academic rigor with real-world application, all while championing AI ethics 
          to ensure technology remains a force for good. Let's create, innovate, and elevate together.

          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About