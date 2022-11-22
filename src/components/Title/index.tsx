import React from "react";

interface TitleProps {
  text: string | null;
  customSyles: React.CSSProperties;
}

const Title: React.FC<TitleProps> = ({ text, customSyles }) => {
  return <div style={customSyles}>{text} </div>;
};

export default Title;
