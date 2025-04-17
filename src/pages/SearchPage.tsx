// src/pages/SearchPage.tsx
import React, { useState, useEffect } from 'react';
import ProviderCard from '../components/search/ProviderCard'; // Import the ProviderCard component
import ProviderMap from '../components/search/ProviderMap';
import { Provider } from '../components/search/ProviderCard'; // Import the Provider type


// Mock Data (Consider moving to a separate file: e.g., src/data/mockProviders.ts)
const MOCK_PROVIDERS: Provider[] = [
    { id: '1', name: 'Dr. Alice Smith', specialty: 'Cardiologist', type: 'Doctor', address: '123 Heart St, Medville, MD 12345', lat: 39.09, lng: -77.08, distance: '1.2 mi', languages: ['English', 'Spanish'] },
    { id: '2', name: 'General Clinic of Medville', specialty: 'General Practice', type: 'Clinic', address: '456 Health Ave, Medville, MD 12345', lat: 39.10, lng: -77.10, distance: '2.5 mi', languages: ['English'] },
    { id: '3', name: 'Dr. Bob Johnson', specialty: 'Pediatrician', type: 'Doctor', address: '789 Child Way, Welltown, MD 67890', lat: 39.25, lng: -77.25, distance: '5.8 mi', languages: ['English', 'French'] },
    { id: '4', name: 'MedConnect Hospital', specialty: 'Hospital', type: 'Hospital', address: '101 Cure Blvd, Medville, MD 12345', lat: 39.11, lng: -77.09, distance: '3.0 mi', languages: ['English', 'Spanish', 'Mandarin'] },
    { id: '5', name: 'Welltown Urgent Care', specialty: 'Urgent Care', type: 'Urgent Care', address: '25 Wellness Rd, Welltown, MD 67890', lat: 39.26, lng: -77.24, distance: '6.1 mi', languages: ['English', 'Spanish'] },
  ];

