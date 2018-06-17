import React, { Component } from 'react';
import ListItem from "./ListItem";
import './App.css';


class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value : 0
        }
    }

    render() {
        return (
            <div className="List">
                <p className="List">
                    <ol>
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