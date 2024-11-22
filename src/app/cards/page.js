import AddTransactionForm from "@/components/addTransactionForm";
import ThemeToggle from "@/components/themeToggle";

export default function Cards() {
  return (
    <div className="h-full w-full">
      <div className="flex w-full justify-between items-center mb-6">
        <h1 className="font-bold text-xl">Adding income and expenses</h1>
        <ThemeToggle />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <AddTransactionForm />
        <p>Burada cards sayfasının içeriği olacak.</p>
      </div>
    </div>
  );
}
