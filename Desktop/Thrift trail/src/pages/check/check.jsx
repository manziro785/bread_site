import './check.css';
import React, { useState, useEffect } from 'react';
// import  { Autoriz }  from '../main-page/autoriz/autoriz.jsx';

export function Check() {
  const [expensesByCategory, setExpensesByCategory] = useState({});
  const [randomText, setRandomText] = useState('');

  const categoryNames = {
    category1: 'Food',
    category2: 'Housing',
    category3: 'Transportation',
    category4: 'Insurance',
    category5: 'Education',
    category6: 'Pers. expenses',
    category7: 'Debts and Loans',
    category8: 'Health, medical',
    category9: 'Other'
  };

  const calculateExpensesByCategory = (expenseRows) => {
    const result = {};

    expenseRows.forEach((row) => {
      const category = row[1].value;
      const amount = parseFloat(row[2].value) || 0;

      const categoryName = categoryNames[category] || category;

      if (result[categoryName]) {
        result[categoryName] += amount;
      } else {
        result[categoryName] = amount;
      }
    });

    return result;
  };

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('savedData')) || { savedIncomeRows: [], savedExpenseRows: [] };
    const savedExpenseRows = savedData.savedExpenseRows || [];
    const calculatedExpensesByCategory = calculateExpensesByCategory(savedExpenseRows);

    setExpensesByCategory(calculatedExpensesByCategory);
  }, []);

  useEffect(() => {
    const textOptions = [
      'Initiate a meticulous exploration of your financial landscape, delving into the intricate details of your spending tapestry.Examine discretionary and non-discretionary expenditures with a fine-tooth comb, unraveling hidden patterns. By casting a comprehensive net, you gain insights that empower you to make nuanced decisions for a leaner and more purposeful financial existence.',
       'Elevate your financial prowess by orchestrating a symphony of automated strategies. Implement seamless transfers to diverse savings accounts, investment portfolios, and retirement vehicles. Through the virtuosity of automation, you not only fortify your savings discipline but also sculpt a harmonious financial future marked by sustained growth and stability.',
        'Embark on a revolutionary journey of conscious spending, challenging the conventional and redefining your relationship with consumption. Question the purpose behind each expense, gravitating towards experiences over possessions. Regularly reassess subscription commitments and explore sustainable alternatives, fostering a transformative shift towards a more intentional and economically savvy lifestyle.',
         'Hone your financial navigation skills to master the intricacies of fixed costs with finesse. Engage in proactive negotiations with service providers, meticulously reviewing contracts, and seeking optimal rates for utilities and insurance. Consider bundling services to unlock potential discounts. Empower yourself with a mastery that transforms fixed costs from rigid constraints to dynamic components in your overarching financial strategy.'];
    const randomIndex = Math.floor(Math.random() * textOptions.length);
    const newText = textOptions[randomIndex];

    setRandomText(newText);
  }, []);

  const calculateTotalExpenses = (expenses) => {
    return Object.values(expenses).reduce((total, amount) => total + amount, 0);
  };

  return (
    <>
     <div className="header-check">
        <div className="logo-manage">
     <a href="/manage">
            <img src="./src/assets/photo/logo.svg" alt="" />
            </a>
        </div>
        {/* <div className="login-signup-check">
          {/* <Autoriz /> */}
      
      </div>

    <div className="check-all">
      <div className="advice-ch">
        <h1> Advice </h1>
        <p className='text-advice'>{randomText}</p>
       <a href="/manage"> <button  className='btn-back'>back</button> </a>
      </div>
      <div className='check-ch'>
      <h2>CHECK</h2>
      <ul>
        {Object.entries(expensesByCategory).map(([category, amount]) => (
          <li key={category}>
            {category}: {amount.toLocaleString()} 
          </li>
        ))}
        <li className='total-int'><span>Total: </span> {calculateTotalExpenses(expensesByCategory).toLocaleString()}</li>
      </ul>
    </div>
      </div>
    </>
  );
}

export default Check;
