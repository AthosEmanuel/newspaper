import React from "react";
import './style.css'

interface CardProps {
    title: string | undefined;
    body: string | undefined;
    handleEvent?: () => void;
    customStyles?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ title, body, customStyles, handleEvent }) => {
    return (
        <div className="cardBody" onClick={handleEvent}>
            <h3 style={{ textAlign: 'center' }}>{title}</h3>
            <label>{body}</label>
        </div>
    );
};

export default Card;
