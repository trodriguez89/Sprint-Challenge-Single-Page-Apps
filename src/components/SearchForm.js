import React, { useState, useEffect } from "react";

export default function SearchForm(props) {
 const [searchTerm, setSearchTerm] = useState("")
 const [searchResults, setSearchResults] = useState([])

 useEffect(() => {
  const results = props.characterArray.filter(character => character.toLowerCase().includes(searchTerm.toLowerCase())
  )
  setSearchResults(results)
 },[searchTerm])

const handleChange = event => {
  setSearchTerm(event.target.value);
}

  return (
    <section className="search-form">
      <label htmlFor="name">Search: </label>
     <form>
      <input 
      id="name"
      type="text"
      name="textfield"
      placeholder="Search"
      onChange={handleChange}
      value={searchTerm}
      />
      

     </form>
    </section>
  );
}
