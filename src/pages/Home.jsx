import React, { useState, useContext } from 'react';
import BlogList from '../components/BlogList';
import Filters from '../components/Filters';
import SearchBar from '../components/Searchbar';
import { BlogContext } from '../context/BlogContext';

const Home = () => {
  const { blogs, setBlogs } = useContext(BlogContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({});
  const availableTags = ['React', 'JavaScript', 'CSS', 'Frontend', 'Web Development']; 


  const deleteBlog = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
  };


  const editBlog = (id, updatedData) => {
    const updatedBlogs = blogs.map((blog) =>
      blog.id === id ? { ...blog, ...updatedData } : blog
    );
    setBlogs(updatedBlogs);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Welcome to the Blog Management System</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Filters
        filters={filters}
        setFilters={setFilters}
        availableTags={availableTags}
      />
      <BlogList
        searchQuery={searchQuery}
        filters={filters}
        blogs={blogs}
        deleteBlog={deleteBlog}
        editBlog={editBlog}
      />
    </div>
  );
};

export default Home;
