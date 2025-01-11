import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Blog Details (ID: {id})</h1>
      {/* Add blog content and reader view here */}
    </div>
  );
};

export default BlogDetails;