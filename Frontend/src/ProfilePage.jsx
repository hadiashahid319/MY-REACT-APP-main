import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfileAPI, updateProfileAPI, deleteProfileAPI } from "./services/api.js";
import styles from "./ProfilePage.module.css";

export default function ProfilePage() {
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getProfileAPI();
        setFormData(res.data.user || res.data);
      } catch (err) {
        console.error(err);
        setMessage("Failed to fetch profile");
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      const res = await updateProfileAPI(formData);
      setFormData(res.data.user);
      setMessage(res.data.message);
    } catch (err) {
      console.error(err);
      setMessage("Update failed");
    }
  };

  const handleDelete = async () => {
    try {
      await deleteProfileAPI();
      localStorage.removeItem("token");
      navigate("/register");
    } catch (err) {
      console.error(err);
      setMessage("Delete failed");
    }
  };

  return (
    <div className={styles.container}>
      <h2>User Profile</h2>
      {message && <p>{message}</p>}
      {Object.keys(formData).length > 0 && (
        <table className={styles.table}>
          <tbody>
            {["firstName","lastName","email","address1","address2","city","province"].map((field) => (
              <tr key={field}>
                <td>{field.charAt(0).toUpperCase() + field.slice(1)}</td>
                <td>
                  <input name={field} value={formData[field] || ""} onChange={handleChange} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button onClick={handleUpdate}>Update Profile</button>
      <button onClick={handleDelete}>Delete Profile</button>
    </div>
  );
}
