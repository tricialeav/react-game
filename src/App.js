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

  // getCards = id => {
  //   const photos = this.state.photos.filter(photos => photos.id !== id);
  //   this.setState({ photos });
  // };

  handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
      // const rand = Math.floor(Math.random * this.state.photos.length);
      // this.setState({ photos: this.state.random + rand });
    }

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
