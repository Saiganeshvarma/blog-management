import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlogDetails from './pages/BlogDetails';
import CreateBlog from './pages/CreateBlog';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/create" element={<CreateBlog />} />
      </Routes>
    </Router>
  );
};

export default App;