import React from "react";
import "./Atoms.css";

interface InputProps{
    type: string;
}

export const InputProps: React.FC<InputProps> = ({type}) =>{
    return <input type={type}/>
};