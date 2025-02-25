import React from "react";
import './App.css';
const Navbar = () => {
  return (
    <nav className="container-fluid">
      <div className="row text-white">
      <div className="col-3 d-flex flex-column align-items-center bg-white text-dark p-1 rounded mt-2">
      <i className="fs-4 bi-house"></i>
      <span className="mt-1 sm-font">Overview</span>
  </div>
  <div className="col-3 d-flex flex-column align-items-center mt-2">
    <i className="bi bi-arrow-down-up"></i>
    <span className="mt-1 sm-font">Transactions</span>
  </div>
  <div className="col-2 d-flex flex-column align-items-center mt-2">
    <i className="fs-4 bi-folder"></i>
    <span className="mt-1 sm-font">Budgets</span>
  </div>
  <div className="col-2 d-flex flex-column align-items-center mt-2">
    <i className="bi bi-currency-dollar fs-4"></i>
    <span className="mt-1 sm-font">Posts</span>
  </div>
  <div className="col-2 d-flex flex-column align-items-center mt-2">
    <i className="bi bi-box fs-3"></i>
    <span className="mt-1 sm-font">Recurring Bills</span>
  </div>
</div>

    </nav>
  );
};

export default Navbar;
