import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Sidebar = styled.div`
  width: 300px;
  border: 1px solid #000000;
  border-radius: 5px;
  margin-left: 20px;
`;

const IssueDetailSidebar = () => {
  return (
    <Sidebar>
      Sidebar
    </Sidebar>
  );
};

export default IssueDetailSidebar;
