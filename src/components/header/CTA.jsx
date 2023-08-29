import React from 'react'
import CV from '../../assets/cv.pdf'


const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="https://www.linkedin.com/in/saldelgado1/" className='btn btn-primary' target='_blank' rel='noopener_noreferrer'>LinkedIn</a>
        <a href="https://withkoji.com/@SalDev" className='btn btn-primary2' target='_blank' rel='noopener noreferrer'>Koji</a>
    </div>
  )
}
export default CTA