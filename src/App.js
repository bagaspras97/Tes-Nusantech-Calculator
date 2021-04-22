import React, { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [result, setResult] = useState('');

  const checkCheckboxActive = () => {
    const arrCheck = [check1, check2, check3];
    const checkActive = arrCheck.filter((arr) => arr === true);
    if (checkActive.length <= 1) {
      alert('Harap ceklis bagian checkbox minimal 2');
    }
  };

  const operation = (value1, value2, value3, operator) => {
    const setNewValue = (value) => {
      if (check1 === false) {
        setValue1(value);
      }

      if (check2 === false) {
        setValue2(value);
      }

      if (check3 === false) {
        setValue3(value);
      }

      if (value1 !== '') {
        value1 = parseInt(value1);
      }

      if (value2 !== '') {
        value2 = parseInt(value2);
      }

      if (value3 !== '') {
        value3 = parseInt(value3);
      }
    };

    let result = 0;

    switch (operator) {
      case '+':
        checkCheckboxActive();
        setNewValue('0');
        setResult((result += value1 + value2 + value3));
        break;
      case '-':
        checkCheckboxActive();
        setNewValue('0');
        setResult((result += value1 - value2 - value3));
        break;
      case '/':
        checkCheckboxActive();
        setNewValue('1');
        setResult((result += value1 / value2 / value3).toFixed(2));
        break;
      case 'x':
        checkCheckboxActive();
        setNewValue('0');
        setResult((result += value1 * value2 * value3));
        break;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <h1>Kalkulator</h1>
      <div className="container">
        <div className="input-wrapper">
          <Input value={value1} setValue={setValue1} check={check1} setCheck={setCheck1} />
          <Input value={value2} setValue={setValue2} check={check2} setCheck={setCheck2} />
          <Input value={value3} setValue={setValue3} check={check3} setCheck={setCheck3} />
        </div>
        <div className="operator-wrapper">
          <Button operator="+" operation={operation} value1={value1} value2={value2} value3={value3} result={result} setResult={setResult} />
          <Button operator="-" operation={operation} value1={value1} value2={value2} value3={value3} result={result} setResult={setResult} />
          <Button operator="/" operation={operation} value1={value1} value2={value2} value3={value3} result={result} setResult={setResult} />
          <Button operator="x" operation={operation} value1={value1} value2={value2} value3={value3} result={result} setResult={setResult} />
        </div>
        <hr />
        <div className="result">
          <h2>Hasil:</h2>
          <h2>{result[0] === '0' && result[1] !== '.' ? result.slice(1) : result}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
