import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogList = ({ searchQuery, filters, blogs, deleteBlog }) => {
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
    <div className='d-flex justify-content-center flex-wrap '>
      {filteredBlogs.length > 0 ? (
        filteredBlogs.map((blog) => (
          <div className="card text-start w-75 shadow m-2 bg-body rounded">
            <div className="card-header d-flex justify-content-between align-items-center">
               <h6 className='fw-bold'>{`Blog ${blog.id}`}</h6>
               <p > {formatDate(blog.publishDate)}</p>
            </div>
            <div className="card-body">
              <h5 className="card-title">{blog.title}</h5>
              <p className="card-text">{blog.content.slice(0, 100)}...</p>
              Tags - {blog.tags.map((tag) => (
                <span key={tag} className="badge bg-primary me-2">
                  {tag}
                </span>
              ))}
             
            </div>
            <div className="card-footer text-muted d-flex justify-content-end">
            <button
                className="btn btn-warning me-2"
                onClick={() => navigate('/create', { state: { blog } })}
              >
                 <i className="fa-solid fa-pencil" ></i>
              </button>
              <button
                className="btn btn-danger"
                onClick={() => deleteBlog(blog.id)}
              >
               <i class="fa-solid fa-trash" ></i>
              </button>
            </div> 
          </div>
        ))
      ) : (
        <p>No blogs match your search or filters.</p>
      )}
    </div>
    // <div className="blog-list">
    //   {blogs.length === 0 ? (
    //     <p>No blogs found.</p>
    //   ) : (
    //     filteredBlogs.map((blog) => (
    //       <div key={blog.id} className="card mb-3">
    //         <div className="card-body">
    //           <h5 className="card-title">{blog.title}</h5>
    //           <p className="card-text">{blog.content}</p>
    //           <span className="badge bg-secondary">{blog.category}</span>
    //         <div className="mt-2">
    //           {blog.tags.map((tag) => (
    //             <span key={tag} className="badge bg-primary me-2">
    //               {tag}
    //             </span>
    //           ))}
    //         </div>
    //           <button
    //             className="btn btn-warning me-2"
    //             onClick={() => navigate('/create', { state: { blog } })}
    //           >
    //             Edit
    //           </button>
    //           <button
    //             className="btn btn-danger"
    //             onClick={() => deleteBlog(blog.id)}
    //           >
    //             Delete
    //           </button>
    //         </div>
    //       </div>
    //     ))
    //   )}
    // </div>
  );
};

export default BlogList;
