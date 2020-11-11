import React, { createContext, useState, useEffect } from 'react';

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filterString, setFilterString] = useState('is:open');

  const [isOpen, setIsOpen] = useState(true);
  const [author, setAuthor] = useState(null);
  const [labels, setLabels] = useState([]);
  const [project, setProject] = useState(null);
  const [milestone, setMilestone] = useState(null);
  const [assiginee, setAssiginee] = useState(null);

  const makeLabelString = (labels) => {
    let labelString = '';
    labels.forEach((label) => {
      labelString = `label:${label} `;
    });
    return labelString;
  };

  const makeFilterString = (isOpen, author, labels, project, milestone, assiginee) => {
    const isOpenString = isOpen === true ? 'is:open ' : 'is:closed ';
    const authorString = author == undefined ? '' : `author:${author} `;
    const labelString = makeLabelString(labels);
    const projectString = project == undefined ? '' : `project:${project} `;
    const milestoneString = milestone == undefined ? '' : `milestone:${milestone} `;
    const assigineeString = assiginee == undefined ? '' : `assiginee:${assiginee} `;

    const newString =
      isOpenString + authorString + labelString + projectString + milestoneString + assigineeString;
    return newString;
  };

  useEffect(() => {
    const newString = makeFilterString(isOpen, author, labels, project, milestone, assiginee);
    setFilterString(newString);
  }, [isOpen, author, labels, project, milestone, assiginee]);

  return (
    <FilterContext.Provider
      value={{
        filterString,
        setFilterString,
        isOpen,
        setIsOpen,
        author,
        setAuthor,
        labels,
        setLabels,
        project,
        setProject,
        milestone,
        setMilestone,
        assiginee,
        setAssiginee,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
