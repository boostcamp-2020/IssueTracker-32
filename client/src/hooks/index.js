import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => window.localStorage.getItem(key) || initialValue);

  const setLocalStorageValue = (value) => {
    setValue(value);
    window.localStorage.setItem(key, value);
  };

  return [value, setLocalStorageValue];
};

export { useLocalStorage };
