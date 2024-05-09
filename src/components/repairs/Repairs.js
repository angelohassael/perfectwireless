import React, { useState } from 'react';
import "./Repairs.css"
import Accordion from "../accordion/Accordion"
import iph from "../../img/iph.png"
import android from "../../img/anrepair.png"
import tablet from "../../img/tabletrepair.png"
import osrepair from "../../img/osrepair.png"
import gamerepair from "../../img/gamerepair.png"


const Repairs = () => {
const ImageComponent =<img src={iph} className='listimg' />
const ImageComponent2 =<img src={android} className='listimg' />
const ImageComponent3 =<img src={tablet} className='listimg' />
const ImageComponent4 =<img src={osrepair} className='listimg' />
const ImageComponent5 =<img src={gamerepair} className='listimg' />
  return (
    <div className='repair-container p-4'>
      <div className='intro-repair'>
      <h1 className='intro-h1 h2 mb-4'>One stop shop for repair , money transfer & cellphone payments</h1>
      <h2 className='intro-h2 text-xl text-gray-400'>Experience in cellphone repair for over 15 years</h2>
      </div>
      <div className="p-4 bg-gray-200 rounded-lg">
      <Accordion
      img={ImageComponent}
      answer={<div className='list-div'>
        <h1 className='h1-tag'>We specilize in:</h1> 
        <ul className='ul-list'>
          <li>Iphone 8/8+</li>
          <li>Iphone XR</li>
          <li>Iphone X/XS</li>
          <li>Iphone 11/11+</li>
          <li>Iphone 12/12+</li>
          <li>Iphone 13/13+</li>
          <li>Iphone 14/14+</li>
          </ul>
          </div>}/>
       <Accordion
      img={ImageComponent2}
      answer={<div className='list-div'>
        <h1 className='h1-tag'>We specilize in:</h1> 
        <ul className='ul-list'>
          <li>Samsung Repair</li>
          <li>LG Repair</li>
          <li>OnePlus Repair</li>
          </ul>
          </div>}/>
          <Accordion
      img={ImageComponent3}
      answer={<div className='list-div'>
        <h1 className='h1-tag'>We specilize in:</h1> 
        <ul className='ul-list'>
          <li>Ipad Repair</li>
          <li>Google Tablets Repair</li>
          <li>Amazon Tablets Repair</li>
          <li>Asus Tablets Repair</li>
          <li>LG Tablets Repair</li>
          </ul>
          </div>}/>
          <Accordion
      img={ImageComponent4}
      answer={<div className='list-div'>
        <h1 className='h1-tag'>We specilize in:</h1> 
        <ul className='ul-list'>
          <li>Windows OS Repair</li>
          <li>Mac OS Repair</li>
          <li>Screen Repair</li>
          <li>Asus Repair</li>
          <li>LG Repair</li>
          </ul>
          </div>}/>
          <Accordion
      img={ImageComponent5}
      answer={<div className='list-div'>
        <h1 className='h1-tag'>We specilize in:</h1> 
        <ul className='ul-list'>
          <li>Windows OS Repair</li>
          <li>Mac OS Repair</li>
          <li>Screen Repair</li>
          <li>Asus Repair</li>
          <li>LG Repair</li>
          </ul>
          </div>}/>
      </div>
    </div>
  )
}

export default Repairs;