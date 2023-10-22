import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const handleClick = (value) => {
        if (value === '=') {
            try {
                const result = eval(input);
                setOutput(result);
            } catch (error) {
                setOutput('Error');
            }
        } else if (value === 'C') {
            setInput('');
            setOutput('');
        } else {
            setInput(input + value);
        }
    };

    return (
        <div className="calculator">
            <h1>Calculator</h1>
            <div className="display">
                <input type="text" value={input} disabled />
                <input type="text" value={output} disabled />
            </div>
            <div className="buttons">
                <div className="row">
                    <button onClick={() => handleClick('7')}>7</button>
                    <button onClick={() => handleClick('8')}>8</button>
                    <button onClick={() => handleClick('9')}>9</button>
                    <button onClick={() => handleClick('/')}>/</button>
                </div>
                <div className="row">
                    <button onClick={() => handleClick('4')}>4</button>
                    <button onClick={() => handleClick('5')}>5</button>
                    <button onClick={() => handleClick('6')}>6</button>
                    <button onClick={() => handleClick('*')}>*</button>
                </div>
                <div className="row">
                    <button onClick={() => handleClick('1')}>1</button>
                    <button onClick={() => handleClick('2')}>2</button>
                    <button onClick={() => handleClick('3')}>3</button>
                    <button onClick={() => handleClick('-')}>-</button>
                </div>
                <div className="row">
                    <button onClick={() => handleClick('C')}>C</button>
                    <button onClick={() => handleClick('0')}>0</button>
                    <button onClick={() => handleClick('=')}>=</button>
                    <button onClick={() => handleClick('+')}>+</button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;