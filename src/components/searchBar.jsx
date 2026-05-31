function searchBar({searchTerm, setSearchTerm}){
    return (
        <input
            className="search-bar" 
            type="text" 
            placeholder="Search for Projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}    
        />
    )
}

export default searchBar