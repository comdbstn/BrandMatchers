import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './pages/Home';
import About from './pages/About';
import EventRegistration from './pages/EventRegistration';
import SponsorSearch from './pages/SponsorSearch';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events/register" element={<EventRegistration />} />
          <Route path="/sponsors" element={<SponsorSearch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;