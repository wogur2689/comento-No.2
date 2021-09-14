import React from "react";
import "./Atoms.css";

type Todo = {
    name: string;
};

interface OptionProps{
    Todo: Todo;
}

export const TitleProps: React.FC<OptionProps> = ({Todo}) =>{
    return <option>{Todo.name}</option>
};