import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const HeaderStyle = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
`;

const WelcomeButtonStyle = styled.div`
  border: 1px solid black;
  padding: 5px;
  text-decoration: none;
  border-radius: 5px;
  color: white;
  background-color: black;
  width: 15%;
  text-align: center;
  margin: 0 auto;
`;

const ButtonDiv = styled.div`
  border: 2px solid red;
`;

export default function WelcomePage() {
  return (
    <HeaderStyle>
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        
        <Link to = "/characters">
      <WelcomeButtonStyle>See Characters</WelcomeButtonStyle>
      </Link>
      
      </header>
    </HeaderStyle>
  
  );
}
