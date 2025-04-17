// src/pages/HomePage.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // <-- Import Link

const HomePage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to MediConnect</h1>
      <p className="mb-6">Your first step towards understanding your symptoms and finding the right care.</p>
      {/* Add Symptom Input and Search functionality here later */}
      <div className="p-6 border rounded-lg bg-gray-50 shadow">
         <h2 className="text-xl font-semibold mb-3">Quick Actions</h2>
         <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-4">
           Check Symptoms {/* We'll link this later */}
         </button>
         {/* Wrap the button text/content with Link */}
         <Link to="/search"> {/* <-- Add Link component */}
           <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
             Find a Doctor Nearby
           </button>
         </Link>
      </div>
    </div>
  );
};

export default HomePage;