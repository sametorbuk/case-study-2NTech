export const checkBudgetLimits = (financeData, categoryLimits) => {
  const warnings = [];

  categoryLimits.forEach((limit) => {
    const totalExpense = financeData
      .filter(
        (item) => item.category === limit.category && item.type === "expense"
      )
      .reduce((sum, item) => sum + item.amount, 0);

    if (totalExpense > limit.limit * 0.8) {
      warnings.push(
        `"${limit.category}" kategorisinde bütçenizin %80'ine ulaştınız.`
      );
    }
  });

  return warnings;
};
