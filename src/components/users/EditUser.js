import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const EditUser = () => {
  const history = useHistory();
  const { id } = useParams();

  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
  });
  useEffect(() => {
    loadUser();
  }, []);
  const { name, username, email, phone, website } = user;
  //   input change handler
  const inputChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  // load data when component renders
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/users/${id}`);
    setUser(result.data);
  };
  // submit edited data to database
  const submitHandler = async (e) => {
    e.preventDefault();
    await axios.put('http://localhost:8080/users/' + id, user);
    history.push('/');
  };

  return (
    <div className="container">
      <div className=" w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={submitHandler}>
          <div className="form-group ">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={inputChangeHandler}
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={inputChangeHandler}
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your Email"
              name="email"
              value={email}
              onChange={inputChangeHandler}
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone"
              name="phone"
              value={phone}
              onChange={inputChangeHandler}
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website"
              name="website"
              value={website}
              onChange={inputChangeHandler}
            />
          </div>
          <div class="d-grid gap-2 mt-3">
            <button class="btn btn-outline-primary" type="submit">
              Update User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
