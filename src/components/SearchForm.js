import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";

export default function SearchForm(props) {
const [searchTerm, setSearchTerm] = useState("")
const [searchResults, setSearchResults] = useState([])

useEffect(() => {
  const results = props.characterArray.filter(character => 
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  setSearchResults(results)
 },[searchTerm])

const handleChange = event => {
  setSearchTerm(event.target.value);
}

const submitHandler = event => {
  event.preventDefault();
}

  return (
    <section className="search-form">
      <label htmlFor="name">Search: </label>
     <form onSubmit ={submitHandler}>
      <input 
      id="name"
      type="text"
      name="textfield"
      placeholder="Search"
      onChange={handleChange}
      value={searchTerm}
      />
      </form>
      {searchResults.map(character => (
        <CharacterCard key ={character.id} image ={character.image} name={character.name} species = {character.species} status ={character.status}/>
      ))}
      
      </section>
    
  );
}
