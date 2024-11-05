
import "./About.css"
import { FaExternalLinkAlt } from 'react-icons/fa'

import { profile12 } from "../../assets/images"
import { phealth } from "../../assets/images"

const About = () => {
  return (
    <section id='about'>
      <div className="container">
         <div className="photo__container">
            <img className="img" src={phealth} alt="pHealth_picture" />
          </div>
         <div className="details py-[-2]">
          <h3 className="text-2xl"><span className="text__gradient " >About</span > Us</h3>
          <h4 className="text__gradient ">Our Mission</h4>
          <p className=" description text-sm" >
          To empower tech talent to address pressing global challenges through the power of technology.
          </p>

          <h2 className="text__gradient text-lg mt-4">Our Vision</h2>
          <p className="description text-sm"  >Our vision is a future where tech professionals, armed with cutting-edge skills, tackle global challenges head-on, enabling businesses and organizations to thrive, innovation to drive progress, startups to receive vital support, and a collaborative tech community to foster growth.</p>
          <h2 className="text__gradient mt-4">Our Values</h2>
          <p className="description text-sm">Our core values emphasize convenience, collaboration, and global community benefits, positioning us as a one-stop tech solution while actively contributing to sustainability goals and a more resilient world.</p>
          <a href="#contact" className='btn btn__primary'>Contact Us</a>
          
         </div>
      </div>
    </section>
  )
}

export default About
