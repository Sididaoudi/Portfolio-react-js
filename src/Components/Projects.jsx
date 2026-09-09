// liste des boutons sous forme de tableau
import Data_Projects from "../Data/Data_Projects";

const listProjects = [...Data_Projects]; // je fais une copie de mon tableau
import ProjectCard from "../Components/ProjectCard";


const projectsList = ["Tous les projets","Univers manga", "Un monde sans gluten"];



function Projects() {
    
    return (
      <section className="">
        {/*Div container */}
        <div className="">
          <div className="flex justify-center flex-col mb-6">
            <h2 className="text-lg font-bold mb-3 text-center">Portfolio</h2>
          </div>
          {/*Div Boutons liens projets */}
          <div className="flex gap-4">
            {projectsList.map((button) => (
              <button
                key={button.id}
                className="cursor-pointer mb-12 text-slate-600 hover:text-red-600"
              >
                {button}
              </button>
            ))}
          </div>

          <div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
              {listProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  img={project.img}
                  title={project.title}
                  urlWebsite={project.urlWebsite}
                  description={project.description}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
};

export default Projects;