import { createContext } from 'react';
import React, { useState , useEffect } from 'react';


import { testUser1, testUser2, testUser3 } from './FakeUsers';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);  // You can initialize this with any initial value you like

  useEffect(() => {
    setUser(testUser1);
  }, []);


  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
