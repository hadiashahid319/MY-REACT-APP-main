import ABOUT from "./assets/HOM/banner.jpg";
import styles from "./Banner.module.css"; // ✅ Import CSS Module

function Banner() {
  return (
    <section className={styles.bannerSection}>
      <div className="container-fluid">
        <div className="row align-items-center flex-column-reverse flex-md-row">
          {/* LEFT TEXT SIDE */}
          <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
            <h2 className={styles.title}>COZY CORNER</h2>
            <p className={styles.subtitle}>
              "Redefine your home with timeless decor <br />
              and modern elegance. Creating beautiful spaces that <br />
              reflect your style and story."
            </p>
            <button className={styles.shopBtn}>SHOP NOW</button>
          </div>

          {/* RIGHT IMAGE SIDE */}
          <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
            <img src={ABOUT} alt="Banner" className={styles.bannerImage} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
