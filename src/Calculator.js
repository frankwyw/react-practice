import React, { Component } from 'react';

function convert(state, type) {
    if (state == "" ) {
        return state;
    }

    if (type == "A") {
        return state.event;
    } else {
        return parseInt(state.event) / 10;
    }
}

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleA = this.handleA.bind(this);
        this.handleB = this.handleB.bind(this);
        this.state = {temperature: '', scale: 'A'};
    }

    handleA(event) {
        this.setState({temperature: {event}, scale: 'A'})
    }

    handleB(event) {
        this.setState({temperature: {event}, scale: 'B'})
    }

    render() {
        return (<p>
            <Input type = "A" handleInput = {this.handleA} value = {convert(this.state.temperature, "A")} />
            <Input type = "B" handleInput = {this.handleB} value = {convert(this.state.temperature, "B")} />
        </p>)
    }
}

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        this.props.handleInput(event.target.value)
    }

    render() {
        return (<fieldset>
            <legend>Enter temperature in {this.props.type}:</legend>
            <input value={this.props.value}
                   onChange={this.handleInput} />
        </fieldset>)
    }
}