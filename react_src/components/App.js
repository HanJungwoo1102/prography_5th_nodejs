import React from 'react';
import axios from 'axios';

import TodoList from './TodoList'
import Editor from './Editor'

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todoList: [],
            selectedTodo : null
        }
    }
    

    componentWillMount(){

    }
    componentDidMount(){
        this.getTodoList();
    }

    getTodoList() {
        const url = '/todoes';
        // var res = await axios.get(url);
        axios.get(url)
            .then(function(res){
                console.log(res.data);    
            })
            
    }

    render() {
        return (
            <div className="app">
                <TodoList todoList={this.state.todoList}></TodoList>
                <Editor selectedTodo={this.state.selectedTodo}></Editor>
            </div>
        );
    }
}
