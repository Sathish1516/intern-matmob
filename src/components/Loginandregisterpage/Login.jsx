// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./Login.css";

// export const Login = (props) => {
//   const [email, setEmail] = useState("");
//   const [password, setPass] = useState("");
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setSuccess(null);

//     try {
//       // Perform API request to validate user credentials
//       const response = await fetch("http://192.168.29.9:5000/verify", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email,
//           password,
//         }),
//       });

//       if (response.ok) {
//         // User is authenticated
//         const data = await response.json();
//         console.log('hi');
//         console.log(data);

//         if (data[0] === true) {
//           // Store login details in local storage
//           localStorage.setItem("email", email);
//         //   localStorage.setItem("password", password);
//           localStorage.setItem("session", data[2]);

//           // Display success message
//           toast.success("Logged in Successfully");

//           // Redirect to homepage
//           window.location.href = "/";
//         }
//       } else {
//         // Authentication failed
//         toast.error("Login unsuccessful");
//         // setError("Invalid email or password");
//       }
//     } catch (error) {
//       // Error occurred during API request
//       setError("An error occurred. Please try again later.");
//     }
//   };

//   return (
//     <div className="auth-form-container">
//       <h2 className="loginh">Welcome - Login</h2>
//       {error && <p className="error-message">{error}</p>}
//       {success && <p className="success-message">{success}</p>}
//       <form className="login-form" onSubmit={handleSubmit}>
//         <label htmlFor="email">E-mail</label>
//         <input
//           className="in"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           type="email"
//           placeholder="youremail@gmail.com"
//           id="email"
//           name="email"
//         />
//         <label htmlFor="password">Password</label>
//         <input
//           className="in"
//           value={password}
//           onChange={(e) => setPass(e.target.value)}
//           type="password"
//           placeholder="********"
//           id="password"
//           name="password"
//         />
//         <button type="submit">Log In</button>
//       </form>
//       <button
//         className="link-btn"
//         onClick={() => props.onFormSwitch("register")}
//       >
//         Don't have an account? Register Here.
//       </button>
//       <ToastContainer />
//     </div>
//   );
// };
// Login.js



// Login.js

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      // Perform API request to validate user credentials
      const response = await fetch("http://192.168.29.9:5000/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        // User is authenticated
        const data = await response.json();
        console.log("hi");
        console.log(data);

        if (data[0] === true) {
          // Store login details in local storage
          localStorage.setItem("email", email);
          localStorage.setItem("session", data[2]);
          localStorage.setItem("uid", data[3]); 

          // Set cart for the logged-in user
        //   const cart = JSON.parse(localStorage.getItem(`cart_${email}`)) || [];
        //   localStorage.setItem("cart", JSON.stringify(cart));
        const cart = JSON.parse(localStorage.getItem(`cart_${email}`)) || [];
        cart.push({ email, uid: data[3] }); // Add email and uid to the cart
        localStorage.setItem(`cart_${email}`, JSON.stringify(cart));

          // Display success message
          toast.success("Logged in Successfully");

          // Redirect to homepage
          window.location.href = "/";
        }
      } else {
        // Authentication failed
        toast.error("Login unsuccessful");
        // setError("Invalid email or password");
      }
    } catch (error) {
      // Error occurred during API request
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="auth-form-container">
      <h2 className="loginh">Welcome - Login</h2>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <input
          className="in"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          className="in"
          value={password}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="submit">Log In</button>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register Here.
      </button>
      <ToastContainer />
    </div>
  );
};



