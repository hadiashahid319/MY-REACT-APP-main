import ABOUT from "./assets/Hom/decor.jpg";

function View() {
  return (
    <section
      id="about"
      className="py-5"
      style={{ backgroundColor: "#E1D4C2" }}
       // Soft neutral background
    >
      <div className="container-fluid">
        <div className="row align-items-center flex-column-reverse flex-md-row">
          
          {/* LEFT COLUMN (Text + Button) */}
          <div className="col-12 col-md-6 text-center text-md-start px-4">
            <h2
              className="fw-bold mb-3"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                color: "#51310d", // Wooden brown
              }}
            >
              About Us
            </h2>
            <p
              className="mb-3"
              style={{
                fontFamily: "'Merriweather', serif",
                fontSize: "clamp(0.95rem, 1.2vw, 1.15rem)",
                lineHeight: "1.8",
                color: "#333",
                 // Neutral dark for readability
              }}
            >
              At <span style={{ color: "#744c1e", fontWeight: "600" }}>COZY CORNER</span>, 
              we believe every corner deserves a touch of beauty.
              Our curated décor blends timeless style with modern charm 
              to create spaces you’ll love coming home to.
            </p>

            {/* Button */}
            <button
              className="btn px-4 py-2 fw-semibold shadow mt-2"
              style={{
                backgroundColor: "#744c1e",
                color: "white",
                borderRadius: "30px",
                border: "2px solid #6E473B",
                transition: "all 0.3s ease",
                fontSize: "clamp(0.9rem, 1vw, 1rem)",
              }}
            >
              LEARN MORE
            </button>
          </div>

          {/* RIGHT COLUMN (Image) */}
          <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
            <img
              src={ABOUT}
              alt="About"
              className="img-fluid rounded shadow"
              style={{
                maxHeight: "420px",
                width: "85%",
                objectFit: "cover",
                border: "4px solid #E1D4C2", // soft beige border
                borderRadius: "12px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default View;
