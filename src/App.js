import React, { memo } from "react";
import Sidebar from "./sidemenu";
import "bootstrap/dist/css/bootstrap.min.css";
import DonutChart from "./DonutCharts";
import Navbar from "./MobileNav";
import "./App.css";
import { ProfileCard } from './profileCard';

// Memoized components for better performance
const BalanceCard = memo(({ title, amount, isMain = false }) => (
  <div className="col-lg-4 col-md-6 col-sm-12 custom-mt-2">
    <div className={`card p-3 h-100 ${isMain ? 'bg-dark text-white' : ''}`}>
      <p className="mb-2">{title}</p>
      <h2 className="mb-0">{amount}</h2>
    </div>
  </div>
));

const SavingsItem = memo(({ title, amount, color = 'green' }) => (
  <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
    <div className="text-center">
      <div className="h-100" style={{ borderLeft: `4px solid ${color}`, paddingLeft: '15px' }}>
        <h4 className="mb-1">{title}</h4>
        <h5 className="mb-0">{amount}</h5>
      </div>
    </div>
  </div>
));

const BillItem = memo(({ title, amount, color = 'red' }) => (
  <div className="col-12 mb-3">
    <div className="card bg-gray h-100" style={{ borderLeft: `6px solid ${color}` }}>
      <div className="row align-items-center">
        <div className="col-8 col-sm-9">
          <p className="mb-0">{title}</p>
        </div>
        <div className="col-4 col-sm-3 text-end">
          <h3 className="mb-0">{amount}</h3>
        </div>
      </div>
    </div>
  </div>
));

export const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-lg-2 col-md-2 pt-3 d-none d-lg-block bg-dark vh-100 p-0 sidebar-transition">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="col-lg-10 col-md-12 col-sm-12 p-3 p-md-4">
          <div className="row">
            <div className="col-12">
              <h1 className="mb-4">Overview</h1>
            </div>
          </div>

          {/* Balance Cards Row */}
          <div className="row balance-cards">
            <BalanceCard title="Current Balance" amount="$4,836.00" isMain={true} />
            <BalanceCard title="Income" amount="$3,814.25" />
            <BalanceCard title="Expense" amount="$1,700.50" />
          </div>

          {/* Main Content Row */}
          <div className="row mt-4">
            {/* Left Column - Posts and Transactions */}
            <div className="col-lg-7 col-md-12 mb-4">
              {/* Posts Section */}
              <div className="card p-4 mb-4">
                <div className="row align-items-center mb-3">
                  <div className="col-8">
                    <h2 className="mb-0">Posts</h2>
                  </div>
                  <div className="col-4 text-end">
                    <a href="#" className="text-muted text-decoration-none nav-transition">
                      See Details <i className="bi bi-caret-right"></i>
                    </a>
                  </div>
                </div>

                <div className="row">
                  {/* Total Saved Card */}
                  <div className="col-lg-4 col-md-12 mb-3">
                    <div className="card h-100" style={{ backgroundColor: "#f8f9fa" }}>
                      <div className="card-body">
                        <p className="mb-2">Total Saved</p>
                        <h6 className="mb-0"><b>$850</b></h6>
                      </div>
                    </div>
                  </div>

                  {/* Savings Items */}
                  <div className="col-lg-8 col-md-12">
                    <div className="row">
                      <SavingsItem title="Savings" amount="$159" />
                      <SavingsItem title="Gift" amount="$159" />
                      <SavingsItem title="Concert Ticket" amount="$10" />
                      <SavingsItem title="New Laptop" amount="$10" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Transactions Section */}
              <div className="card">
                <ProfileCard />
              </div>
            </div>

            {/* Right Column - Charts and Bills */}
            <div className="col-lg-5 col-md-12">
              {/* Asset Allocation Chart */}
              <div className="card p-3 mb-4">
                <h2 className="mb-3">Asset Allocation</h2>
                <div className="chart-container">
                  <DonutChart />
                </div>
              </div>

              {/* Recurring Bills */}
              <div className="card p-3">
                <h3 className="mb-3">Recurring Bills</h3>
                <div className="row">
                  <BillItem title="Paid Bills" amount="$190.00" />
                  <BillItem title="Total Upcoming" amount="$190.00" />
                  <BillItem title="Due Soon" amount="$190.00" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="d-lg-none bg-dark w-100 mt-2">
          <Navbar />
        </div>
      </div>
    </div>
  );
};