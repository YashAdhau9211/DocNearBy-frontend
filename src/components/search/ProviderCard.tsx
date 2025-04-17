// src/components/search/ProviderCard.tsx
import React from 'react';
// import { Link } from 'react-router-dom'; // Optional: Add link to profile later

// Define the Provider type/interface (can be moved to a central types file later)
export interface Provider {
  id: string;
  name: string;
  specialty: string;
  type: 'Doctor' | 'Clinic' | 'Hospital' | 'Urgent Care' | 'Other';
  address: string;
  distance?: string; // Optional distance
  lat: number; // <-- Add latitude
  lng: number;
  languages: string[];
  // Add other fields as needed, e.g., phone, website, rating
}

interface ProviderCardProps {
  provider: Provider;
}

const ProviderCard: React.FC<ProviderCardProps> = ({ provider }) => {
  return (
    // Optional: Wrap with Link to navigate to a detailed profile page
    // <Link to={`/provider/${provider.id}`}>
      <div className="border p-4 rounded-lg bg-white hover:bg-gray-50 cursor-pointer shadow-sm transition duration-150 ease-in-out">
        <h4 className="font-semibold text-lg text-blue-700 mb-1">{provider.name}</h4>
        <p className="text-sm text-gray-600 font-medium">{provider.specialty}</p>
        <p className="text-sm text-gray-800 mt-2">{provider.address}</p>
        {provider.distance && (
          <p className="text-sm text-gray-500 mt-1">Approx. {provider.distance} away</p>
        )}
        <p className="text-xs text-gray-500 mt-2">Languages: {provider.languages.join(', ')}</p>
        {/* Example placeholder for actions */}
        <div className="mt-3 flex gap-2">
            <button onClick={(e) => { e.stopPropagation(); console.log(`Calling ${provider.name}...`)}} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Call</button>
            <button onClick={(e) => { e.stopPropagation(); console.log(`Getting directions to ${provider.name}...`)}} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200">Directions</button>
        </div>
      </div>
    // </Link>
  );
};

export default ProviderCard;