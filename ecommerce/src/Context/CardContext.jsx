import React, { createContext, useReducer, useEffect } from "react";
import { initialState, reducer } from "../reducer/cardReducer";

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, (init) => {
    try {
      const raw = localStorage.getItem("cardneha");
      return raw ? JSON.parse(raw) : init;
    } catch {
      return init;
    }
  });

  useEffect(() => {
    localStorage.setItem("cardneha", JSON.stringify(state));
  }, [state]);

  return (
    <CardContext.Provider value={{ state, dispatch }}>
      {children}
    </CardContext.Provider>
  );
};
