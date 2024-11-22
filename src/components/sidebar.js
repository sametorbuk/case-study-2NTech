"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faCreditCard,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";

const menuItems = [
  { name: "Insights", icon: faChartBar, path: "#" },
  { name: "Cards", icon: faCreditCard, path: "#" },
  { name: "Booking", icon: faCalendar, path: "#" },
];

const Sidebar = () => {
  const [active, setActive] = useState("Insights");

  return (
    <aside className="bg-gray-100 h-screen w-64 p-6">
      <h2 className="text-xl font-bold mb-4">Apps</h2>
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li
            key={item.name}
            onClick={() => setActive(item.name)}
            className={`flex items-center gap-4 p-3 cursor-pointer rounded-lg ${
              active === item.name
                ? "bg-green-100 text-green-600"
                : "text-gray-700"
            }`}
          >
            <FontAwesomeIcon icon={item.icon} className="w-6 h-6" />
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
