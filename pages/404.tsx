import styles from "../styles/pages/404.module.css";

const Fallback: React.FC = () => {
  return (
    <div className={styles.errorDiv}>
      <h1 className={styles.error}>404 Page Not Found</h1>
    </div>
  );
};

export default Fallback;
