import ThemeToggle from "@/components/themeToggle";
import { FinanceProvider } from "../contexts/FinanceContext";
import Sidebar from "@/components/sidebar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background lg:flex text-foreground dark:bg-darkBackground dark:text-darkForeground">
        <FinanceProvider>
          <Sidebar />
          <main className="flex-1 lg:ml-64 p-6"> {children}</main>
        </FinanceProvider>
      </body>
    </html>
  );
}
