import React from "react";

const Button = (props) => {
  const { label } = props;
  const className = props.className
    ? "ui button " + props.className
    : "ui button";
  return (
    <div {...props} className={className}>
      {label}
    </div>
  );
};

export default Button;

// className={`ui button ${className || ''}`}
