import { createContext, useContext, useState } from "react";
import {UserContext} from './UserContext';

export function UserProvider({ children }) {
    const [currentUser, setCurrentUser] = useState({user:'jessjelly'});

    return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
}
