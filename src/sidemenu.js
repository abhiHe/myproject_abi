import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './sidemenu.css';
const Sidebar = () => {
  return (
    <div className="bg-dark text-white d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 vh-100">
      <h1>
      <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-5 d-none d-sm-inline"><b>finance</b></span>
      </a>
      </h1>
      <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
      <li className="nav-item active bg-white" style={{borderRadius:'8px',padding:'0px 10px'}}>
  <a href="#" className="nav-link align-middle px-6 text-black" >
    <i className="fs-4 bi-house text-black"></i> 
    <span className="ms-1 d-none d-sm-inline text-black">Overview</span>
  </a>
</li>

        <li>
          <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
            <i className="fs-4 bi-speedometer2 text-white"></i> <span className="ms-1 d-none d-sm-inline text-white">Transactions</span>
          </a>
        </li>
        <li>
          <a href="#" className="nav-link px-0 align-middle">
            <i className="fs-4 bi-table text-white"></i> <span className="ms-1 d-none d-sm-inline text-white">Budgets</span>
          </a>
        </li>
        <li>
          <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
            <i className="fs-4 bi-bootstrap text-white"></i> <span className="ms-1 d-none d-sm-inline text-white">Pots</span>
          </a>
        </li>
        <li>
          <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
            <i className="fs-4 bi-grid text-white"></i> <span className="ms-1 d-none d-sm-inline text-white">Recurring Bills</span>
          </a>
        </li>
      </ul>
      <hr />
      <div>
        <a className="d-flex align-items-center text-white text-decoration-none arrow-left">
          <span className="d-none d-sm-inline mx-1"><i className="fs arrow-left"></i>Minimizing Menu</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
