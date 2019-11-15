import React from "react";
import {Route, Link} from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import Header from "./components/Header.js";


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path = "/" render ={props => <WelcomePage {...props} />} />
      <Route path = "/characters" render ={props => <CharacterList {...props}/>} />
    </main>
  );
}
