import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";
import {Link} from "react-router-dom";

const LabelStyled = styled.label`
  
  width: 35%;
`;

const FormDiv = styled.div`
  
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%:
`
const HomeButtonStyle = styled.div`
  border: 1px solid black;
  padding: 5px;
  text-decoration: none;
  border-radius: 5px;
  color: white;
  background-color: black;
`;
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
      <FormDiv>
      <LabelStyled htmlFor="name">Search: 
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
      
      </LabelStyled>
      <Link to="/">
      <HomeButtonStyle>Home</HomeButtonStyle>
      </Link>
      </FormDiv>
      {searchResults.map(character => (
        <CharacterCard key ={character.id} image ={character.image} name={character.name} species = {character.species} status ={character.status}/>
      ))}
      
      </section>
    
  );
}
