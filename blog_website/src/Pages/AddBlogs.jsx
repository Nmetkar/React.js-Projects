import React, { useState } from "react";
import useBlog from "../hook/useBlog.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddBlog = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // ✅ new state for image
  const { addNewBlog } = useBlog();

  function handleSubmit(event) {
    event.preventDefault();
    const payload = {
      id: Date.now(),
      title: blogTitle,
      description: description,
      image: imageUrl, // ✅ store image url
    };
    addNewBlog(payload);
    toast("Blog added successfully...");
    setBlogTitle("");
    setDescription("");
    setImageUrl("");
  }

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card shadow p-4" style={{ maxWidth: "500px", width: "100%" }}>
          <h2 className="text-center mb-4 text-white fw-bolder bg-dark">Add New Blog</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="blogTitle" className="form-label fw-bold">
                Blog Title
              </label>
              <input
                type="text"
                className="form-control"
                id="blogTitle"
                value={blogTitle}
                placeholder="Enter blog title"
                onChange={(e) => setBlogTitle(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="blogDescription" className="form-label fw-bold">
                Description
              </label>
              <textarea
                className="form-control"
                id="blogDescription"
                rows="3"
                value={description}
                placeholder="Write your blog description..."
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            {/* ✅ New Image URL input */}
            <div className="mb-3">
              <label htmlFor="imageUrl" className="form-label fw-bold">
                Image URL
              </label>
              <input
                type="url"
                className="form-control"
                id="imageUrl"
                value={imageUrl}
                placeholder="Enter image URL"
                onChange={(e) => setImageUrl(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-outline-dark w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default AddBlog;
