// components/Footer.js
import Image from "next/image";
import { FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-gray-700 py-10 px-6 border-bottom">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Image
            src="/assets_sibantuin_logo.png"
            alt={""}
            className="object-cover h-[70px] w-[140px]"
            width={500}
            height={500}
          />
          <p className="text-[#5D5A88] pb-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma
          </p>
          <div className="flex gap-4 mt-4">
            <button className="p-2 bg-gray-300 rounded-lg">
              <a href="https://x.com/sibantuin" className="text-gray-600 flex items-center">
                <i className="fa fa-twitter mr-1"></i>
              </a>
            </button>
            <button className="p-2 bg-gray-300 rounded-lg">
              <a href="https://www.instagram.com/sibantuin.id/">
                <FaInstagram className="text-gray-600" />
              </a>
            </button>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-lg ml-12 font-bold text-[#5D5A88]">Product</h3>
          <ul className="mt-2 ml-12 space-y-2 text-sm text-[#9795B5]">
            <li>Service</li>
            <li>Pricelist</li>
            <li>Referral Code</li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-lg ml-8 font-bold text-[#5D5A88]">Company</h3>
          <ul className="mt-2 ml-8 space-y-2 text-sm text-[#9795B5]">
            <li>About</li>
            <li>Contact us</li>
            <li>Service</li>
            <li>FAQ</li>
            <li>Testimoni</li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-lg ml-8 font-bold text-[#5D5A88]">Support</h3>
          <ul className="mt-2 ml-8 space-y-2 text-sm text-[#9795B5]">
            <li>Chat support</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-[#6E7191] mt-6 border-t pt-8 mt-[66px]">
        Copyright © 2025 SIBANTUIN | Reference by BRIX
      </div>
    </footer>
  );
}
