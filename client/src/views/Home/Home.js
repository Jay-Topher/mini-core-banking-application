import React from 'react';
import styled from 'styled-components';
import Navbar from '../../commons/Navbar/Navbar';
import Herotext from '../../components/Herotext/Herotext';

export default function Home() {
  return (
    <>
      <Container>
        <Navbar />
        <Content>
          <Hero>
            <Herotext />
          </Hero>
        </Content>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  margin: 0;
  background-image: url(./assets/hero-bg.png);
`;
const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

const Hero = styled.div`
  height: 100%;
  padding: 60px;
  display: flex;
  justify-content: center;
  align-content: center;

  /* @media screen and (max-width: 750px) {
    display: none;
  } */
`;
