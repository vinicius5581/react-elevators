import React, { Component } from 'react';
import Elevator from './Elevator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Elevators.css';

class Elevators extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elevators: [...new Array(this.props.elevatorsQty)].map(elevator => ({
                currentFloor: 0,
                targetFloor: 0,
                movement: 'stopped',                
            })),
            floorsBtns: [...new Array(this.props.floorsQty + 1)].map(floor => ({
                up: {
                    state: 'off',
                    requestedTime: new Date(),
                }, 
                down:  {
                    state: 'off',
                    requestedTime: new Date(),
                },
            }))
        }
    }

    render() {
        return (
            <div 
                className="elevators"
                style={{height: this.props.buildingHeight}}
            >
                <div 
                    className="floorsBtns"
                    style={{
                        height: this.props.buildingHeight
                    }}
                >
                    {[... new Array(this.props.floorsQty + 1)].map(floor => (
                        <div 
                            className="floorBtns"
                            style={{
                                height: this.props.floorHeight
                            }}
                        >
                            <button>
                                <FontAwesomeIcon 
                                    icon="arrow-alt-circle-up" 
                                    className='btnUp'
                                />
                            </button>
                            <button>
                                <FontAwesomeIcon 
                                    icon="arrow-alt-circle-down"
                                    className='btnDown'
                                />
                            </button>
                        </div>
                    ))}
                </div>
                {[...new Array(this.props.elevatorsQty)].map((elevator, idx) => (
                    <Elevator 
                        key={idx}
                        floorsQty={this.props.floorsQty}
                        floorHeight={this.props.floorHeight}
                        buildingHeight={this.props.buildingHeight}
                    />
                ))}                  
            </div>
        );
    }
}

export default Elevators;
