import React from 'react';
import { ImGithub } from 'react-icons/im';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: black;
  box-shadow: 0 2px 5px #868e96;
  color: white;
`;

const NavTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  font-size: 2rem;
  font-weight: 600;
`;

const NavLink = styled(Link)`
  display: flex;
  margin-left: 10px;
  align-items: center;
  text-decoration: none;
  color: white;
`;

const NavigationBar = () => {
  return (
    <NavbarContainer>
      <NavTitle>
        <ImGithub />
        <NavLink to="/">Github Issue Tracker</NavLink>
      </NavTitle>
    </NavbarContainer>
  );
};

export default NavigationBar;
