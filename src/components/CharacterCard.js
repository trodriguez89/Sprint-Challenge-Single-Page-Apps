import React from "react";
import styled from "styled-components";

const CardDivStyled = styled.div`
  border: 1px solid black;
  padding: 20px 0;
  border-radius: 5px;
  width: 40%;
  text-align: center;
  margin: 0 auto;
  font-family: 'Alata', sans-serif;
  background-color: lightslategray;
  color: white;
`;

export default function CharacterCard(props) {

  return (
    <section className ="character-list">
      <CardDivStyled>
      <img src={props.image} alt ={props.name} />
      <h2>Name: {props.name}</h2>
      <h3>Species: {props.species}</h3>
      <h3>Status: {props.status}</h3>
      </CardDivStyled>
      </section>
  );
}
