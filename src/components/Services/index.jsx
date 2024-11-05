
import "./Services.css"
import { skills } from '../../data'

const Skills = () => {
  return (
    <section id='services'>
      <div className="container full__height">
        <h1 className="title mb-2">
          <span className="text__gradient"> Our Services</span>
        </h1>
        <div className="services__container">
          {
            skills.map((list,index)=>(
              <div className="services__box__container" key={index}>
                <h3 className="category text__gradient">{list.category}</h3>
                {
                  list.data.map((item,index)=>(
                    <div className="box" key={index}>
                      
                      <p className="">{item.skill}</p>
                      
                    </div>
                  ))
                }
              </div>
            ))
          }
        </div>
          
        </div>
       
     
      
    </section>
  )
}

export default Skills
