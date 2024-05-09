import React, { useState } from 'react'
import {Link as LinkScroll} from 'react-scroll'
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'
import pic1 from '../../img/bg.gif'
import pic4 from '../../img/picbg1.jpg'
import pic5 from '../../img/picbg2.jpg'

function CarouselPage({modalOpen,setModalOpen}) {
  return (
    <div className='carousel-container'>
    <Carousel>
    <Carousel.Item className='carousel-item'>
      <img className="sizing" src={pic1} alt="First slide"/>
      <Carousel.Caption className='caption'>
      <div className='header-caption'>
        <h3 className='h3'>Fast Repairs!</h3>
        <p className='p'>Most repairs done in the same day.</p>
        </div>
        <div className='buttondiv'>
        <button className='button' onClick={() => setModalOpen(true)}>Contact Us</button>
        </div>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item className='carousel-item'>
    <img className="sizing" src={pic4} alt="First slide"/>
      <Carousel.Caption className='caption'>
      <div className='header-caption'>
        <h3 className='h3'>Lowest Price!</h3>
        <p className='p'>We pride on having the best price in town.</p>
        </div>
        <div className='buttondiv'>
        <button className='button' onClick={() => setModalOpen(true)}>Contact Us</button>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='carousel-item'>
      <img
        className="sizing"
        src={pic5}
        alt="Third slide"
      />

      <Carousel.Caption>
        <div className='header-caption'>
        <h3 className='h3'>Highest Quality</h3>
        <p className='p'>
          All parts offered are guaranteed and of high quality.
        </p>
        </div>

        <div className='buttondiv'>
        <button className='button' onClick={() => setModalOpen(true)}>Contact Us</button>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}


export default CarouselPage