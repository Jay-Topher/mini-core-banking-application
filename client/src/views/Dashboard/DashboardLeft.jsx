import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Profile from '../components/UserProfileModal';
import StudentAssiggment from '../components/StudentAssignment';

export default function DashboardLeft(props) {
  const [open, setOpen] = useState(false);

  const handleclose = () => {
    if (open) {
      return setOpen(!open);
    }
  };

  const handleOpen = () => {
    return setOpen(!open);
  };
  return (
    <Container>
      <SideBar className={open ? 'open' : ''}>
        <ImageContainer>
          <img src="" alt="" />
        </ImageContainer>
        <MenuList>
          <UL>
            {props.menu &&
              props.menu.map((item, index) => {
                return (
                  <Item key={index}>
                    <Icon>
                      <img src={item.icon} alt="icon" />
                    </Icon>
                    <Link to={item.link}>{item.title}</Link>
                  </Item>
                );
              })}
          </UL>
        </MenuList>
      </SideBar>
      <ContentArea onClick={handleclose}>
        <Handburger onClick={handleOpen} className={open ? 'top' : ''}>
          <Line className={`${open ? 'line-color line1' : ''} `} />
          <Line className={`${open ? 'line-color line2' : ''} `} />
          <Line className={`${open ? 'line-color line3' : ''} `} />
        </Handburger>
        <Profile />
        <StudentAssiggment />
        {console.log(props)}
        {props.children}
        Main content area
      </ContentArea>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 0;
  position: relative;
  .open {
    transition: left 0.5s;
    left: 0;
    z-index: 0.5;
    position: absolute;
  }
`;

const SideBar = styled.div`
  width: 270px;
  color: #ffffff;
  padding: 2em;
  background: transparent linear-gradient(180deg, #2d2f48 0%, #09090e 100%) 0%
    0% no-repeat padding-box;
  z-index: 100;

  @media screen and (max-width: 750px) {
    position: absolute;
    left: -280px;
    transition: left 0.7s;
    width: 200px;
  }
`;

const Handburger = styled.div`
  display: flex;
  flex-direction: column;
  width: 30px;
  @media screen and (min-width: 751px) {
    display: none;
  }
  cursor: pointer;
  .top {
    z-index: 999999;
    position: relative;
  }
  .line-color {
    z-index: 999999;
    background-color: white;
    color: #000;
  }
  .line1 {
    transform: rotate(45deg);
    top: 4%;
    position: absolute;
  }
  .line2 {
    display: none;
  }
  .line3 {
    transform: rotate(-45deg);
    top: 4%;
    position: absolute;
  }
`;

const Line = styled.div`
  width: 25px;
  height: 3px;
  border-radius: 5px;
  background-color: #09090e;
  margin: 2px;
  z-index: 9999;
  .line-color {
    z-index: 999999;
    background-color: white;
    color: #000;
    transform: translateX(45);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  text-align: center;
  margin: 7em 0 3em 0;
  align-items: center;
  justify-content: center;
`;

const MenuList = styled.div``;

const UL = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 0.9em;
  &:hover {
    background-color: white;
    color: #09090e;
  }
`;

const Icon = styled.div`
  width: 30px;
  margin-right: 0.7em;
  &:hover {
    background-color: #09090e;
    color: #09090e;
  }
`;
const ContentArea = styled.div`
  width: 100%;
  height: 100%;
  padding: 2em;
  @media screen and (max-width: 750px) {
    padding: 1em;
  }
  background: #f2f6fa 0% 0% no-repeat padding-box;
  .top {
    z-index: 999999;
  }
`;
