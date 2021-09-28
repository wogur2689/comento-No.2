import React from "react";
import Option from "../atoms/Option";
import Input from "../atoms/Input";
import Span from "../atoms/Span";
import button from"../atoms/button";

interface InputButtonProps {
    type: string;
}

function InputButton({type}:InputButtonProps) {
    return (
        <div>
            <Input type={type}/>
            <Span>원</Span>
            <button type="submit"></button>
        </div>
    );
}

export default InputButton;