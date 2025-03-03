"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center h-24 px-10 py-4 border-b">
      {/* Logo */}
      <div className="w-36 h-full flex items-center pl-5">
        <Image
          src="/assets_sibantuin_logo.png"
          alt={""}
          className="object-cover h-full w-full"
          width={500}
          height={500}
        />
      </div>
      <div className="flex items-center gap-8 pr-8">
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
              <a href="#service" className="block px-4 py-2 hover:bg-gray-100">Service</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Pricelist</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Referral Code</a>
            </div>
          </div>
          <a href="#" className="text-[#1E3A8A]  hover:text-blue-600 px-3 py-2">Career</a>
          <a href="#" className="text-[#1E3A8A] hover:text-blue-600 px-3 py-2">Promo</a>
          <a href="#faq" className="text-[#1E3A8A] hover:text-blue-700 px-3 py-2">FAQ</a>
        </div>

        {/* Get Started Button */}
        <button className="primary-color text-white font-semibold px-8 py-2 pr-6 rounded-full hover:bg-blue-900 flex items-center ml-6">
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
    </nav>
  );
}