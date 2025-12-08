import { Link } from "react-router-dom";
import PIC from "./assets/Hom/mirror1.jpg";
import second from "./assets/Hom/5.jpg";
import third from "./assets/Hom/vase.jpg";
import fourth from "./assets/Hom/2.jpg";
import styles from "./GallerySection.module.css";

function GallerySection() {
  const items = [
    { src: PIC, name: "MIRRORS", path: "/mirrors" },
    { src: second, name: "CANDLES", path: "/candles" },
    { src: third, name: "VASES", path: "/vases" },
    { src: fourth, name: "FRAMES", path: "/frames" },
  ];

  return (
    <section id="gallery" className={styles.gallerySection}>
      <div className="container py-5">
        <h2 className={styles.title}>OUR COLLECTION</h2>

        <div className="row g-4 justify-content-center">
          {items.map((item, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 col-lg-3 text-center"
            >
              {/* 🔹 Wrap image & name in Link */}
              <Link to={item.path} className={styles.linkWrapper}>
                <div className={styles.card}>
                  <img src={item.src} alt={item.name} className={styles.image} />
                  <p className={styles.name}>{item.name}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
