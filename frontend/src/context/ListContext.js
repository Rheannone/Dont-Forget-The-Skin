import { createContext, useContext, useState } from 'react';

export const ListContext = createContext();

export const useList = () => useContext(ListContext);

export default function MenuProvider({ children }) {
  const [list, setList] = useState('default');

  return (
    <ListContext.Provider
      value={{
        list,
        setList
      }}
    >
      {children}
    </ListContext.Provider>
  );
}
