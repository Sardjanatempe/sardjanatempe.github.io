import { useState } from "react";
import ThemeSwitch from "./theme-switch";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
        <div className="flex justify-between items-center">
          <div className="text-gray-900 dark:text-white text-xl font-bold">
            SARDJANA TEMPE
          </div>
          <div className="flex items-center space-x-4">
            <ThemeSwitch />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gray-900 dark:text-white focus:outline-none hover:text-gray-300 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isOpen ? "block" : "hidden"} lg:hidden mt-4 pb-4`}>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="block text-gray-900 dark:text-white p-2 hover:bg-gray-700 dark:hover:bg-gray-800 rounded transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-gray-900 dark:text-white p-2 hover:bg-gray-700 dark:hover:bg-gray-800 rounded transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-gray-900 dark:text-white p-2 hover:bg-gray-700 dark:hover:bg-gray-800 rounded transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-gray-900 dark:text-white p-2 hover:bg-gray-700 dark:hover:bg-gray-800 rounded transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex lg:items-center">
          <ul className="flex space-x-8">
            <li>
              <a
                href="#"
                className="text-gray-900 dark:text-white hover:text-gray-300 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 dark:text-white hover:text-gray-300 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 dark:text-white hover:text-gray-300 transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 dark:text-white hover:text-gray-300 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
