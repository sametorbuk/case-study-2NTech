"use client";

import { useFinance } from "../contexts/FinanceContext";
import { format } from "date-fns";

const Table = () => {
  const { financeData } = useFinance();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <table className="w-full">
        <thead>
          <tr className="text-left text-sm text-gray-500 border-b">
            <th className="py-2">Tarih</th>
            <th className="py-2">Kategori</th>
            <th className="py-2">Tutar</th>
            <th className="py-2">Tür</th>
          </tr>
        </thead>
        <tbody>
          {financeData.map((item, index) => (
            <tr key={index} className="text-sm text-gray-700 border-b">
              <td className="py-2">
                {format(new Date(item.date), "MMM dd, yyyy")}
              </td>{" "}
              <td className="py-2">{item.category}</td> {/* Kategori */}
              <td className="py-2">{`₺${item.amount.toFixed(2)}`}</td>{" "}
              <td className="py-2">
                {item.type === "gelir" ? "Gelir" : "Gider"}
              </td>{" "}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
