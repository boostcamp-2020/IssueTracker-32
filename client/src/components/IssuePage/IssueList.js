import React, { useEffect } from 'react';
import styled from 'styled-components';
import IssueItem from './IssueItem';

const IssueList = (props) => {
  const issueList = props.issueList;
  return (
    <div>
      {issueList.map((issue, i) => {
        return <IssueItem issue={issue} />;
      })}
    </div>
  );
};

export default IssueList;
