import React, {createContext, useState, ReactNode, useContext} from 'react';

const UserContext = createContext({
  userId: '',
});

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({children}: {children: ReactNode}) => {
  const [userId] = useState('7f90df6e-b832-44e2-b624-3143d428001f');

  return (
    <UserContext.Provider value={{userId}}>{children}</UserContext.Provider>
  );
};