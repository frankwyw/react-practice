import React, { Component } from 'react';
import ListItem from "./ListItem";


const numbers = [1, 2, 3, 4, 5];

const listItems = numbers.map((number) =>
    <li key = {number}>{number}</li>
);

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value : 0,
            isToggleOn: true
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // this.state.isToggleOn = !this.state.isToggleOn
        // this.forceUpdate()

        this.setState(prevState => ({
            value: this.state.value,
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <div className="List">
                <p className="List">
                    <ol>
                        {/*<button  onClick={this.handleClick()}>  {this.state.isToggleOn ? 'ON' : 'OFF'} </button> ERROR */}
                        <button  onClick={this.handleClick}>  {this.state.isToggleOn ? 'ON' : 'OFF'} </button>

                        {this.state.isToggleOn ? <li>true</li> : <li>false</li>}
                        <ListItem value = {this.state.value++}/>
                        <ListItem value = {this.state.value++}/>
                        <ListItem value = {this.state.value++}/>
                        <br/>
                        {listItems}
                    </ol>
                </p>
            </div>
        );
    }
}


export default List;