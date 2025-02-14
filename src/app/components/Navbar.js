export default function Navbar() {
    return (
      <nav className="flex justify-between items-center px-8 py-4 border-b">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-800">
          <span className="tracking-wide">B</span>
          <span className="text-blue-600">A</span>
          <span className="tracking-wide">NTUIN</span>
        </div>
  
        {/* Menu Items */}
        <div className="flex items-center space-x-6 text-gray-700">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">About</a>
          <div className="relative group">
            <button className="hover:text-blue-600 flex items-center">
              Resources
              <span className="ml-1">▼</span>
            </button>
            {/* Dropdown Menu */}
            <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 py-2 w-40 rounded-md border">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 1</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 2</a>
            </div>
          </div>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </div>
  
        {/* Get Started Button */}
        <button className="bg-blue-800 text-white px-6 py-2 rounded-full hover:bg-blue-900 flex items-center">
          Get started →
        </button>
      </nav>
    );
  }
  