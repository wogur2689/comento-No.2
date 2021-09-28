import React, {ChangeEvent} from "react";
import Option from "../atoms/Option";

interface SelectProps{
    nameList: string[];
    value: string;
    change: (e: ChangeEvent<HTMLSelectElement>) => void;
}

function Select({nameList, value, change}:SelectProps) {
    return (
        <select value={value} onChange={change}>
            {nameList.map((name: string) => (
                <Option key={name} value={name}>
                    {name}
                </Option>
            ))}
        </select>
    );
}

export default Select;