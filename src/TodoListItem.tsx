import React from 'react';
import "./TodoListItem.css";

interface TodoListItemProps{
    todo: Todo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({todo}) =>{
    return <li>
        <div id="image"></div>
        <span>
        {todo.name}
        </span>
        <span>
        {todo.money}
        </span>
        <span>
        {todo.text}
        </span></li>
};