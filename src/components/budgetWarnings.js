import { checkBudgetLimits } from "../utils/budgetWarnings";

const BudgetWarnings = ({ financeData }) => {
  const categoryLimits = [
    { category: "Groceries", limit: 500 },
    { category: "Transport", limit: 300 },
  ];

  const warnings = checkBudgetLimits(financeData, categoryLimits);

  return (
    <div>
      <h3>Bütçe Uyarıları</h3>
      <ul>
        {warnings.map((warning, index) => (
          <li key={index}>{warning}</li>
        ))}
      </ul>
    </div>
  );
};

export default BudgetWarnings;
