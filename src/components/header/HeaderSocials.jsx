import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineDotChart} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/saldelgado1/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Sa1D1111" target="_blank"><FaGithub/></a>
        <a href="https://withkoji.com/@SalDev" target="_blank"><AiOutlineDotChart/></a>
    </div>
  )
}

export default HeaderSocials