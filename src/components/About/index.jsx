import { FaExternalLinkAlt } from 'react-icons/fa'
import { phealth } from "../../assets/images";
import {Swiper,SwiperSlide} from 'swiper/react'
import { Pagination,Autoplay } from 'swiper/modules'
import "swiper/css"
import "swiper/css/pagination"
import { ourTeamMembers } from '../../data'


const TeamCard = ({ image, name, position }) => {
  return (
    <div className="bg-gray-900 rounded-lg shadow-lg p-6 max-w-sm mx-auto w-full h-full transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <div className='flex flex-col items-center'>
       <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className="sm:text-sm lg:text-xl font-bold text__gradient">{name}</h2>
        <p className="text-center sm:text-xs md:text-sm lg:text-lg text-white text-justify  mt-4">{position}</p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id='about' className="py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        
        {/* Image Container */}
        <div className="w-full max-w-lg relative">
          <img className="rounded-lg w-full" src={phealth} alt="pHealth_picture" />
          <div className="absolute bottom-0 left-0 w-full h-full border-4 border-primary rounded-lg -z-10"></div>
        </div>
        
        {/* Details Section */}
        <div className="flex-1 space-y-6 text-justify leading-relaxed md:ml-12">
          <h3 className="text-2xl font-semibold">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">About Us</span> 
          </h3>
          
          <h4 className="text-xl bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Our Mission</h4>
          <p className="text-sm">
            To empower tech talent to address pressing global challenges through the power of technology.
          </p>

          <h4 className="text-lg bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Our Vision</h4>
          <p className="text-sm">
            Our vision is a future where tech professionals, armed with cutting-edge skills, tackle global challenges head-on, enabling businesses and organizations to thrive, innovation to drive progress, startups to receive vital support, and a collaborative tech community to foster growth.
          </p>
          
          <h4 className="text-lg bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Our Values</h4>
          <p className="text-sm">
            Our core values emphasize convenience, collaboration, and global community benefits, positioning us as a one-stop tech solution while actively contributing to sustainability goals and a more resilient world.
          </p>
          
          <a href="#contact" className=" btn btn__primary inline-block transition duration-300">Contact Us</a>
        </div>
      </div>
     
      <div className="container ">
        <h1 className="title">
          <span className="text__gradient">Our Team</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10 ">
          {ourTeamMembers.map((member, index) => (
            <TeamCard
              key={index}
              image={member.image}
              name={member.name}
              position={member.position}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
