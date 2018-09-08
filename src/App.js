import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
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
      topScore: 0
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
    console.log("Pre-Cards "+this.state.score);
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

    this.setState({ score: this.state.score + 1 });
    console.log(this.state.score);
  };

  handleDecrement = () => {
    const topScore = this.state.score;
    this.setState({ topScore});
    console.log(this.state.topScore);
    console.log(this.state.score);
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Nav />
        <Wrapper>
          <Title>Friends List</Title>
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
