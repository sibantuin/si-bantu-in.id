// components/Footer.js
import { FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-gray-700 py-10 px-6 border-bottom">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-xl font-bold text-blue-900">BANTUIN</h2>
          <p className="mt-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma
          </p>
          <div className="flex gap-3 mt-4">
            <button className="p-2 bg-gray-200 rounded-lg">
              <FaTwitter className="text-gray-600" />
            </button>
            <button className="p-2 bg-gray-200 rounded-lg">
              <FaInstagram className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Links Sections */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Product</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>Features</li>
            <li>Pricing</li>
            <li>Case studies</li>
            <li>Reviews</li>
            <li>Updates</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">Company</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>About</li>
            <li>Contact us</li>
            <li>Careers</li>
            <li>Culture</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">Support</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>Getting started</li>
            <li>Help center</li>
            <li>Server status</li>
            <li>Report a bug</li>
            <li>Chat support</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">Downloads</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>iOS</li>
            <li>Android</li>
            <li>Mac</li>
            <li>Windows</li>
            <li>Chrome</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-500 mt-6 border-t pt-4">
        Copyright © 2023 BRIX Templates | All Rights Reserved |
        <a href="#" className="text-blue-600"> Terms and Conditions </a> |
        <a href="#" className="text-blue-600"> Privacy Policy</a>
      </div>
    </footer>
  );
}
