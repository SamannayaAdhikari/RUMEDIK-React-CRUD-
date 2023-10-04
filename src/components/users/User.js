import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const User = () => {
  const [user, setUser] = useState({
    name: '',
    username: '',
    // email: '',
    phone: '',
    // webiste: '',
    productName: '',
    quantity: '',
    From: '',
    To: '',
    date: '',
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/home">
        back to Home
      </Link>
      <h1 className="display-4">Order Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Customer Name: {user.name}</li>
        <li className="list-group-item">Customer ID: {user.username}</li>
        {/* <li className="list-group-item">email: {user.email}</li> */}
        <li className="list-group-item">phone: {user.phone}</li>
        {/* <li className="list-group-item">website: {user.website}</li> */}
        <li className="list-group-item">Product Name: {user.productName}</li>
        <li className="list-group-item">Quantity: {user.quantity}</li>
        <li className="list-group-item">From: {user.From}</li>
        <li className="list-group-item">To: {user.To}</li>
        <li className="list-group-item">Date: {user.date}</li>
      </ul>
    </div>
  );
};

export default User;
