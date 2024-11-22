"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faCreditCard,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const menuItems = [
  { name: "Overview", icon: faChartBar, path: "/" },
  { name: "Cards", icon: faCreditCard, path: "/cards" },
  { name: "Booking", icon: faCalendar, path: "/booking" },
];

const Sidebar = () => {
  const [active, setActive] = useState("Overview");

  return (
    <>
      <aside className="bg-gray-100 lg:block hidden h-screen w-64 p-6 fixed left-0 top-0">
        <Link href="/">
          <h2 className="text-xl font-bold mb-4">Apps</h2>
        </Link>
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
              <Link href={item.path}>
                <div className="flex gap-[1rem] justify-center items-center">
                  <FontAwesomeIcon icon={item.icon} className="w-8 h-8" />
                  <span>{item.name}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <div className="lg:hidden block fixed bottom-0 left-0 right-0 bg-gray-100 p-4">
        <div className="flex justify-around items-center">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.path}>
              <div
                className={`flex flex-col items-center p-2 cursor-pointer ${
                  active === item.name ? "text-green-600" : "text-gray-700"
                }`}
                onClick={() => setActive(item.name)}
              >
                <FontAwesomeIcon icon={item.icon} className="w-8 h-8" />
                <span>{item.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
