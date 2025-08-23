import React from "react";

const About = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">About Our Blog App</h1>
        <p className="text-muted fs-5">
          A simple platform where you can create, read, update, and delete blogs with ease.
        </p>
      </div>

      <div className="row align-items-center">
        {/* Left Image */}
        <div className="col-md-6 text-center">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="About Blog"
            className="img-fluid rounded shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="col-md-6">
          <h3 className="fw-semibold">📖 What is this app?</h3>
          <p className="text-muted">
            This Blog App allows users to share their thoughts, stories, and ideas with others.
            You can add a new blog with a title, description, and image, view all blogs on the dashboard,
            and even update or delete them when needed.
          </p>

          <h3 className="fw-semibold mt-4">🚀 Features</h3>
          <ul className="list-unstyled">
            <li>✅ Add new blogs with image, title & description</li>
            <li>✅ View all blogs in a beautiful layout</li>
            <li>✅ Edit or delete blogs anytime</li>
            <li>✅ Data is stored in localStorage</li>
          </ul>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mt-5 p-4 bg-light rounded shadow-sm text-center">
        <h2 className="fw-bold">🌟 Our Mission</h2>
        <p className="text-muted">
          We aim to provide a simple and elegant platform for writing and sharing ideas.
          Whether it’s personal journaling or public sharing, this app helps you put your
          thoughts into words beautifully.
        </p>
      </div>
    </div>
  );
};

export default About;
