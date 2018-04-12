import React, { Component } from "react";
import PhotoCard from "./components/PhotoCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import photos from "./photos.json";
import "./App.css";

class App extends Component {
  state = {
    photos
  };

  handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
      // TODO create code to switch all photos on click
    }

    // TODO make scoreboard and link to click events

    render() {
      return (
        <Wrapper>
          <Title>Click Game</Title>
          {this.state.photos.map(photos => (
            <PhotoCard 
              onClick={this.handleClick}
              id={photos.id}
              key={photos.id}
              image={photos.image}
            />
          ))}
        </Wrapper>
      );
    }
  }

  export default App;
