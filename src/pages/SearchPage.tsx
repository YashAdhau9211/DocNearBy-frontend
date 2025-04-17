// src/pages/SearchPage.tsx
import React from 'react';

const SearchPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Find Healthcare Providers</h1>

      {/* Search and Filters Section */}
      <div className="bg-gray-100 p-4 rounded-lg mb-6 shadow">
        <h2 className="text-xl font-semibold mb-3">Search & Filters</h2>
        {/* Add search inputs, location input, filter dropdowns/checkboxes here later */}
        <div className="flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="Search by specialty, name, service..."
            className="border p-2 rounded flex-grow"
          />
          <input
            type="text"
            placeholder="Enter location (e.g., city, zip)"
            className="border p-2 rounded"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Search
          </button>
        </div>
        {/* Placeholder for more filters */}
        <div className="mt-4">
          <span className="text-gray-600">Filters (e.g., Provider Type, Language) will go here.</span>
        </div>
      </div>

      {/* Results Section - Map and List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Map Placeholder */}
        <div className="border rounded-lg bg-gray-200 min-h-[400px] flex items-center justify-center text-gray-500 shadow">
          Map View Placeholder
          {/* Map component (e.g., Leaflet) will be integrated here */}
        </div>

        {/* List Placeholder */}
        <div className="border rounded-lg p-4 bg-white shadow">
          <h3 className="text-lg font-semibold mb-3">Providers Found</h3>
          {/* Provider result cards will be listed here */}
          <div className="space-y-3">
            <div className="border p-3 rounded bg-gray-50 text-gray-500">Provider List Item 1 Placeholder</div>
            <div className="border p-3 rounded bg-gray-50 text-gray-500">Provider List Item 2 Placeholder</div>
          </div>
           {/* Add sorting options here later */}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;