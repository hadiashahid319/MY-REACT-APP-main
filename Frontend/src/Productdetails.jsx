import styles from "./ProductDetails.module.css";

function ProductDetails() {
  return (
    <>
      <h1>This is from products details page.</h1>
      <h2 className={styles.details}>Product details area.</h2>
      {/* <h2 className="details">Descriptions area.</h2> */}
    </>
  );
}

export default ProductDetails;
