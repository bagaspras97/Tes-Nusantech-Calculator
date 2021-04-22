import React from 'react';

const Input = ({ value, setValue, check, setCheck }) => {
  return (
    <div className="input">
      <input type="number" value={value} onChange={(e) => (check ? setValue(e.target.value) : setValue(e.target.value === ''))} disabled={!check} />
      <input type="checkbox" name="" id="" checked={check} onChange={(e) => setCheck(e.target.checked)} />
    </div>
  );
};

export default Input;
