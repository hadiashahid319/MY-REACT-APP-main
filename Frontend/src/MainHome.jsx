import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MainHome() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
      }}
    >
      <h1 className="mb-4 fw-bold text-dark">🏡 Home Décor Portal</h1>
      <p className="text-secondary mb-5">Select your portal below to continue</p>

      <div className="d-flex gap-4">
        <Link to="/landing" className="btn btn-lg btn-primary px-5">
          👤 User
        </Link>
        <Link to="/admin" className="btn btn-lg btn-dark px-5">
          🛠️ Admin
        </Link>
      </div>
    </div>
  );
}
