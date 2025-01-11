import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreateBlog = () => {
  const { blogs, setBlogs } = useContext(BlogContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]); 
  const [newTag, setNewTag] = useState(''); 
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const editingBlog = location.state?.blog || null;

  useEffect(() => {
    if (editingBlog) {
      setTitle(editingBlog.title);
      setContent(editingBlog.content);
      setTags(editingBlog.tags || []);
    }
  }, [editingBlog]);

  const stripHTML = (html) => {
    // Regular expression to remove all HTML tags
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const blogData = {
      id: editingBlog ? editingBlog.id : blogs.length + 1,
      title,
      content : stripHTML(content.toString('html')),
      tags,
      category: 'Uncategorized',
      publishDate: editingBlog ? editingBlog.publishDate : new Date().toISOString(), 
    };

    if (editingBlog) {
      // Update existing blog
      const updatedBlogs = blogs.map((blog) =>
        blog.id === editingBlog.id ? blogData : blog
      );
      setBlogs(updatedBlogs);
    } else {
      // Create new blog
      setBlogs([...blogs, blogData]);
    }
    navigate('/'); // Redirect to the home page
  };

  const handlePreview = () => {
    setIsPreviewOpen(true);
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
  };

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">{editingBlog ? 'Edit Blog' : 'Create a New Blog'}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Content</label>
          <ReactQuill
            value={content}
            onChange={setContent}
            className="mb-3"
            theme="snow"
            placeholder="Write your blog here..."
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tags</label>
          <div className="d-flex mb-2">
            <input
              type="text"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              className="form-control me-2"
              placeholder="Add a tag"
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={addTag}
            >
              Add Tag
            </button>
          </div>
          <div>
            {tags.map((tag) => (
              <span
                key={tag}
                className="badge bg-secondary me-2"
                style={{ cursor: 'pointer' }}
                onClick={() => removeTag(tag)}
              >
                {tag} &times;
              </span>
            ))}
          </div>
        </div>
        <div className="d-flex gap-2">
          <button type="button" className="btn btn-secondary" onClick={handlePreview}>
            Preview
          </button>
          <button type="submit" className="btn btn-primary">
            {editingBlog ? 'Update Blog' : 'Submit'}
          </button>
        </div>
      </form>

      {/* Preview Modal */}
      {isPreviewOpen && (
        <div
          className="modal d-block"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={closePreview}
        >
          <div
            className="modal-dialog modal-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Blog Preview</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closePreview}
                ></button>
              </div>
              <div className="modal-body">
                <h2>{title || 'Untitled Blog'}</h2>
                <div
                  dangerouslySetInnerHTML={{ __html: content }}
                  style={{ whiteSpace: 'pre-wrap' }}
                />
                <div className="mt-3">
                  <strong>Tags:</strong>{' '}
                  {tags.length > 0 ? tags.join(', ') : 'No tags added'}
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closePreview}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateBlog;
