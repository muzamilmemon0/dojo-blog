import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar flex items-center justify-between p-5 max-w-[600px] mx-auto mt-0 mb-0">
      <h1 className="text-pinkHeading font-bold text-2xl">The Dojo Blog</h1>
      <div className="links flex justify-between space-x-4 ml-auto">
        <Link
          to="/"
          className="hover:bg-[#f1356d] hover:text-white p-1 rounded-xl"
        >
          Home
        </Link>
        <Link to="/create" className="text-white p-1 bg-[#f1356d] rounded-xl">
          New Blog
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
