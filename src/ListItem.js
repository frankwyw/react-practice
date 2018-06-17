import React, { Component } from 'react';
import './App.css';


class ListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>{this.props["value"]}</li>
        );
    }
}


export default ListItem;