import { Link, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./Dashboard.module.css";


export default function Dashboard() {
  return (
    // <h1>testing</h1>
    <div className={styles.mainContainer} 
    // style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.dashboardContainer}>
        {/* Sidebar */}
        <div className={styles.dashboardSidebar}>
          <h4 className={styles.dashboardTitle}>🏡 Home Decor Panel</h4>

          <div className={styles.buttonGroup}>
            <Link
              to="create"
              className={`${styles.dashboardBtn} ${styles.create}`}
            >
              <i className="bi bi-plus-circle"></i> Create
            </Link>

            <Link
              to="update"
              className={`${styles.dashboardBtn} ${styles.update}`}
            >
              <i className="bi bi-pencil-square"></i> Update
            </Link>

            <Link
              to="delete"
              className={`${styles.dashboardBtn} ${styles.delete}`}
            >
              <i className="bi bi-trash3"></i> Delete
            </Link>

            {/* <Link
              to="rating"
              className={`${styles.dashboardBtn} ${styles.rating}`}
            >
              <i className="bi bi-star-fill"></i> Rating (User)
            </Link> */}

            <Link
              to="ratings-view"
              className={`${styles.dashboardBtn} ${styles.rating}`}
            >
              <i className="bi bi-people-fill"></i> Admin Ratings
            </Link>
          </div>
        </div>

        {/* Right Side Content */}
        <div className={styles.dashboardContent}>
          <Outlet /> {/* 👈 Page content will show here */}
        </div>
      </div>
    </div>
  );
}
