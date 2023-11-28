import { createContext, useContext, useReducer } from "react";
import rateReducer from "../reducers/rateReducer";

const initialMinRate = 3;

const UserContext = createContext();
const UserContextProvider = ({ children }) => {
  const [minRate, dispatchMinRate] = useReducer(rateReducer, initialMinRate);
  return (
    <UserContext.Provider value={{ minRate, dispatchMinRate }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};

export { UserContextProvider, useUserContext };
