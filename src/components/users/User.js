import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom/cjs/react-router-dom.min';

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
  });

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/users/${id}`);
    setUser(result.data);
  };
  useEffect(() => loadUser(), []);

  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        Back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Name: {user.name}</li>
        <li className="list-group-item">User name: {user.username}</li>
        <li className="list-group-item">Email: {user.email}</li>
        <li className="list-group-item">Phone: {user.phone}</li>
        <li className="list-group-item">Website: {user.website}</li>
      </ul>
    </div>
  );
};

export default User;
