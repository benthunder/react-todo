import React, { Component } from 'react';
import logo from './logo.svg';

import Hello from './Hello.js';
import { } from 'react-bootstrap';
import './App.css';
import { TodoItems } from './Component/TodoItems/TodoItems.js';
import { TodoList } from './Component/TodoList/TodoList.js';
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [{
                "name": "helo",
                "key": 1
            }],
            currentItem: {}
        }
        this.addItem = this.addItem.bind(this);
    }

    addItem = (item) => {
        if (null !== item && item.name != '') {
            const items = [...this.state.items,item];
            this.setState({
                items ,
                currentItem: item
            })
        }
    }


    render() {
        return (
            <div className="App">
                <TodoList addItem={this.addItem} />
                <TodoItems items={this.state.items} />
            </div>
        );
    }
}

export default App;
