import projectArr from "../../Components/data"
import ProjectCard  from "../../Components/ProjectCard"
import "../Project/Project.css"
const projects = projectArr.map((ele, id)=>{
  return <ProjectCard {...ele} key={id}/>
})

function Projects() {
  return (
    <div className='proj-container'>
      <div>
        <h1 className='proj-header'>
            My Projects
        </h1>
        <div className="proj-card-container">{projects}</div>
        </div>
    </div>
  )
}

export default Projects