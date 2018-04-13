import React, { Component } from "react";
import PhotoCard from "./components/PhotoCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import photos from "./photos.json";
import "./App.css";

class App extends Component {
  state = {
    photos,
    clicked: []
  };

  handleClick(e) {
      e.preventDefault();
      console.log('clicked on: '+e.target.id);
      console.log('The link was clicked.');
      let clicked = this.state.clicked;

      if(clicked.indexOf(e.target.id) > -1) {
        console.log("Already clicked: "+e.target.id);
      } else {
        clicked.push(e.target.id);
        this.setState({ clicked: clicked });
      }
    }

    // TODO switch photos when clicked, add/remove points

    render() {
      return (
        <Wrapper>
          <Title>Click Game</Title>
          {this.state.photos.map(photos => (
            <PhotoCard 
              onClick={this.handleClick.bind(this)}
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
