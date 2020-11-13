import React, { useEffect } from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 300px;
  border: 1px solid #999999;
  border-radius: 5px;
  padding: 10px;
  margin-left: 10px;
`;

const Sidebar = (props) => {
  return (
    <SidebarContainer>
        Sidebar
    </SidebarContainer>
  );
};

export default Sidebar;
