import React from 'react';

import Todo from './Todo';

export default class TodoList extends React.Component {
    render() {
        return (
            <div className="todo_list">
                <h1>Todo List</h1>
                <Todo></Todo>
            </div>
        );
    }
}
