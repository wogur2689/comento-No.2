import React, { ButtonHTMLAttributes } from "react";
import "./Atoms.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{}


export const ButtonProps: React.FC<ButtonProps> = ({onClick}) =>{
    return <button type="submit" onClick={onClick}>입력</button>
};