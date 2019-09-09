import React from 'react';
import {
    Form,
    Row,
    Col,
    Container
} from 'react-bootstrap/InputGroup';

export class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const item = {
            "name":this.refs.itemInput.value,
            "id":Date.now()
        }
        this.props.addItem(item)

        this.refs.itemInput.value = "";
    }

    render() {
        return <div>
            <form onSubmit={this.handleSubmit}>
                <input ref="itemInput" />
                <button type="submit"> Add </button>
            </form>
        </div>
    }
}