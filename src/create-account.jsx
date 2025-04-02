import React from "react";
import "./styles.css"; // Import Vanilla CSS

const CreateAccount = () => {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <span role="img" aria-label="book">📓</span> BookNotes
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/recommendations">Recommendations</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>

      {/* Create Account Form */}
      <div className="form-container">
        <h2>Create Account</h2>
        <form>
          <label>Name:</label>
          <input type="text" placeholder="Enter your name" required />
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" required />
          <label>Password:</label>
          <input type="password" placeholder="Create a password" required />
          <button type="submit" className="btn">Sign Up</button>
        </form>
        <p>Already have an account? <a href="/sign-in">Sign In</a></p>
      </div>    

      {/* Footer */}
      <footer className="footer">
        &copy; 2025 BookNotes. All Rights Reserved.
      </footer>
    </div>
  );
};

export { CreateAccount };
