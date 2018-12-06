import React, { Component } from 'react';
import Building from './Building';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Building 
          floors={20}
          elevators={2}
        />
      </div>
    );
  }
}

export default App;
