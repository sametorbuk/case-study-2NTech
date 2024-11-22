"use client";

import ProgressCard from "@/components/progressCard";
import Sidebar from "@/components/sidebar";
import Table from "@/components/table";
import ThemeToggle from "@/components/themeToggle";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Financing</h1>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="border rounded-md p-2 w-64"
            />
            <ThemeToggle />
          </div>
        </div>

        <ProgressCard />

        <Table />
      </main>
    </div>
  );
}
