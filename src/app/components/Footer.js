import Image from "next/image";
import { FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-gray-700 py-10 px-4 sm:px-6 border-bottom">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
        <div className="text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <Image
              src="/assets_sibantuin_logo.png"
              alt="Sibantuin Logo"
              width={140}
              height={70}
              className="object-cover w-32 h-auto"
            />
          </div>
          <p className="text-[#5D5A88] pb-4 mt-4 ml-1 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma
          </p>
          <div className="flex justify-center ml-1 md:justify-start gap-4 mt-4">
            <a 
              href="https://x.com/sibantuin" 
              className="p-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors"
            >
              <i className="fa fa-twitter mr-1"></i>
            </a>
            <a 
              href="https://www.instagram.com/sibantuin.id/"
              className="p-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors"
            >
              <FaInstagram className="text-gray-600 text-lg mt-1" />
            </a>
          </div>
        </div>

        {/* Product Section */}
        <div className="mt-8 md:mt-0 text-center md:text-left">
          <h3 className="text-lg font-bold text-[#5D5A88] mb-4">Product</h3>
          <ul className="space-y-3 text-sm md:text-base text-[#9795B5]">
            <li className="hover:text-[#5D5A88] transition-colors">Service</li>
            <li className="hover:text-[#5D5A88] transition-colors">Pricelist</li>
            <li className="hover:text-[#5D5A88] transition-colors">Referral Code</li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="mt-8 md:mt-0 text-center md:text-left">
          <h3 className="text-lg font-bold text-[#5D5A88] mb-4">Company</h3>
          <ul className="space-y-3 text-sm md:text-base text-[#9795B5]">
            <li className="hover:text-[#5D5A88] transition-colors">About</li>
            <li className="hover:text-[#5D5A88] transition-colors">Contact us</li>
            <li className="hover:text-[#5D5A88] transition-colors">Service</li>
            <li className="hover:text-[#5D5A88] transition-colors">FAQ</li>
            <li className="hover:text-[#5D5A88] transition-colors">Testimoni</li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="mt-8 md:mt-0 text-center md:text-left">
          <h3 className="text-lg font-bold text-[#5D5A88] mb-4">Support</h3>
          <ul className="space-y-3 text-sm md:text-base text-[#9795B5]">
            <li className="hover:text-[#5D5A88] transition-colors">Chat support</li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm md:text-base text-[#6E7191] mt-12 border-t pt-8 mx-12">
        Copyright © 2025 SIBANTUIN | Reference by BRIX
      </div>
    </footer>
  );
}