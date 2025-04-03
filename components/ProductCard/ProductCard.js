import styles from "./ProductCard.module.css";

const ProductCard = ({ title, price, goldType, image }) => {
  return (
    <>
      <div className={styles.productCard}>
        <img src={image} alt={title} className={styles.productImage} />
        <h2>{title}</h2>
        <p>$101.00 {price} USD</p>
        <p className={styles.goldType}>{goldType}</p>
      </div>
    </>
  );
};

export default ProductCard;
