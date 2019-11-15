import React from "react";

export default function CharacterCard(props) {

  return (
    <section className ="character-list">
    {props.characterArray.map(character => (
      <div>
      <img src={character.image} alt ={props.characterArray.image} />
      <h2>Name :{character.name}</h2>
      <h3>Species: {character.species}</h3>
      <h3>Status: {character.status}</h3>
      </div>
      ))}
      </section>
  );
}
