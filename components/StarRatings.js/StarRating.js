import styles from "./StarRating.module.css";
const StarRating = ({ rating }) => {
  return (
    <div className={styles.rating}>
      <div className={styles.stars}>
        {Array.from({ length: 5 }, (_, i) => (
          <span
            key={i}
            className={i < rating ? styles.filledStar : styles.emptyStar}
          >
            ★
          </span>
        ))}
      </div>
      <p className={styles.ratingText}>{rating}/5</p>
    </div>
  );
};

export default StarRating;
