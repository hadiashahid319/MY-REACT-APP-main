
function InstagramSection() {
  return (
    <div
      className="container-fluid py-5"
      style={{ backgroundColor: "#f8f3ee" }} // halka beige jaisa bg
    >
      <div className="row align-items-center">
        {/* Left Text */}
        <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
          <h3
            className="fw-normal"
            style={{ fontFamily: "serif", color: "#444" }}
          >
            Follow us <br /> on Instagram
          </h3>
        </div>

        {/* Right Images */}
        <div className="col-md-8 d-flex justify-content-center gap-3">
          <img
            src={PIC}
            alt="Insta 1"
            className="img-fluid"
            style={{ objectFit: "cover" }}
          />
          <img
            src={PIC}
            alt="Insta 2"
            className="img-fluid"
            style={{ objectFit: "cover" }}
          />
          <img
            src={PIC}
            alt="Insta 3"
            className="img-fluid"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}

export default InstagramSection;