import { useParams } from "react-router-dom";

function ProjectDetails({projects}){
    const {id} = useParams()

    const project = projects.find(
        (p) => p.id === Number(id)
    )

    if (!project) return <h1>Project Not Found.</h1>

    return (
        <div>
            <h1>{project.title}</h1>
            <img src = {project.image} width = "310"/>
            <p>{project.description}</p>
        </div>
    )
}

export default ProjectDetails