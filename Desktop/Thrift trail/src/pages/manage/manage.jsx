
import React, { useState } from 'react';
import './manage.css'
import { NavLink } from 'react-router-dom'
import { Autoriz } from '../main-page/autoriz/autoriz.jsx'


export function Manage() {
  const [inputRows, setInputRows] = useState([createInputRow()]);
  const [timeValue, setTimeValue] = useState(getCurrentDate());

  function getCurrentDate() {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`;
    return formattedDate; 
  }

  function createInputRow() {
    return Array.from({ length: 3 }, (_, index) => ({
      id: index,
      type: index === 0 ? 'time-input' : index === 1 ? 'second-input' : 'third-input',
      placeholder: `Введите текст ${index + 1}`,
      value: '',
    }));
  }

  const addInput = () => {
    setInputRows((prevRows) => [...prevRows, createInputRow()]);
    setTimeValue(getCurrentDate());
  };

  const handleInputChange = (e, rowIndex, colIndex) => {
    setInputRows((prevRows) =>
      prevRows.map((row, i) =>
        i === rowIndex
          ? row.map((col, j) => (j === colIndex ? { ...col, value: e.target.value } : col))
          : row
      )
    );
  };

  return (
    <>
    <div className="header-manage">
        <div className="logo-manage">
          <NavLink to='/'>
            <img src="./src/assets/photo/logo.svg" alt="" />
          </NavLink>
        </div>
        <div className="login-signup">
         <Autoriz/>
        </div>
      </div>

      <div className="money">
        <div className="balance">
          <div className="title-balance">
            Balance
          </div>
          <div className="fin">
            <div className="finance" id='balance'>
              0
            </div>
            <div className="valute">
              KGS
            </div>

          </div>
        </div>
      </div>
      <div className="incomes-box">
        <div className="incomes">
          <div className="title-incomes">Incomes</div>
          <div className="info-incomes">
            {inputRows.map((row, rowIndex) => (
              <div key={rowIndex} className="input-row">
                {row.map((col) => (
                  <div key={col.id} className={`input-group ${col.type}`}>
                    <input
                      type="text"
                      placeholder={col.placeholder}
                      value={col.id === 0 ? timeValue : col.value}
                      onChange={(e) => handleInputChange(e, rowIndex, col.id)}
                    />
                    {col.id === 0 && <span>KGS</span>}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="btn-add" onClick={addInput}>
            Add
          </div>
        </div>
      </div>
      <div className="expendes-box">
        <div className="expendes">
          <div className="title-expendes">
            Expenses
          </div>
          <div className="btn-add1">
            Add
          </div>
        </div>
      </div>

      <div className="check">
        <div className="check-box">
          <div className="check-text">
            We will help you calculate <br></br>
            and give advice !
          </div>
          <div className="btn-calc">
            <NavLink to='/check' className='btn-calculation'>
              Make a calculation
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}
