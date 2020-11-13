import React from 'react';
import { FaGithub } from 'react-icons/fa';
import styled from 'styled-components';

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
  margin: 0px 0px 50px 0px;
`;

const LoginTitle = styled.h1`
  margin: 50px 0px 50px 0px;
  font-size: 3rem;
  font-weight: 700;
`;

const LoginPage = () => {
  return (
    <LoginContainer>
      <LoginWrapper>
        <LoginTitle>이슈 트래커</LoginTitle>
        <LoginButton href={`${API_BASE}/auth/github`}>
          <FaGithub />
          <span>Sign in with GitHub</span>
        </LoginButton>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default LoginPage;
