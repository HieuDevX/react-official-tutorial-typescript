import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import ShoppingList from "./components/shoppinglist/ShoppingList";
import Game from "./components/tic-tac-toe/Game";

class App extends Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {/* <ShoppingList /> */}
        <Game />
      </div>
    );
  }
}

export default App;
