import React from "react";

interface InputProps {
    text: string | undefined;
    handleEvent?: (event: any) => void;
    customSyles: React.CSSProperties;
    type: string
}


const Input: React.FC<InputProps> = ({ text, customSyles, type, handleEvent }) => {
    return <input placeholder={text} style={customSyles} type={type} onChange={handleEvent} />;
}


export default Input;