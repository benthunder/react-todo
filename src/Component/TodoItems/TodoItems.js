import React from 'react';

export class TodoItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            currentItem: {}
        }
    }
    render() {
        const items = this.props.items.map( i => <li key={i.id}>{i.name}</li>);
        return <div>
            <ul>
                Todo List:
                {items}
            </ul>
        </div>
    }
}

// export default TodoItems;