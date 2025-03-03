import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="flex justify-between items-center h-24 px-4 sm:px-10 py-4 border-b">
      <div className="w-36 h-full flex items-center pl-5">
        <Image
          src="/assets_sibantuin_logo.png"
          alt="Logo"
          className="object-cover h-full w-full"
          width={500}
          height={500}
        />
      </div>

      <div className="hidden md:flex items-center gap-8 pr-8">
        <div className="flex items-center space-x-8 text-gray-700">
          <div className="relative group px-3">
            <button className="text-[#1E3A8A] hover:text-blue-600 flex items-center py-2">
              Dashboard
              <svg
                className="w-5 h-5 ml-2 mt-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                />
              </svg>
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 py-2 w-40 rounded-md border">
              <a href="#service" className="block px-4 py-2 hover:bg-gray-100">
                Service
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Pricelist
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Referral Code
              </a>
            </div>
          </div>

          <a href="#" className="text-[#1E3A8A] hover:text-blue-600 px-3 py-2">
            Career
          </a>
          <a href="#" className="text-[#1E3A8A] hover:text-blue-600 px-3 py-2">
            Promo
          </a>
          <a
            href="#faq"
            className="text-[#1E3A8A] hover:text-blue-700 px-3 py-2"
          >
            FAQ
          </a>
        </div>

        {/* Desktop Order Button */}
        <button className="bg-[#1E3A8A] text-white font-semibold px-8 py-2 pr-6 rounded-full hover:bg-blue-900 flex items-center ml-6">
          Order
          <svg
            className="w-5 h-5 ml-2 mt-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-[#1E3A8A] hover:text-blue-600"
      >
        {isOpen ? (
          <svg
            className="w-8 h-8"
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
            className="w-8 h-8"
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

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className={`fixed inset-0 bg-black transition-opacity duration-300 ${
            isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`fixed right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6">
            <div className="space-y-4">
              <div className="text-[#1E3A8A] font-medium">Dashboard</div>
              <a
                href="#service"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 hover:bg-gray-100 rounded"
              >
                Service
              </a>
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 hover:bg-gray-100 rounded"
              >
                Pricelist
              </a>
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 hover:bg-gray-100 rounded"
              >
                Referral Code
              </a>
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-[#1E3A8A] hover:bg-gray-100 rounded"
              >
                Career
              </a>
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-[#1E3A8A] hover:bg-gray-100 rounded"
              >
                Promo
              </a>
              <a
                href="#faq"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-[#1E3A8A] hover:bg-gray-100 rounded"
              >
                FAQ
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full bg-[#1E3A8A] text-white font-semibold px-8 py-2 rounded-full hover:bg-blue-900 mt-4"
              >
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}