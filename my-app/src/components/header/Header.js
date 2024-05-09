import React, {useState} from 'react'
import './Header.css'
import CarouselPage from '../carousel/CarouselPage'
import {Modal} from '../modal/Modal'

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState("")
  const handleButtonClick = (value) => {
    setModalOpen(false);
    setMessage(value);
    }
  return (
    <div className='header-container'>
    <div>
        <CarouselPage modalOpen={modalOpen} setModalOpen={setModalOpen}/>
        {message}
        {modalOpen && (<Modal 
        onSubmit={handleButtonClick} 
        onCancel={handleButtonClick} 
        onClose={handleButtonClick}
        >
        </Modal>
      )}
    </div>
    </div>
  )
}

export default Header