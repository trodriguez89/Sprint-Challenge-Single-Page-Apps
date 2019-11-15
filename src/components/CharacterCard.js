import React from "react";

export default function CharacterCard(props) {

  return (
    <section className ="character-list">
      <div>
      <img src={props.image} alt ={props.image} />
      <h2>Name :{props.name}</h2>
      <h3>Species: {props.species}</h3>
      <h3>Status: {props.status}</h3>
      </div>
      </section>
  );
}
