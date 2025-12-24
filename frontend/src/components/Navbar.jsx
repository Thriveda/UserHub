import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#FEF7E3] shadow-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto py-4 px-4 flex justify-between items-center">
        
        {/* Logo / App Name */}
        <Link
          to="/"
          className="text-3xl font-bold bg-gradient-to-r from-[#E85AAE] to-[#7C6CF2] transition-all text-transparent bg-clip-text transition transform hover:scale-105"
        >
          UserHub
        </Link>

        {/* Action Button */}
        <Link
          to="/create-user"
          className="bg-gradient-to-r from-[#E85AAE] to-[#7C6CF2] text-white px-6 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg transition transform hover:scale-105"
        >
          Create User
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;
