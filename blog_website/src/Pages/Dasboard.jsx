import React, { useEffect, useState } from "react";
import useBlog from "../hook/useBlog.js";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const { getBlogs, deleteBlog } = useBlog();

  function fetchData() {
    const getBlogsLocal = getBlogs();
    setBlogs(getBlogsLocal || []); // fallback if null
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleDelete(ID) {
    const msg = deleteBlog(ID);
    if (msg) {
      toast(msg);
    } else {
      toast("Can not delete");
    }
    fetchData();
  }

  return (
    <>
      <div className="container my-5">
        <h1 className="text-center mb-4">📚 Blog with the best</h1>
        <p className="text-center mb-4">Create Your Own Blogs and keep it for memories</p>
        {blogs.length > 0 ? (
          <div className="row g-4">
            {blogs.map((b, index) => (
              <div className="col-md-12" key={index}>
                <div className="card shadow-lg border-0 rounded-3">
                  <div className="row g-0">
                    {/* Blog Image */}
                    <div className="col-md-4">
                      <img
                        src={b.image || "https://picsum.photos/400/250"}
                        className="img-fluid rounded-start"
                        alt={b.title}
                        style={{ height: "100%", objectFit: "cover" }}
                      />
                    </div>

                    {/* Blog Content */}
                    <div className="col-md-8 d-flex flex-column justify-content-between p-3">
                      <div>
                        <h4 className="card-title">{b.title}</h4>
                        <p className="card-text text-muted">{b.description}</p>
                      </div>

                      <div className="mt-2">
                        <Link
                          to={`/${b.id}`}
                          className="btn btn-info btn-sm me-2"
                        >
                          View
                        </Link>
                        <button className="btn btn-warning btn-sm me-2">
                          <i className="fa-solid fa-pen-to-square"></i> Edit
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(b.id)}
                        >
                          <i className="fa-solid fa-trash"></i> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted">No blog yet</p>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default Dashboard;
