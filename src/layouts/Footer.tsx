// src/layouts/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 text-gray-700 p-4 mt-8 text-center">
      <div className="container mx-auto">
        © {new Date().getFullYear()} MediConnect. All rights reserved.
        {/* Add other footer links/info later */}
      </div>
    </footer>
  );
};

export default Footer;