import React from "react";
import "./Atoms.css";

interface TitleProps{
    Title: string;
}

export const TitleProps: React.FC<TitleProps> = ({Title}) =>{
    return <h1>{Title}</h1>
};