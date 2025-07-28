
import React from "react";
import './App.css';

const Navbar = () => {
  return (
    <nav className="container-fluid py-2">
      <div className="row text-white g-1">
        <div className="col d-flex flex-column align-items-center bg-white text-dark p-2 rounded nav-transition">
          <i className="bi-house fs-5"></i>
          <span className="mt-1 small">Overview</span>
        </div>
        
        <div className="col d-flex flex-column align-items-center p-2 nav-transition">
          <i className="bi-arrow-down-up fs-5"></i>
          <span className="mt-1 small">Transactions</span>
        </div>
        
        <div className="col d-flex flex-column align-items-center p-2 nav-transition">
          <i className="bi-wallet2 fs-5"></i>
          <span className="mt-1 small">Budgets</span>
        </div>
        
        <div className="col d-flex flex-column align-items-center p-2 nav-transition">
          <i className="bi-piggy-bank fs-5"></i>
          <span className="mt-1 small">Pots</span>
        </div>
        
        <div className="col d-flex flex-column align-items-center p-2 nav-transition">
          <i className="bi-receipt fs-5"></i>
          <span className="mt-1 small">Bills</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
