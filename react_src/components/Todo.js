import React from 'react';

export default class Todo extends React.Component {
    render() {
        return (
            <div className="todo">
                <p>{this.props.index+1} . {this.props.title}</p>
            </div>
        );
    }
}
