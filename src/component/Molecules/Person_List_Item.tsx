import React from "react";
import "./Atoms.css";
import "../atoms/Option.tsx";

interface OptionProps{
    name: string;
}

export const TitleProps: React.FC<OptionProps> = ({name}) =>{
    return <option>{name}</option>
};