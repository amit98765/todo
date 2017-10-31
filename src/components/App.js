/*
this file serves as the base for what is going to be displayede on the screen

    the app would be divided in three parts
    Part 1 -> Add a new todo
    Part 2 -> Show the available todos
    Part 3 -> Change the filter
*/

import React from 'react';
import AddTodo from '../containers/AddTodo';
import ShowTodos from '../containers/ShowTodos';
import ChangeFilter from '../components/ChangeFilter';


const App = () => {
    return (
        <div>
            <AddTodo />
            <ShowTodos />
            <ChangeFilter />
        </div>
    );
}

export default App;