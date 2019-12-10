import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import axios from 'axios';

export default function SignupForm(props) {
  const initialDetails = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    username: '',
    email: '',
    password: '',
    accountType: '',
  };
  const [userDetails, setuserDetails] = useState(initialDetails);
  const [response, setResponse] = useState('');

  const handleChange = e => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    setuserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const url = '/api/v1/users/signup';

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(userDetails), // data can be `string` or {object}!
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();
      console.log('Success:', JSON.stringify(json));
      setResponse('account created');
      setuserDetails(initialDetails);
      return props.history.push('/');
    } catch (error) {
      console.error('Error:', error);
      setResponse(error);
    }
  };
  const ComparePass = () => {
    if (userDetails.password !== userDetails.confirmPass) {
      return setResponse('confirm password does not match password');
    }
    return setResponse('');
  };

  return (
    <>
      {/* <div>{response ? <Alert color="warning">{response}</Alert> : null}</div> */}
      <div className="container">
        <div style={{ marginTop: '20px' }}>
          <h3>Create Profile</h3>
        </div>
        <form onSubmit={handleSubmit} className="mt-5">
          <div className="row">
            <div className="col-lg-6">
              <Label htmlFor="first_name">First Name:</Label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                required
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-6">
              <Label htmlFor="last_name">Last Name:</Label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                required
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <Label htmlFor="phone">Phone Number:</Label>
              <input
                type="text"
                className="form-control"
                name="phoneNumber"
                required
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-3">
              <Label htmlFor="bvn">BVN:</Label>
              <input
                type="text"
                className="form-control"
                name="bvn"
                required
                onChange={handleChange}
              />
            </div>
            <div class="col-lg-3">
              <Label htmlFor="accountType">Account Type:</Label>
              <select
                class="form-control"
                id="exampleFormControlSelect1"
                name="accountType"
                onChange={handleChange}
              >
                <option selected disabled>
                  Choose...
                </option>
                <option value="SAVINGS">SAVINGS</option>
                <option value="CURRENT">CURRENT</option>
                <option value="FIXED DEPOSIT">FIXED DEPOSIT</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <Label htmlFor="password">Password:</Label>
              <input
                type="password"
                className="form-control"
                name="password"
                required
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-6">
              <Label htmlFor="confirmPass">Confirm Password:</Label>
              <input
                type="password"
                className="form-control"
                name="confirmPass"
                required
                onChange={handleChange}
                onBlur={ComparePass}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <Label htmlFor="userName">Username:</Label>
              <input
                type="text"
                className="form-control"
                name="userName"
                required
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-6 mb-5">
              <Label htmlFor="email">Email:</Label>
              <input
                type="email"
                name="email"
                className="form-control"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <Button type="submit">Join Now</Button>
            <Link to="/login">
              <button className="text-success btn" type="button">
                Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

const Label = styled.label`
  font-weight: bold;
  font-size: 12px;
`;

const Button = styled.button`
  border: none;
  background: #34a853 0% 0% no-repeat padding-box;
  border-radius: 14px;
  color: #fff;
  width: 125px;
  height: 34px;
  font-size: 12px;
  font-weight: bold;
`;
