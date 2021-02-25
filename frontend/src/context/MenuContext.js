import { createContext, useContext, useState } from 'react';

export const MenuContext = createContext();

export const useMenu = () => useContext(MenuContext);

export default function MenuProvider({ children }) {
  const [menu, setMenu] = useState('open');

  return (
    <MenuContext.Provider
      value={{
        menu,
        setMenu
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
