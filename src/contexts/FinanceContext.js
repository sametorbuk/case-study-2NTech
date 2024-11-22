"use client";

import React, { createContext, useContext, useState } from "react";

const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [financeData, setFinanceData] = useState([]);
  const [user, setUser] = useState({ name: "John Doe", income: 5000 });

  return (
    <FinanceContext.Provider
      value={{ financeData, setFinanceData, user, setUser }}
    >
      {children}
    </FinanceContext.Provider>
  );
};

export const useFinance = () => useContext(FinanceContext);
