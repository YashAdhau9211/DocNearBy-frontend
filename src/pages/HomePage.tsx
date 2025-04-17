// src/pages/HomePage.tsx
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to MediConnect</h1>
      <p className="mb-6">Your first step towards understanding your symptoms and finding the right care.</p>
      {/* Add Symptom Input and Search functionality here later */}
      <div className="p-6 border rounded-lg bg-gray-50">
         <h2 className="text-xl font-semibold mb-3">Quick Actions</h2>
         <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-4">
           Check Symptoms
         </button>
         <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
           Find a Doctor Nearby
         </button>
      </div>
    </div>
  );
};

export default HomePage;