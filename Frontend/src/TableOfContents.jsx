
import styles from"./TableOfContents.module.css";

const TableOfContents = () => {
  return (
    <div className={styles.toccontainer}>
      <div className="toc-content row shadow-lg">
        {/* Left Section */}
        <div className="col-md-8 toc-left d-flex flex-column justify-content-center">
          <h2 className="fw-bold mb-5 text-uppercase">TABLE OF CONTENTS</h2>
          <div className="toc-list">
            <div className="d-flex justify-content-between mb-3">
              <span className="fw-semibold">WELCOME</span>
              <span>3</span>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <span className="fw-semibold">ADD ITEMS</span>
              <span>4</span>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <span className="fw-semibold">DELETE ITEMS</span>
              <span>8</span>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <span className="fw-semibold">UPDATE ITEMS</span>
              <span>16</span>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <span className="fw-semibold">RESPONSE</span>
              <span>34</span>
            </div>
            <div className="d-flex justify-content-between">
              <span className="fw-semibold">REVIEWS</span>
              <span>42</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className={styles.tocright}></div>
      </div>
    </div>
  );
};

export default TableOfContents;