"use client";

const ProgressCard = () => {
  const progress = 8.32;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">Remittance Progress</h2>
      <p className="text-4xl font-bold text-green-600 mb-2">$41,622</p>
      <p className="text-sm text-gray-500">{progress}%</p>
      <div className="w-full bg-gray-200 h-2 rounded-full mt-4">
        <div
          className="bg-green-500 h-2 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="grid grid-cols-3 mt-6 text-sm text-gray-700">
        <div>
          <p className="font-semibold">$500,000.00</p>
          <p>Remittance Total</p>
        </div>
        <div>
          <p className="font-semibold">$500,000.00</p>
          <p>Cash Advance Amount</p>
        </div>
        <div>
          <p className="font-semibold">$10,724.85</p>
          <p>Approx. Fees</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
