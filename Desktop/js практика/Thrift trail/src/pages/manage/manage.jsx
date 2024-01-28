import React, { useState } from 'react';
import './manage.css';
import { NavLink } from 'react-router-dom';
import { Autoriz } from '../main-page/autoriz/autoriz.jsx';

export function Manage() {
  function getCurrentDate() {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`;
    return formattedDate;
  }

  function createInputRow() {
    return Array.from({ length: 3 }, (_, index) => ({
      id: index,
      type: index === 0 ? 'time' : index === 1 ? 'text' : 'number',
      placeholder: ` ${index === 0 ? 'время' : index === 1 ? 'any notes' : 'income'}`,
      value: '',
      className: `input-${index === 0 ? 'time' : index === 1 ? 'text' : 'number'}`,
      isDeleted: false,
    }));
  }

  function createExpenseInputRow() {
    return Array.from({ length: 3 }, (_, index) => ({
      id: index,
      type: index === 0 ? 'time' : index === 1 ? 'selector' : 'number',
      placeholder: ` ${index === 0 ? 'время' : index === 1 ? 'категория' : 'expense'}`,
      value: '',
      className: `input-${index === 0 ? 'time1' : index === 1 ? 'selector1' : 'number1'}`,
      isDeleted: false,
    }));
  }

  const [inputRows, setInputRows] = useState([createInputRow()]);
  const [incomeRows, setIncomeRows] = useState([createInputRow()]);
  const [expenseRows, setExpenseRows] = useState([createExpenseInputRow()]);
  const [timeValue, setTimeValue] = useState(getCurrentDate());
  const [areInputsVisible, setInputsVisible] = useState(false);
  const [areExpenseInputsVisible, setExpenseInputsVisible] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('KGS');
  const [savedRows, setSavedRows] = useState([]);
  const [savedIncomeRows, setSavedIncomeRows] = useState([]);
  const [savedExpenseRows, setSavedExpenseRows] = useState([]);
  const [rowStatus, setRowStatus] = useState('editable');
  const [deletedRows, setDeletedRows] = useState([]);


  const handleInputChange = (e, rowIndex, colIndex, isIncome) => {
    if (isIncome) {
      setIncomeRows((prevRows) =>
        prevRows.map((row, i) =>
          i === rowIndex
            ? row.map((col, j) => {
                if (j === colIndex) {
                  let value = e.target.value;

                  if (col.type === 'number') {
                    value = value === '' ? '' : `${value}`;
                  }

                  return { ...col, value: value };
                } else {
                  return col;
                }
              })
            : row
        )
      );
    } else {
      setExpenseRows((prevRows) =>
        prevRows.map((row, i) =>
          i === rowIndex
            ? row.map((col, j) => {
                if (j === colIndex) {
                  let value = e.target.value;

                  if (col.type === 'number') {
                    value = value === '' ? '' : `${value}`;
                  }

                  return { ...col, value: value };
                } else {
                  return col;
                }
              })
            : row
        )
      );
    }
  };

  const handleMarkForDeletion = (rowIndex, isIncome) => {
    if (isIncome) {
      setIncomeRows((prevRows) =>
        prevRows.map((row, i) =>
          i === rowIndex
            ? row.map((col) => ({ ...col, isDeleted: !col.isSaved && !col.isDeleted }))
            : row
        )
      );
    } else {
      setExpenseRows((prevRows) =>
        prevRows.map((row, i) =>
          i === rowIndex
            ? row.map((col) => ({ ...col, isDeleted: !col.isSaved && !col.isDeleted }))
            : row
        )
      );
    }
  };

  const handleSaveRow = (rowIndex, isIncome) => {
    if (isIncome) {
      setIncomeRows((prevRows) =>
        prevRows.map((row, i) =>
          i === rowIndex
            ? row.map((col) => ({ ...col, isSaved: true }))
            : row
        )
      );
      setSavedIncomeRows((prevSavedRows) => [
        ...prevSavedRows,
        incomeRows[rowIndex].map((col) => ({ ...col })),
      ]);
    } else {
      setExpenseRows((prevRows) =>
        prevRows.map((row, i) =>
          i === rowIndex
            ? row.map((col) => ({ ...col, isSaved: true }))
            : row
        )
      );

      setSavedExpenseRows((prevSavedRows) => [
        ...prevSavedRows,
        expenseRows[rowIndex].map((col) => ({ ...col })),
      ]);
    }
  };

  const canAddInput = inputRows.every((row) => row[2].value !== '');

  const addInput = () => {
    if (canAddInput) {
      setInputRows((prevRows) => [...prevRows, createInputRow()]);
      setInputsVisible(true);
    } else {
      alert('Fill in all fields of the current line before adding a new one.');
    }
  };

  const calculateTotal = (savedIncomeRows, savedExpenseRows) => {
    const totalIncome = savedIncomeRows.reduce((acc, row) => {
      const value = parseFloat(row[2].value) || 0;
      return acc + value;
    }, 0);
  
    const totalExpense = savedExpenseRows.reduce((acc, row) => {
      const value = parseFloat(row[2].value) || 0;
      return acc + value;
    }, 0);
  
    const totalBalance = totalIncome - totalExpense;
  
    return {
      totalIncome: totalIncome.toFixed(1),
      totalExpense: totalExpense.toFixed(1),
      totalBalance: totalBalance.toFixed(1),
    };
  };
  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
  };

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };

  const handleAddExpense = () => {
    if (expenseRows.every(row => row[2].value !== '' && row[1].value !== '')) {
      setExpenseRows((prevRows) => [...prevRows, createExpenseInputRow()]);
      setExpenseInputsVisible(true);
    } else {
      alert('Fill in all fields of the current line before adding a new one.');
    }
  };
  
  const handleAddIncome = () => {
    setIncomeRows((prevRows) => [...prevRows, createInputRow()]);
    setInputsVisible(true);
  };


  const handleToggleCross = (rowIndex, isIncome) => {
    if (isIncome) {
      setIncomeRows((prevRows) =>
        prevRows.map((row, i) =>
          i === rowIndex
            ? row.map((col) => ({ ...col, isDeleted: !col.isDeleted }))
            : row
        )
      );
    } else {
      setExpenseRows((prevRows) =>
        prevRows.map((row, i) =>
          i === rowIndex
            ? row.map((col) => ({ ...col, isDeleted: !col.isDeleted }))
            : row
        )
      );
    }
  };

  const handleDeleteIncomeRow = (rowIndex) => {
    setIncomeRows((prevRows) => {
      const updatedRows = [...prevRows];
      updatedRows.splice(rowIndex, 1); // Удаление строки
      return updatedRows;
    });
  };
  const handleDeleteExpenseRow = (rowIndex) => {
    setExpenseRows((prevRows) => {
      const updatedRows = [...prevRows];
      updatedRows.splice(rowIndex, 1); // Удаление строки
      return updatedRows;
    });
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
          <Autoriz />
        </div>
      </div>

      <div className="money">
        <div className="balance">
          <div className="title-balance">
            Balance
          </div>
          <div className="fin">
            <div className="finance" id='balance'>
            {formatNumberWithCommas(calculateTotal(savedIncomeRows, savedExpenseRows).totalBalance)}            </div>
            <div className="valute">
              <select value={selectedCurrency} onChange={handleCurrencyChange} className='select-valute'>
                <option value="KGS" className='valute-li'>KGS</option>
                <option value="USD" className='valute-li'>USD</option>
                <option value="EUR" className='valute-li'>EUR</option>
                <option value="RUB" className='valute-li'>RUB</option>
                <option value="CNY" className='valute-li'>CNY</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="incomes-box">
        <div className="box-incomes">
          <div className={`incomes ${areInputsVisible ? 'visible' : ''}`}>
            <div className="title-incomes">Incomes</div>
            <div className="info-incomes">
            {incomeRows.map((row, rowIndex) => (
  <div key={rowIndex} className="input-row">
    {row.map((col, colIndex) => (
      <div key={col.id} className={`input-group ${col.className}`}>
        {col.id === 2 && col.value !== '' && <span>+</span>}
        <input
          type={col.type === 'number' ? 'number' : 'text'}
          className={col.className}
          id={col.className}
          placeholder={col.placeholder}
          value={col.id === 0 ? timeValue : col.value}
          readOnly={col.isSaved}
          disabled={col.id === 0} 
          onChange={(e) => handleInputChange(e, rowIndex, col.id, true)}
        />
        {col.id === 2 && col.value !== '' && (
          <>
            {!col.isSaved && (
              <>
                <span onClick={() => handleSaveRow(rowIndex, true)} className={`save-btn ${col.isSaved ? 'saved' : ''}`}>
                  &#10004;
                </span>
                <span className={`delete-btn ${col.isDeleted ? 'visible' : ''}`} onClick={() => handleDeleteIncomeRow(rowIndex, true)}>
          &#10006;
        </span>
              </>
            )}
            
          </>
        )}
      </div>
    ))}
  </div>
))}
            </div>
          </div>
          <div className="btn-addd">
            <div className="btn-add" onClick={handleAddIncome}>
              Add
            </div>
          </div>
        </div>
      </div>
      <div className="expendes-box">
        <div className="box-expendes">
          <div className={`expendes ${areExpenseInputsVisible ? 'visible' : ''}`}>
            <div className="title-expendes">
              Expenses
            </div>
            <div className="info-expends">
            {expenseRows.map((row, rowIndex) => (
      <div key={rowIndex} className="input-row">
        {row.map((col, colIndex) => (
          <div key={col.id} className={`input-group ${col.className}`}>
            {col.id === 2 && col.value !== '' && <span className='minus-sub'>-</span>}
            {col.id === 1 && col.type === 'selector' ? (
              <select
              className={`${col.className} select-container`}
                id={col.className}  
                value={col.value}
                onChange={(e) => handleInputChange(e, rowIndex, col.id)}
                disabled={col.isSaved || col.isDeleted || col.isSelectorSaved} 
              >
                <option value="" disabled>Select category</option>
                <option value="category1">Food</option>
                <option value="category2">Housing</option>
                <option value="category3">Transportation</option>
                <option value="category4">Insurance</option>
                <option value="category5">Education</option>
                <option value="category6">Person. expenses</option>
                <option value="category7">Debts and Loans</option>
                <option value="category8">Health, medical</option>

\              </select>
            ) : (
              <input
                type={col.type === 'number' ? 'number' : 'text'}
                className={col.className}
                id={col.className}
                placeholder={col.placeholder}
                value={col.id === 0 ? timeValue : col.value}
                readOnly={col.isSaved}
                disabled={col.id === 0} 
                onChange={(e) => handleInputChange(e, rowIndex, col.id)}
              />
            )}
            {col.id === 2 && col.value !== '' && (
              <>
                {!col.isSaved && (
                  <>
                    <span onClick={() => handleSaveRow(rowIndex)} className={`save-btn ${col.isSaved ? 'saved' : ''}`}>
                      &#10004;
                    </span>
                    <span onClick={() => handleDeleteExpenseRow(rowIndex)} className={`delete-btn ${col.isDeleted ? 'visible' : ''}`}>
                      &#10006;
                    </span>
                  </>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    ))}
            </div>
          </div>
          <div className="btn-addd1">
            <div className="btn-add1" onClick={handleAddExpense}>
              Add
            </div>
          </div>
        </div>
      </div>

      <div className="check">
        <div className="check-box">
          <div className="check-text">
            We will help you calculate <br></br>
            and give advice!
          </div>
          <div className="btn-calc">
            <NavLink to='/check' className='btn-calculation'>
              Make a calculation
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
