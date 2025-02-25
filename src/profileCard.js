import React from 'react';
import './App.css';

export const ProfileCard = () => {
    var image = require('./images/images.jpeg');

  return (
    <div className="card p-4">
      <div className="row">
      <div className="col-lg-8 col-md-8 mobileView60">
        <h2>Transitions</h2>
        </div>
        <div className="col-lg-4 col-md-4 col-xs-5 mobileView40">
          <a href="#" className="text-muted text-decoration-none">View all <i className="bi bi-caret-right text-gray"></i></a>
        </div>
        

        <div className='col-lg-12 mt-3  border-bottom-gray'>
            <div className='row '>
            <div className="col-lg-1 col-md-1 mobileView10">
          <img src={image} width="40px" alt="icon" />
        </div>
        <div className="col-lg-9 col-md-9 col-sm-9 mobileView70">
            <h3>Emma Richardson</h3>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 mobileView20">
            <h4>+$75.00</h4>
            <p>19 Aug 2024</p>
        </div>
            </div>
        </div>

        <div className='col-12 mt-3  border-bottom-gray'>
            <div className='row '>
            <div className="col-1">
          <img src={image} width="40px" alt="icon" />
        </div>
        <div className="col-9">
            <h3>Emma Richardson</h3>
        </div>
        <div className="col-2">
            <h4>+$75.00</h4>
            <p>19 Aug 2024</p>
        </div>
            </div>
        </div>
        <div className='col-12 mt-3  border-bottom-gray'>
            <div className='row '>
            <div className="col-1">
          <img src={image} width="40px" alt="icon" />
        </div>
        <div className="col-9">
            <h3>Emma Richardson</h3>
        </div>
        <div className="col-2">
            <h4>+$75.00</h4>
            <p>19 Aug 2024</p>
        </div>
            </div>
        </div>
 <div className='col-12 mt-3  border-bottom-gray'>
            <div className='row '>
            <div className="col-1">
          <img src={image} width="40px" alt="icon" />
        </div>
        <div className="col-9">
            <h3>Emma Richardson</h3>
        </div>
        <div className="col-2">
            <h4>+$75.00</h4>
            <p>19 Aug 2024</p>
        </div>
            </div>
        </div>




       
      </div>
    </div>
  );
};

export default ProfileCard;
