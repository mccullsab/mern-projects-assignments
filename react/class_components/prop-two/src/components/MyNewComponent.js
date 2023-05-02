import React, { Component } from 'react';
    
    
class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    flipSwitch = () => {
        this.setState({age: this.state.age + 1})
        // if( this.state.age === "On" ) {
        //     this.setState({ age: "Off" });
        // } else {
        //     this.setState({ age: "On" });
        // }
    }  
    render() {
        return (
        <div>
        <h1>{this.props.lastName}, {this.props.firstName}</h1>
        <p>Age: {this.props.age}</p>
        <p>Hair Color: {this.props.hairColor}</p>
        <p>This button is currently {this.state.age}</p>
        <button onClick={ this.flipSwitch }>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
        </div>
        );
    }

}
    
export default PersonCard;
