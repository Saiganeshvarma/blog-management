

import React, { createContext, useState, useEffect } from 'react';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);


  useEffect(() => {
    const storedBlogs = localStorage.getItem('blogs');
    if (storedBlogs) {
      setBlogs(JSON.parse(storedBlogs)); 
    }
  }, []);


  useEffect(() => {
    if (blogs.length > 0) {
      localStorage.setItem('blogs', JSON.stringify(blogs));
    }
  }, [blogs]);

  return (
    <BlogContext.Provider value={{ blogs, setBlogs }}>
      {children}
    </BlogContext.Provider>
  );
};


