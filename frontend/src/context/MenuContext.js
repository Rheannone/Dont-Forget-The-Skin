import { createContext, useContext, useState } from 'react';

export const MenuContext = createContext();

export const useMenu = () => useContext(MenuContext);

export default function MenuProvider({ children }) {
  const [menu, setMenu] = useState('open');
  const [listRefresh, setListRefresh] = useState("default")

  return (
    <MenuContext.Provider
      value={{
        menu,
        setMenu,
        listRefresh,
        setListRefresh
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
