// src/layouts/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          MediConnect
        </Link>
        <div>
          {/* Add navigation links later */}
          <Link to="/search" className="px-3 py-2 hover:bg-blue-700 rounded">Find Doctor</Link>
          <Link to="/login" className="px-3 py-2 hover:bg-blue-700 rounded">Login</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;