import React from 'react';

const Button = ({ operator, value1, value2, value3, operation }) => {
  return (
    <div className="operator">
      <button onClick={() => operation(value1, value2, value3, operator)}>{operator}</button>
    </div>
  );
};

export default Button;
