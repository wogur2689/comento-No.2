import React, { ButtonHTMLAttributes, forwardRef } from "react";
import "./Atoms.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{}


const button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({onClick}, ref) => (
      <button type="submit" onClick={onClick}>입력</button>
    )
);

export default button;

   
