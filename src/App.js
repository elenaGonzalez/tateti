import React, { Component } from 'react';
import './App.css';
import Game from "./components/Game"

class App extends Component {
  render() {
    return(
    <div>
         <nav class="navbar navbar-dark bg-primary">
          <a class="navbar-brand" href="#">TA TE TI</a>
        </nav>  
      <div className="App container-fluid">
          <div className="content" >
            <div id="#game">
                <Game />
            </div>
        </div>
      </div>
    </div>
    )
  }
}

export default App;
