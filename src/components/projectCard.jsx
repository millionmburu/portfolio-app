import { Link } from "react-router-dom";

function projectCard({project}){
    return(
        <div>
            <img src={project.image} width = "300" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <link to={`/project/${project.id}`}>
                Check out Details 
            </link>

        </div>
    )
}

export default projectCard