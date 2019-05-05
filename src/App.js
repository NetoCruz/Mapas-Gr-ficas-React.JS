import React, { Component } from "react";
import { Container } from "./styled-components";
import logo from "./logo.svg";
import "./App.css";
import Map from "../src/components/Map";
import Map2 from "../src/components/Map-2";
import Nav from "../src/components/Nav";
import Dash from "../src/components/dashboard";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "./components/chart";
import "./charts-theme";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Chart /> <Dash />
        <Map />
        <Map2 />
        {/* <header className="App-header">
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
        
         */}
      </div>
    );
  }
}

export default App;
