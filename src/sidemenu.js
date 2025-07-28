
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './sidemenu.css';

const Sidebar = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };
  return (
    <div className={`bg-dark text-white d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 vh-100 ${isMinimized ? 'sidebar-minimized' : ''}`}>
      {/* Brand */}
      <div className="w-100 text-center text-sm-start mb-3">
        <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className={`fs-5 ${isMinimized ? 'd-none' : 'd-none d-sm-inline'}`}><b>finance</b></span>
          <span className={`fs-6 ${isMinimized ? 'd-inline' : 'd-sm-none'}`}><b>$</b></span>
        </a>
      </div>

      {/* Navigation */}
      <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start w-100" id="menu">
        <li className="nav-item w-100 mb-2">
          <div className="nav-link-active">
            <button className="nav-link align-middle px-3 d-flex align-items-center border-0 bg-transparent w-100">
              <i className="fs-5 bi-house me-2"></i> 
              <span className={isMinimized ? 'd-none' : 'd-none d-sm-inline'}>Overview</span>
            </button>
          </div>
        </li>

        <li className="nav-item w-100 mb-2">
          <button className="nav-link px-3 align-middle d-flex align-items-center text-white nav-transition border-0 bg-transparent w-100">
            <i className="fs-5 bi-arrow-down-up me-2"></i> 
            <span className={isMinimized ? 'd-none' : 'd-none d-sm-inline'}>Transactions</span>
          </button>
        </li>

        <li className="nav-item w-100 mb-2">
          <button className="nav-link px-3 align-middle d-flex align-items-center text-white nav-transition border-0 bg-transparent w-100">
            <i className="fs-5 bi-wallet2 me-2"></i> 
            <span className={isMinimized ? 'd-none' : 'd-none d-sm-inline'}>Budgets</span>
          </button>
        </li>

        <li className="nav-item w-100 mb-2">
          <button className="nav-link px-3 align-middle d-flex align-items-center text-white nav-transition border-0 bg-transparent w-100">
            <i className="fs-5 bi-piggy-bank me-2"></i> 
            <span className={isMinimized ? 'd-none' : 'd-none d-sm-inline'}>Pots</span>
          </button>
        </li>

        <li className="nav-item w-100 mb-2">
          <button className="nav-link px-3 align-middle d-flex align-items-center text-white nav-transition border-0 bg-transparent w-100">
            <i className="fs-5 bi-receipt me-2"></i> 
            <span className={isMinimized ? 'd-none' : 'd-none d-sm-inline'}>Recurring Bills</span>
          </button>
        </li>
      </ul>

      {/* Footer */}
      <div className="mt-auto pb-3 w-100 text-center text-sm-start">
        <button 
          className="d-flex align-items-center text-white text-decoration-none nav-transition border-0 bg-transparent" 
          onClick={toggleMinimize}
        >
          <i className={`fs-6 me-2 d-none d-sm-inline ${isMinimized ? 'bi-chevron-right' : 'bi-chevron-left'}`}></i>
          <span className={`small ${isMinimized ? 'd-none' : 'd-none d-sm-inline'}`}>
            {isMinimized ? 'Expand Menu' : 'Minimize Menu'}
          </span>
          <span className="d-sm-none small">≡</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
