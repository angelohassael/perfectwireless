import React, { useRef, useState } from 'react';
import "./Modal.css"
import emailjs from '@emailjs/browser';;

const Notification = ({ message }) => {
  return (
    <div className="notification">
      {message}
    </div>
  );
};
export const Modal = ({onSubmit, onCancel, onClose, children}) => {  
  const [showNotification, setShowNotification] = useState(false);

  const form = useRef();
  
  const sendEmail = (e) => {
    
    e.preventDefault();

    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 3000);

    emailjs
      .sendForm('service_t96nkic', 'template_29lvpxh', form.current, {
        publicKey: 'qstjs3lD2Zd4AI0KZ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
   <div className='modal-container'
   onClick={(e)=>{
    if (e.target.className === "modal-container"){
        onClose()
    }
   }}>
    <div className='modala'>
        <div className='modal-header'>
            <p className='close' onClick={() => onClose()}>&times;</p>
        </div>
        <div className='modal-content'>
           {children}
           <div className="contact-form-container">
      <h2 className='h2contact'>Contact Us</h2>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label >Name:</label>
          <input type="name"
                name="name"
                class="form-control"
                id="name"
                placeholder="enter your name"
/>
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email"
                name="email"
                class="form-control"
                id="email"
                placeholder="enter your email"
/>
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea class="form-control" id="message" name="message"></textarea>
        </div>
        <div className='modal-footer'>
        <button type="submit" className='btn btn-submit' value="Send" onSubmit={sendEmail}>Submit</button>
            <button className='btn btn-cancel' onClick={() => onClose()}>Cancel</button>
        </div>
      </form>
      {showNotification && <Notification message="Form submitted successfully!" />}
    </div>
           
        </div>
    </div>
   </div>
  )
}
