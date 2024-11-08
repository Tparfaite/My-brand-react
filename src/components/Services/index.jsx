import { skills } from '../../data'

const Skills = () => {
  return (
    <section id="services" className="bg-gray-900 py-12">
      <div className="container mx-auto  flex flex-col items-center px-4">
        
        {/* Section Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-600">
          Our Services
        </h1>

        {/* Skills Cards Container */}
        <div className="flex flex-wrap justify-center xl:flex-nowrap gap-5 mt-3 w-full">
          {skills.map((list, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-6 bg-gray-800 rounded-lg border-2 border-transparent 
                         transition-transform transform hover:scale-95 hover:border-blue-500"
            >
              {/* Skill Category */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-600">
                {list.category}
              </h3>

              {/* Skill Items */}
              {list.data.map((item, itemIndex) => (
                <div className="text-white text-sm sm:text-base md:text-lg" key={itemIndex}>
                  <p>{item.skill}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
