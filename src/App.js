import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Map from "../src/components/Map";
import Map2 from "../src/components/Map-2";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Mapas en React.js.</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Map />
        <Map2 />
      </div>
    );
  }
}

export default App;
