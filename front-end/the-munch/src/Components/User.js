import React, { useState } from 'react';
import './User.css';

const User = ({ mode, onClose, onAuthChange }) => {
  const [authMode, setAuthMode] = useState(mode);
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage("");
    setSuccessMessage("");
  };

  const signUp = async () => {
    try {
      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          role: formData.role,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage(`Successfully signed up as ${data.username}`);
        onAuthChange(true, data.username, data.role);
        setTimeout(() => {
          onClose();
          window.location.reload();
        }, 2000);
      } else {
        const error = await response.json();
        setErrorMessage(error.error || "Sign-up failed. Try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred while signing up. Please try again.");
    }
  };

  const signIn = async () => {
    try {
      const response = await fetch('http://localhost:5000/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage(`Welcome back, ${data.user.username}`);
        onAuthChange(true, data.user.username, data.user.role);
        setTimeout(() => {
          onClose();
          window.location.reload();
        }, 2000);
      } else {
        const error = await response.json();
        setErrorMessage(error.error || "Login failed. Check your credentials.");
      }
    } catch (error) {
      setErrorMessage("An error occurred while logging in. Please try again.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (authMode === "signIn") {
      signIn();
    } else {
      signUp();
    }
  };

  const toggleMode = () => {
    setAuthMode(authMode === "signIn" ? "signUp" : "signIn");
    setErrorMessage("");
    setSuccessMessage("");
  };

  return (
    <div className="user-modal">
      <div className="modal-content">
        <h2>{authMode === "signIn" ? "Sign In" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          {authMode === "signUp" && (
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {authMode === "signUp" && (
            <select name="role" value={formData.role} onChange={handleChange} required>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          )}

          <button type="submit">{authMode === "signIn" ? "Sign In" : "Sign Up"}</button>
        </form>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button onClick={toggleMode}>
          {authMode === "signIn" ? "Need an account? Sign Up" : "Already have an account? Sign In"}
        </button>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default User;
