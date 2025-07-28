import React, { memo } from 'react';
import './App.css';

const TransactionItem = memo(({ name, amount, date, image }) => (
  <div className='col-12 mb-3 border-bottom-gray'>
    <div className='row align-items-center'>
      <div className="col-2 col-sm-1">
        <img 
          src={image} 
          width="40" 
          height="40"
          className="rounded-circle"
          alt={`${name} profile`}
          loading="lazy"
        />
      </div>
      <div className="col-6 col-sm-8">
        <h3 className="mb-1">{name}</h3>
      </div>
      <div className="col-4 col-sm-3 text-end">
        <h4 className="mb-1">{amount}</h4>
        <p className="mb-0 small text-muted">{date}</p>
      </div>
    </div>
  </div>
));

export const ProfileCard = memo(() => {
  const image = require('./images/images.jpeg');

  const transactions = [
    { id: 1, name: "Emma Richardson", amount: "+$75.00", date: "19 Aug 2024" },
    { id: 2, name: "John Smith", amount: "-$25.00", date: "18 Aug 2024" },
    { id: 3, name: "Sarah Wilson", amount: "+$150.00", date: "17 Aug 2024" },
    { id: 4, name: "Mike Johnson", amount: "-$45.00", date: "16 Aug 2024" }
  ];

  return (
    <div className="card p-3 p-md-4">
      <div className="row align-items-center mb-3">
        <div className="col-8">
          <h2 className="mb-0">Transactions</h2>
        </div>
        <div className="col-4 text-end">
          <a href="#" className="text-muted text-decoration-none nav-transition">
            View all <i className="bi bi-caret-right"></i>
          </a>
        </div>
      </div>

      <div className="row">
        {transactions.map(transaction => (
          <TransactionItem
            key={transaction.id}
            name={transaction.name}
            amount={transaction.amount}
            date={transaction.date}
            image={image}
          />
        ))}
      </div>
    </div>
  );
});

export default ProfileCard;