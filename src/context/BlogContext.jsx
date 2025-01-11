// import React, { createContext, useState } from 'react';

// export const BlogContext = createContext();

// export const BlogProvider = ({ children }) => {
//   const [blogs, setBlogs] = useState([]);

//   return (
//     <BlogContext.Provider value={{ blogs, setBlogs }}>
//       {children}
//     </BlogContext.Provider>
//   );
// };

import React, { createContext, useState, useEffect } from 'react';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  // Load blogs from localStorage when the app starts
  useEffect(() => {
    const storedBlogs = localStorage.getItem('blogs');
    if (storedBlogs) {
      setBlogs(JSON.parse(storedBlogs)); // Parse and set blogs if they exist in localStorage
    }
  }, []);

  // Save blogs to localStorage whenever the blogs state is updated
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


