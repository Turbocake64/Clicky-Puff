import React, { Component } from 'react';
import CharacterCard from "./components/CharacterCard";
// import Navbar from "./component/Navbar";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import './App.css';

class App extends Component {
  // Setting this.state.characters to the character json array
  state = {
    characters
  };

  // Map over this.state.characters and render a CharacterCard component for each character object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Puff!</Title>
        {this.state.characters.map(character => (
          <CharacterCard
            removeFriend={this.removeFriend}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
