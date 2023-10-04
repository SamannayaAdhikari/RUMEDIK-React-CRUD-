import { Component } from 'react';
import React from 'react';

import './Track.css';
import { useParams } from 'react-router-dom';

const vehicles = [
  {
    type: 'mini van',
    number: 'AS 10 Q 6543',
    driver: 'Abjal Laskar',
    phoneNo: 9876543210,
  },
  {
    type: 'mini van',
    number: 'AS 10 B 6753',
    driver: 'Virat Hazarika',
    phoneNo: 9673543930,
  },
  {
    type: 'pickup Truck',
    number: 'AS 10 Q 1542',
    driver: 'Kailash Das',
    phoneNo: 9876598679,
  },
];

const Track = () => {
  const { id } = useParams();
  let num = id % 3;
  return (
    <>
      <div className="container px-1 px-md-4 py-5 mx-auto">
        <div className="card">
          <div className="row d-flex justify-content-between px-3 top">
            <div className="d-flex">
              <h5>
                ORDER{' '}
                <span className="text-primary font-weight-bold">{id}</span>
              </h5>
            </div>
            <div className="d-flex flex-column text-sm-right">
              <p className="mb-0">
                Expected Arrival <span>01/12/19</span>
              </p>
              <p>
                USPS{' '}
                <span className="font-weight-bold">234094567242423422898</span>
              </p>
            </div>
          </div>
          {/* <!-- Add class 'active' to progress --> */}
          <div className="row d-flex justify-content-center">
            <div className="col-12">
              <ul id="progressbar" className="text-center">
                <li className="active step0"></li>
                <li className="active step0"></li>
                <li className="active step0"></li>
                <li className="step0"></li>
              </ul>
            </div>
          </div>
          <div className="row justify-content-between top">
            <div className="row d-flex icon-content">
              <img className="icon" src="https://i.imgur.com/9nnc9Et.png" />
              <div className="d-flex flex-column">
                <p className="font-weight-bold">
                  Order
                  <br />
                  Processed
                </p>
              </div>
            </div>
            <div className="row d-flex icon-content">
              <img className="icon" src="https://i.imgur.com/u1AzR7w.png" />
              <div className="d-flex flex-column">
                <p className="font-weight-bold">
                  Order
                  <br />
                  Shipped
                </p>
              </div>
            </div>
            <div className="row d-flex icon-content">
              <img className="icon" src="https://i.imgur.com/TkPm63y.png" />
              <div className="d-flex flex-column">
                <p className="font-weight-bold">
                  Order
                  <br />
                  En Route
                </p>
              </div>
            </div>
            <div className="row d-flex icon-content">
              <img className="icon" src="https://i.imgur.com/HdsziHP.png" />
              <div className="d-flex flex-column">
                <p className="font-weight-bold">
                  Order
                  <br />
                  Arrived
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2>Vehicle details</h2>
        <div>
          <h5>Vehicle type: {vehicles[num].type}</h5>
          <h5>Vehicle Number : {vehicles[num].number}</h5>
          <h5>Driver's Name: {vehicles[num].driver}</h5>
          <h5>Driver's Phone Number: {vehicles[num].phoneNo}</h5>
        </div>
      </div>
    </>
  );
};

export default Track;
