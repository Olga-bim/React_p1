import React, { useState, useEffect } from 'react';
import Hello from './Hello'; // Предполагаем, что Hello — это компонент
import Home from './Home';   // Предполагаем, что Home — это компонент

const App = () => {
      const [x, setx] = useState(0);
      const [y, sety] = useState(0);
   
      const [results, setResults] = useState({ sum: 0, min: 0, minu: 0 });
      const myStyle = {color: "blue"}
      const [color, setColor] = useState("black");

      useEffect(() => {
        setResults({
          sum: x + y,
          min: x - y,
          minu: y - x,
        });
      }, [x, y]);


     // Функция для генерации случайного цвета
  const getRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return randomColor;
  };

  // Получение цвета на основе значения
  const getColor = (value) => {
    return value > 0 ? getRandomColor() : value < 0 ? getRandomColor() : 'black';
  };

  return (
    <div>
       <h1 style={{ color: "red" }}>x = {x}</h1>
      <h1 style={ myStyle }>y = {y}</h1>
      <h1 style={{ color: getColor(results.sum) }}>x + y: {results.sum}</h1>
      <h1 style={{ color: getColor(results.min) }}>x - y: {results.min}</h1>
      <h1 style={{ color: getColor(results.minu) }}>y - x: {results.minu}</h1>

      <button onClick={() => setx(x + 1)}>x add 1</button>
      <button onClick={() => sety(y + 1)}>y add 1</button>
      <button onClick={() => { setx(0); sety(0); }}>Reset</button>

      <Hello />
      <Home />
    </div>
  );
};

export default App;
