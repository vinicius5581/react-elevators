import React, { Component } from 'react';
import Elevator from './Elevator';
import './Elevators.css';

class Elevators extends Component {
  render() {
    return (
        <div 
            className="elevators"
            style={{height: this.props.buildingHeight}}
        >
            {[...new Array(this.props.qty)].map((elevator, idx) => (
                <Elevator 
                    key={idx}
                    floorHeight={this.props.floorHeight}
                    buildingHeight={this.props.buildingHeight}
                />
            ))}                  
        </div>
    );
  }
}

export default Elevators;
