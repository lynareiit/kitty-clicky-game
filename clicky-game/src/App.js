import React, { Component } from 'react';
import Score from "./Score";
import Card from "./Card";
import CardBox from "./CardBox";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
// import Body from "./components/ImageCards";
// import Wrapper from "./components/Wrapper";
import kitty from "./kitties.json";
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    kitties: kitty,
    score: 0,
    wins: 0,
    losses: 0,
    clicks: [],
    message: " "
  };

  componentDidMount= () => {
    this.startGame();
    this.shuffleKitties();
  };

  // create a function that starts the game
  startGame = () => {
    const kitties = this.state.kitties.map(kitties => {
      let new_kitty = kitty;
      new_kitty.clicked = 0;
      return new_kitty;
    });
    this.setState({kitties: kitties});
    this.setState({score: 0});
    this.shuffleKitties();
  };

  // create a function to shuffle kitties
  shuffleKitties = () => {
    let kitties = this.state.kitties;
    let x = kitties.length -1;
    for(let i = x; i > 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1));
      var temp = kitties [i];
      kitties[i] = kitties [rand];
      kitties[rand] = temp;
    }
    // return array;
    this.setState({ kitties: kitties });
  };

  // set a function for clicks - create the game here
  // If your score reaches 12 (all kitties guessed), you win. Notify player. Add to number of wins.
  // If you chose a correct answer, adds to score. Notify player. Add to number to score
  clickKitties = id => {
    let kitties = this.state.kitties;
    let n = kitties.length;
    for (let i = 0; i < n; i++ ) {
      if (kitties[i].id === id ) {
        if (kitties[i].id === id ) {
          // set this.States for component
          this.setState({score: 0});
          this.setState({wins: 0});
          this.setState({losses: 0});
          this.setState({clicks: []});
          this.setState({message: " "});
          this.startGame();
        }
        else {
          let score = this.state.score;
          score++;
          if ( score === 12 ) {
            this.setState({ message: "You won!" });
            this.setState({ wins: this.state.wins + 1 });
            this.startGame();
          }
          else {
            this.setState({ message: "That's correct!" });
            this.setState({ score: score });
            kitties[i].clicked++;
            this.setState({ kitties: kitties });
            this.shuffleKitties();
          }
        }
        // exit the for-loop
        break;
      }
    }
  };

  render() {
    return (
      <div>
        <Score
        msg = {this.state.message}
        score = {this.state.score}
        wins = {this.state.wins}
        losses = {this.state.losses}
        />
        <Jumbotron/>
        <CardBox>
          {this.state.kitties.map(kitty => (
            <Card
              clickKitty = {this.clickKitty}
              id={kitty.id}
              key={kitty.id}
              image={require('../public' + kitty.image)}
            />
          ))}
        </CardBox>
        <Footer/>
      </div>
    );
  }
}

export default App;
