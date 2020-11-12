import React, { createContext, useState, useEffect } from 'react';

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filterString, setFilterString] = useState('is:open');
  const [isDefault, setIsDefault] = useState(true);

  const [isOpen, setIsOpen] = useState(true);
  const [author, setAuthor] = useState(null);
  const [label, setLabel] = useState(null);
  const [milestone, setMilestone] = useState(null);
  const [assignee, setAssignee] = useState(null);

  const isDefaultStatus = (isOpen, author, label, milestone, assignee) => {
    if (isOpen !== true) return false;
    if (author != null) return false;
    if (label != null) return false;
    if (milestone != null) return false;
    if (assignee != null) return false;
    return true;
  };

  const makeDefault = () => {
    setIsOpen(true);
    setAuthor(null);
    setLabel(null);
    setMilestone(null);
    setAssignee(null);
    setIsDefault(true);
  };

  const makeFilterString = (isOpen, author, label, milestone, assignee) => {
    const isOpenString = isOpen === true ? 'is:open ' : 'is:closed ';
    const authorString = author == undefined ? '' : `author:${author} `;
    const labelString = label == undefined ? '' : `label:${label} `;
    const milestoneString = milestone == undefined ? '' : `milestone:${milestone} `;
    const assigneeString = assignee == undefined ? '' : `assignee:${assignee} `;

    const newString = isOpenString + authorString + labelString + milestoneString + assigneeString;
    return newString;
  };

  useEffect(() => {
    const currentStatus = isDefaultStatus(isOpen, author, label, milestone, assignee);
    setIsDefault(currentStatus);
    const newString = makeFilterString(isOpen, author, label, milestone, assignee);
    setFilterString(newString);
  }, [isOpen, author, label, milestone, assignee]);

  return (
    <FilterContext.Provider
      value={{
        filterString,
        setFilterString,
        isDefault,
        setIsDefault,
        isOpen,
        setIsOpen,
        author,
        setAuthor,
        label,
        setLabel,
        milestone,
        setMilestone,
        assignee,
        setAssignee,
        makeDefault,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
