"use client";

import { useState } from "react";
import { useFinance } from "../contexts/FinanceContext";

const AddTransactionForm = () => {
  const { financeData, setFinanceData } = useFinance();
  const [form, setForm] = useState({
    type: "income",
    category: "",
    amount: "",
    description: "",
    date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      ...form,
      id: financeData.length + 1,
    };
    setFinanceData([...financeData, newTransaction]);
    setForm({
      type: "income",
      category: "",
      amount: "",
      description: "",
      date: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 lg:space-y-0 lg:flex lg:gap-6"
    >
      <div className="flex flex-col lg:flex-row gap-4 lg:w-3/4">
        <select
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
          className="border p-2 rounded-md w-full lg:w-48"
        >
          <option value="income">Gelir</option>
          <option value="expense">Gider</option>
        </select>

        <input
          type="text"
          placeholder="Kategori"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="border p-2 rounded-md w-full lg:w-48"
        />

        <input
          type="number"
          placeholder="Tutar"
          value={form.amount}
          onChange={(e) =>
            setForm({ ...form, amount: parseFloat(e.target.value) })
          }
          className="border p-2 rounded-md w-full lg:w-48"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:w-3/4">
        <input
          type="text"
          placeholder="Açıklama"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="border p-2 rounded-md w-full lg:w-48"
        />

        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="border p-2 rounded-md w-full lg:w-48"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md w-full lg:w-48"
      >
        Ekle
      </button>
    </form>
  );
};

export default AddTransactionForm;
