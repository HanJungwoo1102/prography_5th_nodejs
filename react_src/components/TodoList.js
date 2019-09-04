import React from 'react';

import Todo from './Todo';

export default class TodoList extends React.Component {
    render() {
        const arr = this.props.todoList;
        const arr2 = arr.map((todo, idx)=><Todo index={idx} title={todo.title} description={todo.description} key={idx}></Todo>)

        return (
            <div className="todo_list">
                <h1>Todo List</h1>
                {arr2}
            </div>
        );
    }
}
