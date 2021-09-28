import React from "react";
import "./Atoms.css";

interface InputProps {
    type: string;
}

function Input({type}: InputProps) {
    return <input type={type}/>
};

export default Input;