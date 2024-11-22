"use client";

import React, { createContext, useContext, useState } from "react";

// FinanceContext oluşturuluyor
const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  // Gelir ve gider verilerini daha detaylı kategorilerle ayırıyoruz
  const [financeData, setFinanceData] = useState([
    // Gelirler
    {
      type: "gelir",
      category: "Maaş",
      amount: 5000.0,
      description: "Aylık Maaş",
      date: "Mayıs 05, 2022",
    },
    {
      type: "gelir",
      category: "Yatırım Geliri",
      amount: 1500.0,
      description: "Hisse Senedi Geliri",
      date: "Mayıs 04, 2022",
    },
    {
      type: "gelir",
      category: "Ek Gelir",
      amount: 800.0,
      description: "Freelance Proje",
      date: "Mayıs 03, 2022",
    },

    // Giderler
    {
      type: "gider",
      category: "Fatura",
      amount: 500.0,
      description: "Elektrik Faturası",
      date: "Mayıs 05, 2022",
    },
    {
      type: "gider",
      category: "Kıyafet",
      amount: 250.0,
      description: "Yeni Ceket",
      date: "Mayıs 04, 2022",
    },
    {
      type: "gider",
      category: "Alışveriş",
      amount: 300.0,
      description: "Market Alışverişi",
      date: "Mayıs 03, 2022",
    },
    {
      type: "gider",
      category: "Ofis Giderleri",
      amount: 100.0,
      description: "Ofis Kira",
      date: "Mayıs 03, 2022",
    },
  ]);

  // Kullanıcı bilgilerini Türkçe olarak tanımlıyoruz
  const [user, setUser] = useState({ name: "Ahmet Yılmaz", income: 5000 });

  return (
    <FinanceContext.Provider
      value={{ financeData, setFinanceData, user, setUser }}
    >
      {children}
    </FinanceContext.Provider>
  );
};

// FinanceContext'ten veri almayı sağlayan hook
export const useFinance = () => useContext(FinanceContext);
