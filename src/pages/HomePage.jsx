import SearchBar from "../components/searchBar"
import AddProjectForm from "../components/addProjectForm"
import ProjectList from "../components/projectList"

function Homepage({
    projects,
    addProject,
    searchTerm,
    setSearchTerm,
}) {
    return(
        <div className="app-container">
            <h1>My Project Showcase</h1>

            <SearchBar 
                searchTerm = {searchTerm}
                setSearchTerm = {setSearchTerm}
            />

            <ProjectList projects = {projects}/>

            <AddProjectForm addProject = {addProject}/>
        </div>
    )
}

export default Homepage
