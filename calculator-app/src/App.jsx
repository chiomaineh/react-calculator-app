import { useState ,useEffect } from "react";

import "./App.css";
import { BsBackspace } from "react-icons/bs";


function App() {
  const [input, setInput] = useState(() => {
    return localStorage.getItem('calcInput') || ''
  });

  useEffect (() => {
    localStorage.setItem('calcInput', input); 
  }, [input]);

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    localStorage.removeItem('calcInput')
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
};

  const handleEqual = () => {
    try {
      setInput(eval(input).toString())
    } catch {
      setInput('Error');
    };
  }

  return (
    <div className="calculator">
      <h2 className="heading">Calculator App</h2>
      <div className="display">{input || 0} </div>
      <div className="buttons">
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('*')}>*</button>

        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('+')}>+</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick= {() => handleClick('6')}>6</button>

        <button onClick={() => handleEqual('=')}>=</button>

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        
        <button class="backspace" onClick={handleBackspace}><BsBackspace /></button>
      </div>
    </div>
  );
}

export default App;
