// src/layouts/MainLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import Header from './Header';
import Footer from './Footer';

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Child routes will be rendered here */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;