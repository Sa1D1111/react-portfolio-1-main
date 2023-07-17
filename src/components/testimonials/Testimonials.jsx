import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'In the realm of artificial intelligence, ethics is not just an option, it\'s an imperative. As we unlock the tremendous potential of AI, we must do so with a profound responsibility to safeguard human rights, privacy, and dignity.'
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'AI without ethics is like a rudderless ship in stormy seas. Let us steer the course of innovation with unwavering commitment to fairness, transparency, and accountability, ensuring AI remains a force for good in our lives.'
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'The evolution of AI must be tethered to the evolution of our ethical conscience. Let us rise to the challenge of harnessing the power of AI responsibly, fostering a world where innovation and compassion go hand in hand.'
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    review: 'AI ethics is not a challenge to overcome; it\'s an opportunity to embrace. Let\'s lead by example, demonstrating how a commitment to ethics elevates AI\'s impact and paves the way for a future we can all believe in.'
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Example</h5>
      <h2>AI Ethics Stance from colleagues</h2>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Pagination]} spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials