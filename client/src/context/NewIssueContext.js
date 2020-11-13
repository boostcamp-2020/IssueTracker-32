import React, { createContext, useState } from 'react';

export const NewIssueContext = createContext();

export const NewIssueProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  return (
    <NewIssueContext.Provider
      value={{
        title,
        setTitle,
        detail,
        setDetail,
      }}
    >
      {children}
    </NewIssueContext.Provider>
  );
};
