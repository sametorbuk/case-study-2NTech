import ThemeToggle from "@/components/themeToggle";
import { FinanceProvider } from "../contexts/FinanceContext";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground dark:bg-darkBackground dark:text-darkForeground">
        <FinanceProvider>{children}</FinanceProvider>
      </body>
    </html>
  );
}
