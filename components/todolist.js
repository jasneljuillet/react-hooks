import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './formtodo';

const TodoList = ({addNewList}) => {

    const [lists, setList] = useState([
        {id: uuidv4(), subject: 'Buy a nice car'},
        {id: uuidv4(), subject: 'Buy a nice shoe'},
        {id: uuidv4(), subject: 'Buy a nice Telephon'}
    ])
   
    const listrendering = () => {
        return(
            lists.map( list => <li className="text-gray-700 text-lg border-b-2" key={list.id}>{`id: ${list.id} Subject: ${list.subject}`}</li> )
        )
    }

    const addNewTodo = (newTodo) => {
        
        setList([...lists, {
            id: uuidv4(), 
            subject: newTodo
        }])
    }

    return(
        <div>
            <h1 className="text-6xl text-blue-600">Todo App</h1>
            <ul className="mt-8">{listrendering()}</ul>
            <Form lol={addNewTodo} />
        </div>
    )
}

export default TodoList