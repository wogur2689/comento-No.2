import React from 'react';
import { TodoListItem } from './TodoListItem';

type Todo = {
  name: string;
  money: string;
  text: string;
};

const todos: Array<Todo> = [{name: "멘토1", money: "0", text: " 원"}, {name: "멘토2", money: "0", text: " 원"}, 
{name: "멘토3", money: "0", text: " 원"}, {name: "멘토4", money: "0", text: " 원"}, {name: "멘토5", money: "0", text: " 원"}];

const App: React.FC = () => {
  return (
    <ul>
    <React.Fragment>
      <TodoListItem todo={todos[0]}/>
      <TodoListItem todo={todos[1]}/>
      <TodoListItem todo={todos[2]}/>
      <TodoListItem todo={todos[3]}/>
      <TodoListItem todo={todos[4]}/>
    </React.Fragment>
    </ul>
   );
}

export default App;