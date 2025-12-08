import { useState, useEffect } from "react";
import styles from "./Login.module.css";
import sideImage from "./assets/HOM/login.jpg";
import logo from "./assets/HOM/logo.png";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [userData, setUserData] = useState(null);

  // Fetch protected data after login
  const fetchUserData = async (token) => {
    try {
      const res = await axios.get("http://localhost:5000/api/users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(res.data);
      console.log("Fetched user data:", res.data);
    } catch (err) {
      console.error("Error fetching user data:", err);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setMessage("");

  //   try {
  //     const { data } = await axios.post(
  //       "http://localhost:5000/api/users/login",
  //       { email, password }
  //     );

  //     // ✅ Save JWT token to localStorage
  //     localStorage.setItem("token", data.token);
  //     setMessage("Logged in successfully! 🎉");

  //     // Fetch user-specific data from protected route
  //     fetchUserData(data.token);
  //   } catch (err) {
  //     console.error("Login error:", err);
  //     setMessage(err.response?.data?.message || "Error occurred");
  //   }
  // };
const handleSubmit = async (e) => {
  e.preventDefault();
  setMessage("");

  try {
    const { data } = await axios.post(
      "http://localhost:5000/api/users/login",
      { email, password }
    );

    // Save JWT token
    localStorage.setItem("token", data.token);

    // 🔥 Show token in console
    console.log("Saved Token:", data.token);
    console.log("LocalStorage Token:", localStorage.getItem("token"));

    setMessage("Logged in successfully! 🎉");

    // Fetch user data
    fetchUserData(data.token);
  } catch (err) {
    console.error("Login error:", err);
    setMessage(err.response?.data?.message || "Error occurred");
  }
};

  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.loginBox} shadow-lg rounded-3 d-flex`}>
        <div className={styles.formSection}>
          <div className="text-center mb-3">
            <img src={logo} alt="logo" className={styles.logo} />
          </div>

          <h2 className="fw-bold text-center" style={{ color: "black" }}>
            COZY CORNER
          </h2>
          <h5 className={styles.subHeading}>WELCOME BACK</h5>

          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="form-control mb-3"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="pass">Password</label>
            <input
              id="pass"
              type="password"
              className="form-control mb-2"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <small className="d-block mb-2 text-end text-muted">
              Forgot Password?
            </small>

            <button type="submit" className={styles.signInBtn}>
              Sign In
            </button>
          </form>

          {message && (
            <p style={{ color: message.includes("success") ? "green" : "red" }}>
              {message}
            </p>
          )} 

           {userData && (
            <div style={{ marginTop: "10px" }}>
              <h6>Welcome, {userData.userId}</h6>
              <p>Protected Data: {JSON.stringify(userData)}</p>
            </div>
          )}

          <p className="text-center mt-3">
            Don’t have an account? <a href="#">Sign Up</a>
          </p>
        </div>

        <div className={styles.imageSection}>
          <img src={sideImage} alt="side" className={styles.sideImage} />
        </div>
      </div>
    </div>
  );
}

export default Login;
