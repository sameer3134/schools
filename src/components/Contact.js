import React from 'react'
import "./home.css";
import emailjs from "emailjs-com";
const Contact = () => {
  function submitemail(e){
    e.preventDefault();

    emailjs.sendForm('service_1hrbgb9','template_r26ut4f',e.target,'aseghS1oT6oOSv3iL')
  .then(res=>{
    alert("Message successfully")
    console.log(res);
  }).catch(err=> console.log(err));}
  return (
    <div className="end">
           <div className="contain">

<div className="wrapper">

  <div className="form">
    <h1>GET IN TOUCH</h1>
    <form id="submit-form" action="" onSubmit={submitemail}>
      <p>
        <input id="name" name="name" className="form-input" type="text" placeholder="Your Name*" />
        <small className="name-error"></small>
      </p>
      <p>
        <input id="email"  name="user_email" className="form-input" type="email" placeholder="Your Email*" />
        <small className="name-error"></small>
      </p>
      <p className="full-width">
        <textarea  minLength="20" id="message" name="message" cols="30" rows="7" placeholder="Your Message*" required></textarea>
        <small></small>
      </p>
      <p className="full-width">
        <input type="submit" className="submit-btn" value="Submit" />
      </p>
    </form>
  </div>

  <div className="contacts contact-wrapper">

    <ul>
      <h2>Principal Name- Mr. Drigpal Singh</h2>
      <span className="hightlight-contact-info">
        <li className="email-info"><i className="fa fa-envelope" aria-hidden="true"></i> sundaraintercollege@gmail.com</li>
        <li><i className="fa fa-phone" aria-hidden="true"></i> <span className="highlight-text">+91 9554340853</span></li>
        <li><i className="fa fa-map-marker" aria-hidden="true"></i> Lalpur(R.S) Muridpur (Ward no.8) Jashwat Nagar,Kanpur</li>
      </span>
    </ul>
  </div>
</div>
</div>
    </div>
  )
}

export default Contact