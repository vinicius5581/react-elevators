import React, { Component } from 'react';
import './Floor.css';

class Floor extends Component {
  render() {
    return (
        <div className="floor">
            {this.props.label}
        </div>
    );
  }
}

export default Floor;
