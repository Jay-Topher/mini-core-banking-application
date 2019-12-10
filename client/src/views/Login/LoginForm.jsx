import React, { useState, FormEvent } from 'react';
import styled from 'styled-components';
// import axios from 'axios';
import { Alert } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function LoginForm(props) {
  const initialDetails = {
    username: '',
    password: '',
  };
  const [loginDetails, setLoginDetails] = useState(initialDetails);
  const [response, setResponse] = useState(null);

  const handleChange = e => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // axios({
    //   method: 'POST',
    //   url: `/api/v1/login`,
    //   data: loginDetails,
    // })
    //   .then(response => {
    //     setResponse(response.data.message);
    //     console.log(response);
    //   })
    //   .catch(err => {
    //     setResponse(err.response.data.message);
    //   });
    const url = '/api/v1/users/login';

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(loginDetails),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();
      setResponse('Login Successful');
      setLoginDetails(initialDetails);
      return props.history.push('/');
    } catch (error) {
      console.error('Error: ', error);
      setResponse(error);
    }
  };

  return (
    <>
      <div>{response ? <Alert color="primary">{response}</Alert> : null}</div>
      <div style={{ marginTop: '20px' }}>
        <h3>Login</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="username">Username:</Label>
          <Input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <Button type="submit">Login</Button>
          <Link to="/signup">
            <WhiteButton>create an account</WhiteButton>
          </Link>
        </div>
      </form>
    </>
  );
}

const Label = styled.label`
  font-weight: bold;
  font-size: 12px;
`;

const Input = styled.input`
  border: none;
  background-color: #fff;
  display: block;
  margin-top: 10px;
  margin-bottom: 20px;
  width: 100%;
  height: 35px;
  padding: 4px;
  padding-left: 6px;

  @media screen and (max-width: 750px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
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

const WhiteButton = styled.button`
  border: none;
  background: none 0% 0% no-repeat padding-box;
  border-radius: 14px;
  color: #34a853;
  width: 125px;
  height: 34px;
  font-size: 12px;
  font-weight: bold;
`;
