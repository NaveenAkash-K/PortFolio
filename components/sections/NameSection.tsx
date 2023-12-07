import styles from "../../styles/sections/NameSection.module.css";
import Image from "next/image";
import backgroundImage from '@/assets/images/background.jpg'

const NameSection: React.FC = () => {
  return (
    <div id="home">
      <Image src={backgroundImage} alt="bg" loading="eager" className={styles.background} />
      <div className={styles.background} />
      <div className={styles.desktopShapes} />
      <div className={styles.wrapper}>
        <p className={styles.name}>NAVEEN AKASH</p>
        <p className={styles.description}>MERN Stack / Flutter / UI Developer</p>
      </div>
    </div>
  );
};

export default NameSection;
