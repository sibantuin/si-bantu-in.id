import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const desktopDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (desktopDropdownRef.current && !desktopDropdownRef.current.contains(event.target)) {
        setDesktopDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="flex justify-between items-center h-24 px-4 sm:px-10 py-4 border-b">
      <div className="w-36 h-full flex items-center pl-5">
        <Image
          src="/assets_sibantuin_logo.svg"
          alt="Logo"
          className="object-cover h-full w-full"
          width={500}
          height={500}
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 pr-8">
        <div className="flex items-center space-x-8 text-gray-700">
          {/* Desktop Dashboard Dropdown */}
          <div className="relative" ref={desktopDropdownRef}>
            <button
              onClick={() => setDesktopDropdownOpen(!isDesktopDropdownOpen)}
              className="text-[#1E3A8A] font-medium hover:text-blue-600 flex items-center py-2 px-3"
            >
              Dashboard
              <svg
                className={`w-5 h-5 ml-2 transform transition-transform duration-300 ${isDesktopDropdownOpen ? 'rotate-180' : 'rotate-0'
                  }`}
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
                  d="M5 7l5 5 5-5"
                />
              </svg>
            </button>

            {isDesktopDropdownOpen && (
              <div className="absolute bg-white shadow-lg mt-2 py-2 w-40 rounded-md border z-50">
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
            )}
          </div>

          <a href="#" className="text-[#1E3A8A] font-medium hover:text-blue-600 px-3 py-2">
            Career
          </a>
          <a href="#" className="text-[#1E3A8A] font-medium hover:text-blue-600 px-3 py-2">
            Promo
          </a>
          <a
            href="#faq"
            className="text-[#1E3A8A] font-medium hover:text-blue-700 px-3 py-2"
          >
            FAQ
          </a>
        </div>

        {/* Desktop Order Button */}
        <button
          onClick={() => window.location.href = "http://wa.me/6285183148307"}
          className="bg-[#1E3A8A] text-white font-medium px-8 py-2 rounded-full hover:bg-[#0D2A6B] flex items-center ml-6 shadow-lg transition-all"
        >
          Order
          <svg
            className="w-5 h-5 ml-2 mt-2.5"
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

      {/* Mobile Menu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-[#1E3A8A] hover:text-blue-600"
      >
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-50 transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div
          className={`fixed inset-0 bg-black transition-opacity duration-300 ${isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
            }`}
          onClick={() => setIsOpen(false)}
        />

        <div className={`fixed right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}>
          <div className="p-6">
            <div className="space-y-4">
              {/* Mobile Dashboard Dropdown */}
              <button
                onClick={() => setMobileDropdownOpen(!isMobileDropdownOpen)}
                className="flex items-center justify-between w-full px-4 py-2 text-[#1E3A8A] font-medium hover:bg-gray-100 rounded"
              >
                Dashboard
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${isMobileDropdownOpen ? 'rotate-180' : 'rotate-0'
                    }`}
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
                    d="M5 7l5 5 5-5"
                  />
                </svg>
              </button>

              {isMobileDropdownOpen && (
                <div className="pl-6">
                  <a href="#service" onClick={() => setIsOpen(false)} className="block px-4 py-2 hover:bg-gray-100 rounded">
                    Service
                  </a>
                  <a href="#" onClick={() => setIsOpen(false)} className="block px-4 py-2 hover:bg-gray-100 rounded">
                    Pricelist
                  </a>
                  <a href="#" onClick={() => setIsOpen(false)} className="block px-4 py-2 hover:bg-gray-100 rounded">
                    Referral Code
                  </a>
                </div>
              )}

              <a href="#" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-[#1E3A8A] font-medium hover:bg-gray-100 rounded">
                Career
              </a>
              <a href="#" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-[#1E3A8A] font-medium hover:bg-gray-100 rounded">
                Promo
              </a>
              <a href="#faq" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-[#1E3A8A] font-medium hover:bg-gray-100 rounded">
                FAQ
              </a>
              <button
                onClick={() => {
                  setIsOpen(false);
                  window.location.href = "http://wa.me/6285183148307";
                }}
                className="w-full bg-[#1E3A8A] text-white font-medium px-8 py-2 rounded-full hover:bg-[#0D2A6B] mt-4 shadow-lg transition-all"
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