import React, { Component } from 'react';
import CharacterCard from "./components/CharacterCard";
import Navbar from "./components/Navbar";
// import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import './App.css';

class App extends Component {
  // Setting this.state.characters to the character json array
  // Setting score, losses, and highScore to 0 for the start of each game
  state = {
    characters,
    clicked: false,
    score: 0,
    losses: 0,
    highScore: 0,
    guesses: []
  };

  componentWillMount() {
    this.shuffle(characters);
  };

  shuffle(arr) {
    var j, x, i;
    for (i = arr.length -1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = arr[i];
      arr[i] = arr[j];
      arr[j] = x
    }
    return arr;
  };

  handleBtnClick = characterId => {
    // cloning the old state and making a new state
    const newState = {...this.state};

    if(newState.guesses.includes(characterId)) {
      console.log("You lose");
      newState.losses = newState.losses +1;
      newState.guesses = [];
      newState.score = 0
    }
    else
    { newState.score = newState.score +1;
      newState.guesses.push(characterId)
    }
    // copying over the characters array
    this.shuffle(characters);

    if (newState.score > newState.highScore) {
      newState.highScore = newState.score
    }

    this.setState(newState);
  }


  render() {
    return (
      <div className="background">
        {/* Setting the score, losses, & highScore in the Navbar */}
        <Navbar 
        score = {this.state.score}
        losses = {this.state.losses}
        highScore = {this.state.highScore}>
        </Navbar>

      <Wrapper>
        {/* <Title>Clicky Puff!</Title> */}
        {/* Map over this.state.characters and render a CharacterCard component for each character object */}
        {this.state.characters.map(character => (
          <CharacterCard 
            handleBtnClick={this.handleBtnClick}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}

          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
