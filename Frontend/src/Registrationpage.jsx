import { useState } from "react";
import styles from "./RegistrationPage.module.css";
import bgImage from "./assets/Hom/login.jpg";
import axios from "axios";

function RegistrationPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address1: "",
    address2: "",
    city: "",
    province: "",
    agree: false,
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const { data } = await axios.post(
        "https://my-react-app-main-llmi.vercel.app/api/users/register",
        formData
      );

      // ✅ Save JWT token to localStorage
      localStorage.setItem("token", data.token);

      setMessage("Registered successfully! 🎉");
      // Optionally, redirect user to login or dashboard
    } catch (err) {
      console.error("Registration error:", err);
      setMessage(err.response?.data?.message || "Error occurred");
    }
  };

  return (
    <div
      className={styles.page_container}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.registration_container}>
        <form className={styles.registration_form} onSubmit={handleSubmit}>
          <h2 className={styles.form_title}>Create Your Account</h2>
          <p className={styles.form_subtitle}>
            Fill in the details below to sign up
          </p>

          <div className={styles.form_row}>
            <div className={styles.form_col}>
              <label>First Name</label>
              <input
                name="firstName"
                type="text"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.form_col}>
              <label>Last Name</label>
              <input
                name="lastName"
                type="text"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={styles.form_row}>
            <div className={styles.form_col}>
              <label>Email</label>
              <input
                name="email"
                type="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.form_col}>
              <label>Password</label>
              <input
                name="password"
                type="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={styles.form_row}>
            <div className={`${styles.form_col} ${styles.full}`}>
              <label>Address 1</label>
              <input
                name="address1"
                type="text"
                placeholder="1234 Main St"
                value={formData.address1}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.form_row}>
            <div className={`${styles.form_col} ${styles.full}`}>
              <label>Address 2</label>
              <input
                name="address2"
                type="text"
                placeholder="Apartment, studio, or floor"
                value={formData.address2}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.form_row}>
            <div className={styles.form_col}>
              <label>City</label>
              <input
                name="city"
                type="text"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div className={styles.form_col}>
              <label>Province</label>
              <select
                name="province"
                value={formData.province}
                onChange={handleChange}
              >
                <option value="">Choose...</option>
                <option value="Punjab">Punjab</option>
                <option value="Sindh">Sindh</option>
                <option value="KPK">KPK</option>
                <option value="Balochistan">Balochistan</option>
              </select>
            </div>
          </div>

          <div className={styles.checkbox_row}>
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            <label>I agree to the Terms & Conditions</label>
          </div>

          <button type="submit" className={styles.submit_btn}>
            Sign Up
          </button>

          {message && <p style={{ marginTop: "10px", color: "red" }}>{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default RegistrationPage;
