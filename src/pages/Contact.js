import React from 'react'
import '../styles/contact.css'
import Footer from "../components/footer/Footer"
import Navbar from "../components/navbarlink/Navbarlink"
import Form from "../components/form/ContactForm"
import cellphone from "../img/contactus.jpg"
const Contact = () => {
  return (
    <>
<Navbar/>
<div className='middle'>
    <h1 className='contacth1'>Contact Us</h1>
    </div>
    <div className='contact-container'>
      <div className='contactchild1'>
     <h2 className='contacth2'>Thank you for your interest in reaching out to us. We value your feedback, inquiries, and suggestions. 
      Please feel free to contact us using the information provided below or by filling out the contact form.
     </h2>
     <h3 className='contacth3'>
     <br/>
   <p> Perfect Wireless Solutions</p>
   <p> 2420 N Broadway</p>
   <p> Los Angeles, CA 90042</p>
   <p> U.S.A</p>
     </h3>
      </div>
      <div className='contactchild2'>
      <Form/>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact