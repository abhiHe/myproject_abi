import React from "react";
import Sidebar from "./sidemenu";
import "bootstrap/dist/css/bootstrap.min.css";
import DonutChart from "./DonutCharts";
import Navbar from "./MobileNav";
import "./App.css";
import  { ProfileCard } from './profileCard';

export const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 col-md-2 pt-3  d-none d-md-none d-lg-block customShow  bg-dark vh-100 p-0 ">
          <Sidebar />
        </div>

       

        <div className="col-lg-10 col-md-12 col-sm-12 p-4 ">
        <h1>Overview</h1>

            {/* 1st row */}
          <div className="col-12 mt-3 mt-md-4 mt-sm-4">
            <div className="row custoContainer">
              <div className="col-lg-4 col-md-4 col-sm-12 custom-mt-2">
                <div className="card p-2 bg-black text-white">
                    <p>Current Balence</p>
                    <h2>$4,836.00</h2>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 custom-mt-2 ">
                <div className="card p-2">
                <p>Income</p>
                <h2>$3,814.25</h2>
                </div>
              </div>
               <div className="col-lg-4 col-md-4 col-sm-12 custom-mt-2">
                <div className="card p-2">
                <p>Expense</p>
                <h2>$1,700.50</h2>
                </div>
              </div>
            </div>
          </div>


{/* 2nd row */}
          <div className="col-12 mt-3">
            <div className="row">
             
              <div className="col-lg-7 col-md-12 col-sm-12" >
                <div className="card p-4">
                    <div className="row">
                    <div className="col-lg-8 col-md-8 mobileView60">
        <h2>Posts</h2>
        </div>
        <div className="col-lg-4 col-md-4 col-xs-5 mobileView40">
          <a href="#" className="text-muted text-decoration-none">See Details <i className="bi bi-caret-right text-gray"></i></a>
        </div>
                   <div className="col-12">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 mobileView100">
                      <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
                        <div className="card" style={{backgroundColor:"#eee8e8cf"}}>
                            <p className="ml-2 padding-left-20">Total Saved</p>
                            <h6><b>$850</b></h6>
                        </div>
                    </div>
                      </div>
                      <div className="col-lg-8 col-md-8">
                        <div className="row mt-2">
                         <div className="col-lg-6 col-md-4 mobileView50">
                         <div className="col-md-12 mt-2 text-center">
                        <div className="col-md-12" style={{borderLeft:'4px solid green'}}>
                            <h4>Savings</h4>
                            <h5>$159</h5>
                            </div>
                        </div>
                        <div className="col-md-12 mt-2 text-center">
                        <div className="col-md-12 custom-mt-3 text-align-left" style={{borderLeft:'4px solid green'}}>
                        <h4>Concert Ticket</h4>
                        <h5>$10</h5>
                            </div>
                        </div>
                         </div>
                         <div className="col-lg-6 col-md-8 mobileView50">
                         <div className="col-md-12 mt-2 text-center">
                        <div className="col-md-12" style={{borderLeft:'4px solid green'}}>
                            <h4>Gift</h4>
                            <h5>$159</h5>
                            </div>
                        </div>
                        <div className="col-md-12 custom-mt-3 text-center">
                        <div className="col-md-12 text-align-left" style={{borderLeft:'4px solid green'}}>
                        <h4>New Laptop</h4>
                        <h5>$10</h5>
                            </div>
                        </div>
                         </div>
                        </div>
                      </div>
                    </div>
                   </div>
                   
                       
                       
                    </div>
                </div>
                <div className="col-12 mt-3">
                <ProfileCard />
                </div>
              </div>
               <div className="col-lg-5 col-md-12 col-sm-12 custom-mt-3 ">
                {/* <div > */}
                <div className="card p-2 ">
            <h2>Asset Allocation</h2>
            <DonutChart />
        {/* </div> */}
                </div>
                <div className="card mt-3 p-2">
                    <h3>Recurring Bills</h3>
                    <div className="col-md-12" style={{marginTop:'10px'}}>
                    <div className="card custom-mt-3 bg-gray" style={{borderLeft:'6px solid red'}}>
                    <div className="row">
                      <div className="col-lg-9"><p>Paid Bills</p>
                    </div>
                    <div className="col-3"><h3>$190.00</h3>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-12" style={{marginTop:'10px'}} >
                    <div className="card custom-mt-3 bg-gray" style={{borderLeft:'6px solid red'}}>
                    <div className="row">
                      <div className="col-lg-9"><p>Total Upcoming</p>
                    </div>
                    <div className="col-3"><h3>$190.00</h3>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-12 custom-mt-3" style={{marginTop:'10px'}}>
                    <div className="card bg-gray" style={{borderLeft:'6px solid red'}}>
                    <div className="row">
                      <div className="col-lg-9"><p>Due Soon</p>
                    </div>
                    <div className="col-3"><h3>$190.00</h3>
                    </div>
                    </div>
                    
                    </div>
                    </div>
                   
                </div>
              </div>
            </div>
          </div>

        </div>
         {/* mobile view */}
         <div className="d-lg-none d-md-block customShow  bg-dark w-100 mt-2">
          <Navbar />
        </div>
      </div>
    </div>
  );
};
