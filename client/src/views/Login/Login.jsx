import React from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';

export default function LoginPage() {
  return (
    <Container>
      <HalfHero>
        <ImageHolder>
          <img src="./assets/img/decagon-logo.png" alt="" />
        </ImageHolder>
        <p style={{ width: '450px' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          aliquam rerum architecto blanditiis sit nesciunt accusantium voluptate
          laborum. Ipsum libero, porro voluptates quibusdam quasi blanditiis
          consequatur quam deserunt ratione magni!
        </p>
      </HalfHero>
      <LoginContent>
        <div>
          <LoginForm />
        </div>
      </LoginContent>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  margin: 0;
`;

const HalfHero = styled.div`
  flex: 2;
  height: 100%;
  padding: 60px;
  color: #fff;
  background-image: linear-gradient(
      to right bottom,
      rgba(45, 47, 72, 0.9),
      rgba(45, 47, 72, 0.9)
    ),
    url(./assets/laptop.png);
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  @media screen and (max-width: 750px) {
    display: none;
  }
`;

const LoginContent = styled.div`
  flex: 3;
  height: 100%;
  background: #f2f6fa 0% 0% no-repeat padding-box;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  & div {
    margin: 0 auto;
    width: 90%;
  }
`;

const ImageHolder = styled.div`
  width: 190px;
  height: 50px;
`;
