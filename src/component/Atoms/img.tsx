import React from "react";
import "./Atoms.css";

interface imgProps{
    src: string;
    alt: string;
}

function image({src, alt}: imgProps) {
    return (
        <img src={src} alt={alt}></img>
    );
}

export default image;
