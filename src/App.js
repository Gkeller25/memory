import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";

import friends from "./friends.json";
import Nav from "./components/Nav";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  //maybe have another array to hold the cards that have been clicked on?
  constructor(props) {
    super(props);
    this.state = {
      friends: this.shuffleArray(friends),
      clickedCards: friends,
      score: 0,
      topScore: 0,
      message: "Click Images to Start!"
    };

  }


  shuffleArray(friends) {
    for (let i = friends.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [friends[i], friends[j]] = [friends[j], friends[i]];
    }
    return friends;
  };

  onClicked = (id) => {
    this.setState({
      friends: this.shuffleArray(friends)
    });
    return this.checkCards(id);
  }

  

  checkCards = id => {
    //put conditional here?
    const Cards = this.state.clickedCards;
    const obj = Cards.find(function (obj) { return obj.id === id; });
    
if(obj !== undefined){
    console.log(obj);
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const clickedCards = this.state.clickedCards.filter(clickedCard => clickedCard.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ clickedCards,});
    this.handleIncrement();
} else {
return this.handleDecrement();
}
  };
  
  handleIncrement = () => {
    this.setState({ score: this.state.score + 1,
    message: "You guessed correctly!"
    });
   
  };

  handleDecrement = () => {
    const topScore = this.state.score;
    const score = 0;

if(topScore > this.state.topScore){
    this.setState({ topScore,
    score: score});
    this.handleReset();
} else {
   this.setState({ score: score });
   this.handleReset();
}

  };




  handleReset = () => {
    const clickedCards = this.state.friends;
    this.setState({ clickedCards });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Nav
        score={this.state.score}
        topScore={this.state.topScore}
        message={this.state.message}
        />
        <Wrapper>
          
          {this.state.friends.map(friend => (
            
            <FriendCard
              onClicked={this.onClicked}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              homeworld={friend.homeworld}
            />
          
          ))}
        </Wrapper>
      </div>
    );
    
  }
}

export default App;
