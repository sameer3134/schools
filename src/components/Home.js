import React from 'react'
import About from './About';
import Contact from './Contact';
import Gallery from './Gallery';
import "./home.css";



const Home = () => {
  return (
    <div>
  <div className='contain'>
  <img src="/images/100.jpg" alt="snap" />
  <div className="centered">Sundara Shikshan <br/> Sansthan Inter College</div>
    </div>
   <center><hr className="one"/></center> 
   <About />
   <center><hr className="one"/></center> 
   <Gallery />
      <center><hr className="one"/></center> 
    <Contact />
   </div>
  )
}

export default Home