import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row text-center text-md-start">
          
          {/* Brand Info */}
          <div className="col-12 col-md-4 mb-4">
            <h3 className={styles.brandTitle}>COZY CORNER</h3>
            <p className={styles.brandText}>
              Bringing style home, one piece at a time. Crafted with love.  
              Inspired by you.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-2 mb-4">
            <h5 className={styles.footerHeading}>Quick Links</h5>
            <ul className={styles.footerList}>
              <li>About Us</li>
              <li>Collections</li>
              <li>Shop</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-12 col-md-3 mb-4">
            <h5 className={styles.footerHeading}>Customer Service</h5>
            <ul className={styles.footerList}>
              <li>FAQs</li>
              <li>Shipping & Returns</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-12 col-md-3 mb-4">
            <h5 className={styles.footerHeading}>Contact Us</h5>
            <p>📍 Karachi, Pakistan</p>
            <p>📞 +92 300 1234567</p>
            <p>✉️ info@cozycorner.com</p>

            <div className={styles.socialLinks}>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-twitter"></i></a>
              <a href="#"><i className="bi bi-youtube"></i></a>
            </div>
          </div>
        </div>

        <hr className={styles.divider} />

        {/* Copyright */}
        <div className="text-center py-3">
          <p className={styles.copyText}>
            © {new Date().getFullYear()} <span className={styles.brandSpan}>COZY CORNER</span>.  
            Designed to make your space unforgettable.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
