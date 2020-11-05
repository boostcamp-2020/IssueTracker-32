import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  padding: 30px 10px;
  border-top: 1px solid #e9ecef;
  color: #868e96;
`;

const Footer = () => {
  return <FooterContainer> &copy; Boostcamp 2020 Team 32 😄</FooterContainer>;
};

export default Footer;
