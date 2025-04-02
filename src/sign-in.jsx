import React from "react";
import "./style.css"; 

const SignIn = () => {
  return (
    <div className="container">
      {}
      <div className="form-container">
        <h2>Sign In</h2>
        <form>
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" required />
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" required />
          <button type="submit" className="btn">Sign In</button>
        </form>
        <p>New here? <a href="/create-account">Create an account</a></p>
      </div>

      {}
      <footer className="footer">
        &copy; 2025 BookNotes. All Rights Reserved.
      </footer>
    </div>
  );
};


export { SignIn};
