import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogList = ({searchQuery, filters, blogs, deleteBlog }) => {
  const navigate = useNavigate();

  const { category, tags = [] } = filters;

  const filteredBlogs = blogs.filter((blog) => {
    const query = searchQuery.toLowerCase();


    const matchesTitle = blog.title.toLowerCase().includes(query);


    const matchesTags = blog.tags.some((tag) =>
      tag.toLowerCase().includes(query)
    );


    const matchesCategory = category ? blog.category === category : true;


    const matchesSelectedTags =
      tags.length > 0 ? tags.every((tag) => blog.tags.includes(tag)) : true;

    return (
      (matchesTitle || matchesTags) &&
      matchesCategory &&
      matchesSelectedTags
    );
  });

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  

  console.log("Blogsss", blogs)
  return (
    <div>
    {filteredBlogs.length > 0 ? (
      filteredBlogs.map((blog) => (
        <div key={blog.id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{blog.title}</h5>
            <p className="text-muted">Published on: {formatDate(blog.publishDate)}</p>
            <p className="card-text">{blog.content.slice(0, 100)}...</p>
            <span className="badge bg-secondary">{blog.category}</span>
            <div className="mt-2">
              {blog.tags.map((tag) => (
                <span key={tag} className="badge bg-primary me-2">
                  {tag}
                </span>
              ))}
            </div>
            <button
                className="btn btn-warning me-2"
                onClick={() => navigate('/create', { state: { blog } })}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => deleteBlog(blog.id)}
              >
                Delete
              </button>
          </div>
        </div>
      ))
    ) : (
      <p>No blogs match your search or filters.</p>
    )}
  </div>
    
  );
};

export default BlogList;
