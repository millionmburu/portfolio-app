import HomePage from "./pages/HomePage"
import NotFound from "./pages/NotFound"
import ProjectsInfo from "./pages/ProjectsInfo"
import ProjectDetails from "./pages/ProjectsInfo"

import projectsData from "./data/projects"

import { useState } from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App(){
  const[projects,setProjects] = useState(projectsData)
  const[searchTerm, setSearchTerm] = useState("")

  function addProject(newProject){
    setProjects([...projects, newProject])
  }
  
  const filteredProjects = projects.filter ((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <HomePage
              projects={filteredProjects}
              addProject={addProject}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          }
        />

        <Route
          path="/project/:id"
          element={<ProjectDetails projects={projects} />}
        />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App