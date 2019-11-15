import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import axios from "axios";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      console.log(response.data);
      setCharacters(response.data.results)
    })
    .catch(error => {
      console.log("Something went wrong!", error)
    })
  }, [])

  return (
    <section className="character-list">
      <SearchForm characterArray={characters} />
      
      <CharacterCard characterArray={characters} />
    </section>
  );
}



// {characters.map(character => (
//   <div>
//   <img src={character.image} alt ={character.image} />
//   <h2>{character.name}</h2>
//   <h3>{character.species}</h3>
//   <h3>{character.status}</h3>
//   </div>
  
// ))}