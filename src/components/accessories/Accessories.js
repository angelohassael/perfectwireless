import React from 'react';
import "./Accessories.css";
import ccase from '../../img/case.png';
import screenprotector from '../../img/screenprotector.png';
import access from '../../img/access.png';
const Accessories = () => {
  return (
    <div className='accessories-container'>
        <div className='h1tagcontainer'>
            <h1 className='h1tag-a'>Accessories</h1>
            </div>
        <div className='glass'>
            <div className='glass-image'><img src={screenprotector} className='glass-img'/> </div>
            <div className='glass-text'><p className='ptag-a'>Cellphone cases are indispensable accessories for smartphone users, 
                offering a multitude of benefits that safeguard and enhance the lifespan of your device.</p> 
                </div>
                
                
        </div>
        <div className='case'>
        <div className='case-text'><p className='ptag-c'>By absorbing impact and dispersing shock act as a barrier 
        against scratches, cracks, and other forms of damage, preserving the integrity of your phone's screen.</p> 
                </div>
            <div className='case-image'><img src={ccase} className='case-img'/> </div>    
        </div>
        <div>
            <h2 className='h2tag-a'>We also sell:</h2>
            <div class="grid-container-a">
                <ul className='grid-ul'>
                <li className='grid-li'>Cellphone Chargers</li>
                <li className='grid-li'>Bluetooth Speakers</li>
                <li className='grid-li'>Portable Battery Chargers</li>
                <li className='grid-li'>Cellphone Holders</li>
                <li className='grid-li'>Backpacks</li>
                <li className='grid-li'>& More..</li>
                </ul>
            </div>
            <div className='centerimg'><img  className="imgfading" src={access}/></div>
            </div>
                </div>
  )
}

export default Accessories