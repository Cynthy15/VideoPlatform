import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./pages/Feed";
import VideoDetails from "./pages/VideoDetails";
import ChannelDetails from "./pages/ChannelDetails";
import SearchFeed from "./pages/SearchFeed";

const queryClient = new QueryClient();

function App() {
  const [selectedCategory, setSelectedCategory] = useState("New");

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <div className="main-layout">
          <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Feed selectedCategory={selectedCategory} />} />
              <Route path="/video/:id" element={<VideoDetails />} />
              <Route path="/channel/:id" element={<ChannelDetails />} />
              <Route path="/search/:searchTerm" element={<SearchFeed />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
