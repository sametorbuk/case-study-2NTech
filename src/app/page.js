"use client";

import ExpenseChart from "@/components/expenseChart";
import ProgressCard from "@/components/progressCard";
import Sidebar from "@/components/sidebar";
import Table from "@/components/table";
import ThemeToggle from "@/components/themeToggle";

export default function Home() {
  const expenseData = {
    labels: [
      "Ocak",
      "Şubat",
      "Mart",
      "Nisan",
      "Mayıs",
      "Haziran",
      "Temmuz",
      "Ağustos",
      "Eylül",
      "Ekim",
      "Kasım",
      "Aralık",
    ],
    monthlyExpenses: [
      120, 150, 100, 130, 160, 140, 170, 180, 210, 250, 300, 280,
    ],
  };

  return (
    <div className="flex flex-col lg:flex-row w-full">
      <main className="flex-1 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6">
        <div className="flex justify-center items-center justify-around lg:flex lg:justify-between lg:items-center mb-6">
          <h1 className="text-2xl font-bold">Financing</h1>
          <div className="flex justify-around items-center w-[19rem]">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="border rounded-md p-2 w-32 lg:w-64"
            />
            <ThemeToggle />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 lg:w-2/3">
            <ProgressCard />
            <Table />
          </div>

          <div className="w-full lg:w-80 bg-white p-6 rounded-lg shadow-md">
            <ExpenseChart data={expenseData} />
          </div>
        </div>
      </main>
    </div>
  );
}
