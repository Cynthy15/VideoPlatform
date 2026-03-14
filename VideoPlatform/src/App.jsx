import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import VideoCardDetails from './components/VideoCardDetails';
import ChannelDetails from './components/ChannelDetails';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoCardDetails />} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
          <Route path="/search/:query" element={<Feed />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App