const SearchPage: React.FC = () => {
  // State for input fields
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [selectedType, setSelectedType] = useState<string>(''); // State for type filter
  // State for search results
  const [providers, setProviders] = useState<Provider[]>([]);
  // State to track if a search has been performed
  const [hasSearched, setHasSearched] = useState(false);

  // Load initial data (optional - could wait for first search)
  useEffect(() => {
    // To show all providers initially, uncomment the next line:
    // setProviders(MOCK_PROVIDERS);
    // setHasSearched(true); // Also set this if showing all initially
  }, []); // Empty dependency array means this runs once on mount

  // Function to handle the search logic
  const handleSearch = () => {
    console.log('Searching for:', searchTerm, 'near:', location, 'Type:', selectedType);
    setHasSearched(true); // Mark that a search attempt was made

    // Basic filtering logic (replace with API call later)
    const filtered = MOCK_PROVIDERS.filter(provider => {
      const termMatch = searchTerm === '' || // Match if search term is empty
        provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        provider.specialty.toLowerCase().includes(searchTerm.toLowerCase());

      const locationMatch = location === '' || // Match if location is empty
        provider.address.toLowerCase().includes(location.toLowerCase());

      // --- Type Filter Logic ---
      const typeMatch = selectedType === '' || // Match if 'All Types' is selected
        provider.type === selectedType;

      return termMatch && locationMatch && typeMatch; // Combine all matches
    });

    setProviders(filtered); // Update the list with filtered results
  };

  // Allow search on Enter key press in input fields
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Find Healthcare Providers</h1>

      {/* Search and Filters Section */}
      <div className="bg-gray-100 p-4 rounded-lg mb-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Search & Filters</h2>
        {/* --- Search Inputs --- */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center mb-4">
          <input
            type="text"
            placeholder="Specialty, Name, Service..."
            className="border p-2 rounded flex-grow w-full sm:w-auto"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress} // Search on Enter
          />
          <input
            type="text"
            placeholder="City, Zip Code, or Address"
            className="border p-2 rounded w-full sm:w-auto"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyPress={handleKeyPress} // Search on Enter
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition duration-150 ease-in-out w-full sm:w-auto"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* --- Map View --- */}
          <div className="border rounded-lg overflow-hidden shadow-md min-h-[400px] lg:min-h-[500px] sticky top-4"> {/* Added overflow-hidden */}
            {/* Replace placeholder with ProviderMap */}
            <ProviderMap providers={providers} />
          </div>

          {/* --- List View --- */}
          <div className="border rounded-lg p-4 bg-white shadow-md min-h-[400px] lg:min-h-[500px]">
            {/* ... List Header (h3) ... */}
            <div className="space-y-4 overflow-y-auto max-h-[60vh] lg:max-h-[calc(100vh-250px)]">
                {/* ... Conditional Rendering Logic (No results, etc.) ... */}
                {hasSearched && providers.length > 0 && (
                  providers.map((provider) => (
                    <ProviderCard key={provider.id} provider={provider} />
                  ))
                )}
            </div>
          </div>
        </div>

        {/* --- Advanced Filters --- */}
        <div className="border-t pt-4">
          <h3 className="text-lg font-medium mb-3 text-gray-700">Filter by:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Provider Type Filter */}
            <div>
              <label htmlFor="providerType" className="block text-sm font-medium text-gray-600 mb-1">
                Provider Type
              </label>
              <select
                id="providerType"
                name="providerType"
                className="border p-2 rounded w-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                // Optionally trigger search on change: onChange={(e) => { setSelectedType(e.target.value); handleSearch(); }}
              >
                <option value="">All Types</option>
                <option value="Doctor">Doctor</option>
                <option value="Clinic">Clinic</option>
                <option value="Hospital">Hospital</option>
                <option value="Urgent Care">Urgent Care</option>
                <option value="Other">Other</option> {/* If you add 'Other' type to mock data */}
              </select>
            </div>

            {/* Placeholder for Language Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Language</label>
              <select className="border p-2 rounded w-full bg-white disabled:bg-gray-200 text-gray-500" disabled>
                <option>Any Language</option>
                {/* Add language options later */}
              </select>
            </div>

             {/* Placeholder for Insurance Filter */}
             <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Insurance</label>
              <select className="border p-2 rounded w-full bg-white disabled:bg-gray-200 text-gray-500" disabled>
                <option>Any Insurance</option>
                 {/* Add insurance options later */}
              </select>
            </div>
          </div>
           {/* You could add a button to explicitly apply filters if you don't want the main search button or onChange to do it */}
           {/* <button onClick={handleSearch} className="mt-4 text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">Apply Filters</button> */}
        </div>
      </div>

      {/* Results Section - Map and List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Map Placeholder */}
          <div className="border rounded-lg bg-gray-200 min-h-[400px] lg:min-h-[500px] flex items-center justify-center text-gray-500 shadow-md sticky top-4">
            Map View Placeholder
            {/* Map component will be integrated here */}
          </div>

          {/* List View */}
          <div className="border rounded-lg p-4 bg-white shadow-md min-h-[400px] lg:min-h-[500px]">
            <h3 className="text-lg font-semibold mb-4">
              {hasSearched ? `${providers.length} Provider(s) Found` : 'Search Results'}
            </h3>
            <div className="space-y-4 overflow-y-auto max-h-[60vh] lg:max-h-[calc(100vh-250px)]"> {/* Adjusted max height */}
              {!hasSearched && (
                  <p className="text-gray-500 italic text-center mt-10">Enter search criteria above to find providers.</p>
              )}
              {hasSearched && providers.length > 0 && (
                providers.map((provider) => (
                  <ProviderCard key={provider.id} provider={provider} />
                ))
              )}
              {hasSearched && providers.length === 0 && (
                <p className="text-gray-500 italic text-center mt-10">No providers found matching your criteria. Try broadening your search.</p>
              )}
            </div>
          </div>
      </div>
    </div>
  );
};

export default SearchPage;