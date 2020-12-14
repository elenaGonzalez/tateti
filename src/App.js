import React, { Component } from 'react';
import './App.css';
import Game from "./components/Game"

class App extends Component {
  render() {
    return(
      <div className="App container-fluid">
      <div className="jumbotron jumbotron-fluid ">
          <div className="container">
             <h1 className="text-info">TA TE TI </h1>
         </div>
      </div>
      <div >
      <div id="#game">
          <Game />
      </div>
     </div>
     </div>

    )
  }
}

export default App;
