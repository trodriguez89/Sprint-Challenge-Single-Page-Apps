import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import axios from "axios";
import styled from "styled-components";

const MainSectionStyled = styled.section`
  margin: 0 auto;
`;

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
    <MainSectionStyled>
      <SearchForm characterArray={characters}/>
      {characters.map(character => (
        <CharacterCard image={character.image} name={character.name} species={character.species} status={character.status} />
      ))}
      
    </MainSectionStyled>
  );
}

