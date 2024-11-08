
import "./Projects.css"
import {Swiper,SwiperSlide} from 'swiper/react'
import { Pagination,Autoplay } from 'swiper/modules'
import "swiper/css"
import "swiper/css/pagination"
import { projects } from '../../data'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  return (
    <section id='projects'>
      <div className="container">
        <h1 className="title">
          <span className="text__gradient">Our Projects</span>
         
        </h1>
        <div className='projects__container flex flex-row gap-8'>
             {
              projects.map((project,index)=>(
                <div className='project w-full h-full' key={index}>
                   <a href={project.url} target='_blank' className='image__container'>
                    <img  className="rounded-lg object-cover object-center" src={project.image} alt="" />
                   </a>
                   <div className="details">
                    <h2 className="name">{project.name}</h2>
                    <p className="text__muted text-justify description">{project.description}</p>
                   </div>
                   <a href={project.url} target='_blank' className='icon__container'>
                    <FaExternalLinkAlt/>
                   </a>
                </div>
              ))
             }
        </div>
      </div>
    </section>
  )
}

export default Projects
