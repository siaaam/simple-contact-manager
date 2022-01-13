import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddUser = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
  });
  //   useEffect(() => {
  //     setUser({});
  //   }, [user]);
  const { name, username, email, phone, website } = user;
  //   input change handler
  const inputChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/users', user);
    history.push('/');
  };

  return (
    <div className="container">
      <div className=" w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
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
            <button class="btn btn-primary" type="submit">
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
