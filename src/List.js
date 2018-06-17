import React, { Component } from 'react';
import ListItem from "./ListItem";


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
                        <ListItem value = {this.state.value++}/>
                        <ListItem value = {this.state.value++}/>
                        <ListItem value = {this.state.value++}/>
                    </ol>
                </p>
            </div>
        );
    }
}


export default List;