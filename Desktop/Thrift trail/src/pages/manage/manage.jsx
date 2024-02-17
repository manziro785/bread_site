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
      value: index === 0 ? getCurrentDate() : '', // Установите значение времени здесь
      className: `input-${index === 0 ? 'time' : index === 1 ? 'text' : 'number'}`,
      isDeleted: false,
    }));
  }
  
  function createExpenseInputRow() {
    return Array.from({ length: 3 }, (_, index) => ({
      id: index,
      type: index === 0 ? 'time' : index === 1 ? 'selector' : 'number',
      placeholder: ` ${index === 0 ? 'время' : index === 1 ? 'категория' : 'expense'}`,
      value: index === 0 ? getCurrentDate() : '', // Установите значение времени здесь
      className: `input-${index === 0 ? 'time1' : index === 1 ? 'selector1' : 'number1'}`,
      isDeleted: false,
    }));
  }
  const savedData = JSON.parse(localStorage.getItem('savedData')) || { savedIncomeRows: [], savedExpenseRows: [] };
  
  const [inputRows, setInputRows] = useState([createInputRow()]);
  const [timeValue, setTimeValue] = useState(getCurrentDate());
  const [areInputsVisible, setInputsVisible] = useState(false);
  const [areExpenseInputsVisible, setExpenseInputsVisible] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('KGS');
  const [savedRows, setSavedRows] = useState([]);
  const [savedIncomeRows, setSavedIncomeRows] = useState(savedData.savedIncomeRows || []);
  const [savedExpenseRows, setSavedExpenseRows] = useState(savedData.savedExpenseRows || []);
  const [rowStatus, setRowStatus] = useState('editable');
  const [deletedRows, setDeletedRows] = useState([]);
  const [incomeRows, setIncomeRows] = useState(savedData.savedIncomeRows || [createInputRow()]);
  const [expenseRows, setExpenseRows] = useState(savedData.savedExpenseRows || [createExpenseInputRow()]);
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  
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
    // setShowDeleteButton(true);
  };

  
  const handleSaveRow = (rowIndex, isIncome) => {
    const currentRow = isIncome ? incomeRows[rowIndex] : expenseRows[rowIndex];
  
    // Проверка, что значение в <select> выбрано
    if (currentRow[1].value === '' && currentRow[1].type === 'selector') {
      alert('Please select a category before saving.');
      return;
    }
  
    if (isIncome) {
      setIncomeRows((prevRows) =>
        prevRows.map((row, i) =>
          i === rowIndex ? row.map((col) => ({ ...col, isSaved: true })) : row
        )
      );
      setSavedIncomeRows((prevSavedRows) => [
        ...prevSavedRows,
        incomeRows[rowIndex].map((col) => ({ ...col })),
      ]);
    } else {
      setExpenseRows((prevRows) =>
        prevRows.map((row, i) =>
          i === rowIndex ? row.map((col) => ({ ...col, isSaved: true })) : row
        )
      );
  
      setSavedExpenseRows((prevSavedRows) => [
        ...prevSavedRows,
        expenseRows[rowIndex].map((col) => ({ ...col })),
      ]);
    }
  
    saveDataToLocalStorage();
  };
  
  const handleDeleteIncomeRow = (rowIndex) => {
    // Всплывающее окно с подтверждением
    const isConfirmed = window.confirm('Are you sure you want to delete this line?');
  
    if (isConfirmed) {
      setIncomeRows((prevRows) => {
        const updatedRows = [...prevRows];
        updatedRows.splice(rowIndex, 1);
        saveDataToLocalStorage();
        return updatedRows;
      });
    }
  };
  const handleDeleteExpenseRow = (rowIndex) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this line?');
  
    if (isConfirmed) {
      setExpenseRows((prevRows) => {
        const updatedRows = [...prevRows];
        updatedRows.splice(rowIndex, 1);
        saveDataToLocalStorage();
        return updatedRows;
      });
    }
  };
  const [balance, setBalance] = useState(0);
  
  const saveDataToLocalStorage = () => {
    const dataToSave = {
      savedIncomeRows: incomeRows,
      savedExpenseRows: expenseRows,
    };
    localStorage.setItem('savedData', JSON.stringify(dataToSave));
  };
  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
  };
  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };
  
  const calculateTotal = (savedIncomeRows, savedExpenseRows) => {
    const totalIncome = savedIncomeRows.reduce((acc, row) => {
      const value = parseFloat(row[2].value) || 0;
      return acc + (row[2].isDeleted ? 0 : value);
    }, 0);
  
    const totalExpense = savedExpenseRows.reduce((acc, row) => {
      const value = parseFloat(row[2].value) || 0;
      return acc + (row[2].isDeleted ? 0 : value); 
    }, 0);
  
    const totalBalance = totalIncome - totalExpense;
  
    return {
      totalIncome: formatNumberWithCommas(totalIncome.toFixed(1)),
      totalExpense: formatNumberWithCommas(totalExpense.toFixed(1)),
      totalBalance: formatNumberWithCommas(totalBalance.toFixed(1)),
    };
  };
  const handleAddIncome = () => {
    if (incomeRows.every((row) => row[2].isSaved)) {
      setIncomeRows((prevRows) => [...prevRows, createInputRow()]);
      setInputsVisible(true);
    } else {
      alert('Please save the current row before adding a new one.');
    }
  };
  const handleAddExpense = () => {
    if (expenseRows.every((row) => row[2].isSaved)) {
      setExpenseRows((prevRows) => [...prevRows, createExpenseInputRow()]);
      setExpenseInputsVisible(true);
    } else {
      alert('Please save the current row before adding a new one.');
    }
  };
  const calculateExpensesByCategory = (savedExpenseRows) => {
    const expensesByCategory = {};
  

    savedExpenseRows.forEach((row) => {
      if (!row[2].isDeleted) { 
        const category = row[1].value;
        const amount = parseFloat(row[2].value) || 0;
  
        if (expensesByCategory[category]) {
          expensesByCategory[category] += amount;
        } else {
          expensesByCategory[category] = amount;
        }
      }
    });

  return expensesByCategory;
};

const handleToggleDeleteRow = (rowIndex, isIncome) => {
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
                        <span className={`delete-btn ${col.isDeleted || !showDeleteButton ? 'visible' : ''}`} onClick={() => handleDeleteIncomeRow(rowIndex, true)}>
                          &#10006;
                        </span>
              </>
            )}
            {col.isSaved && (
      <span className={`delete-btn-new ${col.isDeleted ? 'visible' : ''}`} onClick={() => handleDeleteIncomeRow(rowIndex, true)}>
        &#10006;
      </span>
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
                <option value="Food">Food</option>
                <option value="Housing">Housing</option>
                <option value="Transportation">Transportation</option>
                <option value="Insurance">Insurance</option>
                <option value="Education">Education</option>
                <option value="Pers. expenses">Person. expenses</option>
                <option value="Debts and Loans">Debts and Loans</option>
                <option value="Health, medical">Health, medical</option>
                <option value="Other">Other</option>

              </select>
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
                 {col.isSaved && (
      <span className={`delete-btn-new ${col.isDeleted ? 'visible' : ''}`} onClick={() => handleDeleteExpenseRow(rowIndex, true)}>
        &#10006;
      </span>
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
