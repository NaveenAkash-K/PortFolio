import styles from "../../styles/UI/ProgressBar.module.css";

const ProgressBar: React.FC<{ percentage: number }> = (props) => {
  return (
    <div className={styles.progressOutline}>
      <div
        className={styles.progress}
        style={{ width: props.percentage + "%" }}
      ></div>
    </div>
  );
};

export default ProgressBar;
