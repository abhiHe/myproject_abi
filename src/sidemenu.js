
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './sidemenu.css';

const Sidebar = () => {
  return (
    <div className="bg-dark text-white d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 vh-100">
      {/* Brand */}
      <div className="w-100 text-center text-sm-start mb-3">
        <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-5 d-none d-sm-inline"><b>finance</b></span>
          <span className="fs-6 d-sm-none"><b>$</b></span>
        </a>
      </div>

      {/* Navigation */}
      <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start w-100" id="menu">
        <li className="nav-item w-100 mb-2">
          <div className="nav-link-active">
            <a href="#" className="nav-link align-middle px-3 d-flex align-items-center">
              <i className="fs-5 bi-house me-2"></i> 
              <span className="d-none d-sm-inline">Overview</span>
            </a>
          </div>
        </li>

        <li className="nav-item w-100 mb-2">
          <a href="#" className="nav-link px-3 align-middle d-flex align-items-center text-white nav-transition">
            <i className="fs-5 bi-arrow-down-up me-2"></i> 
            <span className="d-none d-sm-inline">Transactions</span>
          </a>
        </li>

        <li className="nav-item w-100 mb-2">
          <a href="#" className="nav-link px-3 align-middle d-flex align-items-center text-white nav-transition">
            <i className="fs-5 bi-wallet2 me-2"></i> 
            <span className="d-none d-sm-inline">Budgets</span>
          </a>
        </li>

        <li className="nav-item w-100 mb-2">
          <a href="#" className="nav-link px-3 align-middle d-flex align-items-center text-white nav-transition">
            <i className="fs-5 bi-piggy-bank me-2"></i> 
            <span className="d-none d-sm-inline">Pots</span>
          </a>
        </li>

        <li className="nav-item w-100 mb-2">
          <a href="#" className="nav-link px-3 align-middle d-flex align-items-center text-white nav-transition">
            <i className="fs-5 bi-receipt me-2"></i> 
            <span className="d-none d-sm-inline">Recurring Bills</span>
          </a>
        </li>
      </ul>

      {/* Footer */}
      <div className="mt-auto pb-3 w-100 text-center text-sm-start">
        <a className="d-flex align-items-center text-white text-decoration-none nav-transition" href="#">
          <i className="fs-6 bi-chevron-left me-2 d-none d-sm-inline"></i>
          <span className="d-none d-sm-inline small">Minimize Menu</span>
          <span className="d-sm-none small">≡</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
