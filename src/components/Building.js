import React, { Component } from 'react';
import Floor from './Floor';
import Elevators from './Elevators';
import './Building.css';

class Building extends Component {
  constructor(props) {
    super(props);
    this.building = React.createRef();
    this.state = {
      buildingHeight: 0
    }
  }

  componentDidMount () {
    this.setState({
      buildingHeight: this.building.current.offsetHeight,
      floorHeight: this.building.current.offsetHeight / this.props.floors
    })
  }

  render() {
    return (
        <div 
          ref={this.building}
          className="building"
        >
          <div>
            {[...new Array(this.props.floors + 1)].map((floor, idx) => (
              <Floor 
                key={idx}
                label={this.props.floors - idx === 0 ? 'T' : this.props.floors - idx}
               />
            ))} 
            <Elevators 
              buildingHeight={this.state.buildingHeight}
              floorHeight={this.state.floorHeight}
              qty={this.props.elevators}
            />
          </div>                    
        </div>
    );
  }
}

export default Building;
