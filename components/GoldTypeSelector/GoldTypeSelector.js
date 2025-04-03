import styles from "./GoldTypeSelector.module.css";

const GoldTypeSelector = ({ selectedType, onSelect }) => {
  const goldTypes = ["yellow", "white", "rose"];

  return (
    <div className={styles.goldTypeSelector}>
      <div className={styles.goldButtonsWrapper}>
        {goldTypes.map((type) => (
          <button
            key={type}
            className={`${styles.goldButton} 
            ${selectedType === type ? styles.active : ""} 
            ${styles[type]}`}
            onClick={() => onSelect(type)}
          ></button>
        ))}
      </div>
      <p className={styles.selectedTypeText}>{selectedType} Gold</p>
    </div>
  );
};

export default GoldTypeSelector;
