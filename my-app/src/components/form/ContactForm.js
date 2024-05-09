import "./ContactForm.css"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Notification = ({ message }) => {
  return (
    <div className="notification">
      {message}
    </div>
  );
};

const Form = (onSubmit, onCancel, onClose, children) =>{
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
        <div class="container">
          <div class="screen">
            <div class="screen-header">
              <div class="screen-header-left">
                <div class="screen-header-button close"></div>
                <div class="screen-header-button maximize"></div>
                <div class="screen-header-button minimize"></div>
              </div>
              <div class="screen-header-right">
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
              </div>
            </div>
            <div class="screen-body">
              <div class="screen-body-item left">
                <div class="app-title">
                  <span>Have any</span>
                  <span>Questions?</span>
                </div>
                <div class="app-contact">CONTACT INFO : perfectwirelesssolutionsla@yahoo.com</div>
              </div>
              <div class="screen-body-item">
                <div class="app-form">
                <form ref={form} onSubmit={sendEmail}>
                  <div class="app-form-group">
                    <input class="app-form-control" type="text" placeholder="NAME" name='name'/>
                  </div>
                  <div class="app-form-group">
                    <input class="app-form-control" type="email" placeholder="EMAIL" name='email'/>
                  </div>
                  <div class="app-form-group message">
                    <input class="app-form-control" type="text" placeholder="MESSAGE" name='message'/>
                  </div>
                  <div class="app-form-group buttons">
                    <button onSubmit={sendEmail} class="app-form-button">SEND</button>
                  </div>
                  </form>
                  {showNotification && <Notification message="Form submitted successfully!" />}
                </div>
                
              </div>
            </div>
    
          </div>
          <div class="credits">
          ○Answered within 24 hours○
          </div>
        </div>
      );
    };
    
    export default Form;