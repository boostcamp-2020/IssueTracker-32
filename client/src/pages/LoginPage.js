import React from 'react';
import { FaGithub } from 'react-icons/fa';
import styled from 'styled-components';
import axios from 'axios';

const LoginContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const LoginWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LoginButton = styled.a`
  display: flex;
  width: 160px;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 7px;
  background-color: #868e96;
  color: white;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  padding: 5px 40px;
`;

const LoginTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
`;

const LoginPage = () => {
  const handleClick = async () => {
    const data = await axios.get(`${API_BASE}/auth/github`);
    console.log(data);
  };

  return (
    <LoginContainer>
      <LoginWrapper>
        <LoginTitle>이슈 트래커</LoginTitle>
        <LoginButton href={`${API_BASE}/auth/github`}>
          <FaGithub />
          <span>Sign in with GitHub</span>
        </LoginButton>
        <button onClick={handleClick}></button>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default LoginPage;
