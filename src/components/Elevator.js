import React, { Component } from 'react';
import './Elevator.css';

class Elevator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFloor: 1,
            goinToFloor: null,
            elevatorMovement: null,
            floorsWaitingUp : [],
            floorsWaitingDown: []
        }
    }
    goToFloor(floor) {
        this.setState({
            goinToFloor: floor
        })
        this.elevatorMovement = setInterval(() => {
            this.setState(prevState => {
                return {currentFloor: prevState.currentFloor + 0.5}
            })
        }, 200);  
    }

    componentDidMount() {
        this.goToFloor(10);
    }

    componentDidUpdate() {
        if (this.state.currentFloor > this.state.goinToFloor) { 
            clearTimeout(this.elevatorMovement);
        }
    }

    render() {        
        console.log('CURRENT FLOOR', this.state.currentFloor);
        return (
            <div 
            className="elevatorShaft"
                style={{
                    height: this.props.buildingHeight
                }}
            >                
                <div 
                    className="elevator"
                    style={{
                        height: this.props.floorHeight,
                        bottom: this.props.floorHeight * this.state.currentFloor                        
                    }}
                >
                    
                </div>                
            </div>         
        );
    }
}

export default Elevator;
