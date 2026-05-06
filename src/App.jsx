import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import FavoritesPage from './pages/FavoritesPage';
import { AppProvider } from './AppContext';

export default function App() {
  const [recentListings, setRecentListings] = useState([])

  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage recentListings={recentListings} setRecentListings={setRecentListings}/>} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/listing/:id" element={<DetailsPage recentListings={recentListings} setRecentListings={setRecentListings}/>} />
        </Routes>
      </Router>
    </AppProvider>
  );
}
