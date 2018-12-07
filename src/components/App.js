import React, { Component } from 'react';
import Building from './Building';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faArrowAltCircleUp, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
import './App.css';

class App extends Component {
  render() {
    library.add(faArrowAltCircleUp, faArrowAltCircleDown, faStroopwafel)
    return (
      <div className="App">
        <Building 
          floors={20}
          elevators={3}
        />
      </div>
    );
  }
}

export default App;
