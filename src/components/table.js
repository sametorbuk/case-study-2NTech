"use client";

const data = [
  { date: "May 05, 2022", sales: "$250,937.80", remittance: "$11,292.20" },
  { date: "May 04, 2022", sales: "$238,315.85", remittance: "$10,724.85" },
  { date: "May 03, 2022", sales: "$244,494.41", remittance: "$11,734.87" },
];

const Table = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <table className="w-full">
        <thead>
          <tr className="text-left text-sm text-gray-500 border-b">
            <th className="py-2">Date</th>
            <th className="py-2">Sales</th>
            <th className="py-2">Wayflyer Remittance</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="text-sm text-gray-700 border-b">
              <td className="py-2">{item.date}</td>
              <td className="py-2">{item.sales}</td>
              <td className="py-2">{item.remittance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
