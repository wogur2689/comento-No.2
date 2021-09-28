import React from "react";
import "./Atoms.css";

interface OptionProps{
    value: string;
    children: string;
}

function Option({value, children}: OptionProps) {
    return <Option value={value}>{children}</Option>
}

export default Option;
