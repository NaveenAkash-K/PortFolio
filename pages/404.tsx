import styles from "../styles/pages/404.module.css";

const Fallback: React.FC = () => {
  return (
    <div className={styles.errorDiv}>
      <h1 className={styles.error}>Error: 404<br/> Page Not Found</h1>
    </div>
  );
};

export default Fallback;
