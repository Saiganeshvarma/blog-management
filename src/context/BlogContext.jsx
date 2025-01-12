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
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }, [blogs]);


  const deleteBlog = (id) => {
    setBlogs((prevBlogs) => {
      const updatedBlogs = prevBlogs.filter((blog) => blog.id !== id);
      localStorage.setItem('blogs', JSON.stringify(updatedBlogs)); // Ensure localStorage updates immediately
      return updatedBlogs;
    });
  };

  return (
    <BlogContext.Provider value={{ blogs, setBlogs, deleteBlog }}>
      {children}
    </BlogContext.Provider>
  );
};
