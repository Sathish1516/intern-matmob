import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Login.css'

export const Register = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      // Make API call to register user
      const response = await fetch("http://192.168.29.9:5000/insert-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      // Handle response from the API
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        if (data[0] === true) {
          // Registration successful
          toast.success("User registered successfully");
          // Reset form fields
          setUsername("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          window.location.href = "/Login";
        } else {
          // Registration failed
          const apptoast=toast.error("Registration failed");
          console.log(apptoast);
          // Handle the error or display appropriate message to the user
        }
      } else {
        // Registration failed
        const apptoast = toast.error("Registration failed");
        console.log(apptoast);
        // Handle the error or display appropriate message to the user
      }
    } catch (error) {
      // Handle any network or server errors
      console.log("An error occurred:", error);
      // Display an error message to the user or retry the request
    } finally {
      setIsLoading(false);
    }
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    validateUsername(value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    validateConfirmPassword(value);
  };

  const validateUsername = (value) => {
    if (value.trim() === "") {
      setUsernameError("Username is required");
    } else {
      setUsernameError("");
    }
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value.trim() === "") {
      setEmailError("Email is required");
    } else if (!emailRegex.test(value)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (value) => {
    if (value.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else {
      setPasswordError("");
    }
  };

  const validateConfirmPassword = (value) => {
    if (value !== password) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="auth-form-container">
      <h2 className="loginh">User Registration</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input className="in"
          value={username}
          onChange={handleUsernameChange}
          type="text"
          placeholder="Username"
          id="username"
          name="username"
        />
        {usernameError && <p className="error-message">{usernameError}</p>}

        <label htmlFor="email">Email</label>
        <input className="in"
          value={email}
          onChange={handleEmailChange}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        {emailError && <p className="error-message">{emailError}</p>}

        <label htmlFor="password">Password</label>
        <input className="in"
          value={password}
          onChange={handlePasswordChange}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        {passwordError && <p className="error-message">{passwordError}</p>}

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input className="in"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          type="password"
          placeholder="********"
          id="confirmPassword"
          name="confirmPassword"
        />
        {passwordError && <p className="error-message">{passwordError}</p>}

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Register"}
        </button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login Here...
      </button>
      <ToastContainer />
    </div>
  );
};