// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
// Import other pages here as you create them
// import SearchPage from './pages/SearchPage';
// import LoginPage from './pages/LoginPage';
// import ProviderProfilePage from './pages/ProviderProfilePage';

function App() {
  return (
    <Routes>
      {/* Routes that use the MainLayout (Header/Footer) */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        {/* Add other pages within the MainLayout here */}
        {/* <Route path="search" element={<SearchPage />} /> */}
        {/* <Route path="provider/:id" element={<ProviderProfilePage />} /> */}
        {/* <Route path="login" element={<LoginPage />} /> */}
      </Route>

      {/* Add routes that DON'T use MainLayout here (e.g., a dedicated fullscreen map view) */}
      {/* <Route path="/map-fullscreen" element={<FullMapPage />} /> */}
    </Routes>
  );
}

export default App;