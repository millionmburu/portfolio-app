function searchBar({searchTerm, setSearchTerm}){
    return (
        <input 
            type="text" 
            placeholder="Search for Projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}    
        />
    )
}

export default searchBar