import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/symbolic-reg.png'
import IMG3 from '../../assets/flower.png'
// import IMG4 from '../../assets/portfolio4.jpg'
// import IMG5 from '../../assets/portfolio5.png'
// import IMG6 from '../../assets/portfolio6.jpg'
import IMG7 from '../../assets/1.png'
import IMG8 from '../../assets/gh2.png'




const data = [
  {
    id: 1,
    image: IMG8,
    title: 'Check out my GitHub profile',
    github: 'https://github.com/Sa1D1111',
    demo: 'https://sa1d1111.github.io/Matrix_ArtY/'
  },
  {
    id: 2,
    image: IMG7,
    title: 'MeowGPT',
    github: 'https://github.com/Sa1D1111/meowGpt',
    demo: 'https://meow-gpt-chi.vercel.app/'
  },
  {
    id: 3,
    image: IMG2,
    title: 'Symbolic Regressor',
    github: 'https://github.com/Sa1D1111/symbolic-reg/tree/main',
    demo: 'https://symbolic-reg.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'JS Flower Art',
    github: 'https://github.com/Sa1D1111/JS_Flower_animation.art',
    demo: 'https://sa1d1111.github.io/JS_Flower_animation.art/'
  }
]
  // {
  //   id: 4,
  //   image: IMG4,
  //   title: 'Maintaining tasks and tracking progress',
  //   github: 'https://github.com',
  //   demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
  // },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: 'Charts templates & infographics in Figma',
  //   github: 'https://github.com',
  //   demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  // },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: 'Charts templates & infographics in Figma',
  //   github: 'https://github.com',
  //   demo: 'https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma'

//   }
//]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Most Recent Work+</h5>
      <h2>GitHub</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>GitHub</a>
                {<a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a> }
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio