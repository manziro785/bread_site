import './check.css';
import React, { useState, useEffect } from 'react';

export function Check() {
  const [expensesByCategory, setExpensesByCategory] = useState({});
  const [randomText, setRandomText] = useState('');

  const calculateExpensesByCategory = (expenseRows) => {
    const result = {};

    expenseRows.forEach((row) => {
      const category = row[1].value;
      const amount = parseFloat(row[2].value) || 0;
      if (result[category]) {
        result[category] += amount;
      } else {
        result[category] = amount;
      }
    });

    return result;
  };

  useEffect(() => {
    // Получение данных из Local Storage
    const savedData = JSON.parse(localStorage.getItem('savedData')) || { savedIncomeRows: [], savedExpenseRows: [] };
    const savedExpenseRows = savedData.savedExpenseRows || [];

    // Подсчет расходов по категориям
    const calculatedExpensesByCategory = calculateExpensesByCategory(savedExpenseRows);

    // Установка состояния для отображения
    setExpensesByCategory(calculatedExpensesByCategory);
  }, []);

  useEffect(() => {
    // Генерация случайного текста из предопределенных вариантов
    const textOptions = ['Текст 1', 'Текст 2', 'Текст 3', 'Текст 4'];
    const randomIndex = Math.floor(Math.random() * textOptions.length);
    const newText = textOptions[randomIndex];

    // Установка состояния для отображения
    setRandomText(newText);
  }, []);

  return (
    <>
      <div className="advice-ch">
        <p>{randomText}</p>
      </div>
      <div>
        <h2>Расходы по категориям</h2>
        <ul>
          {Object.entries(expensesByCategory).map(([category, amount]) => (
            <li key={category}>
              {category}: {amount}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Check;
