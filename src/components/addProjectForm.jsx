import { useState } from "react";

function addProjectForm({addProject}){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    function handleSumbit(e){
        e.preventDefault()

        addProject({
            id: Date.now(),
            title, 
            description, 
        })

        setTitle("")
        setDescription("")
    }

    return(
        <form onSubmit={handleSumbit}>
            <h2>Add Project</h2>

            <input 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title..."
            />
            <input 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description..."
            />

            <button type="submit">Add</button>
        </form>
    )
}

export default addProjectForm