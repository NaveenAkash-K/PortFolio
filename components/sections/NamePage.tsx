import styles from "../../styles/NamePage.module.css";

const NamePage: React.FC = () => {
  return (
    <div id="home">
      <div className={styles.background} />
      <div className={styles.desktopShapes} />
      <div className={styles.wrapper}>
        <p className={styles.name}>NAVEEN AKASH</p>
        <p className={styles.description}>MERN Stack / Flutter / UI Developer</p>
      </div>
    </div>
  );
};

export default NamePage;
