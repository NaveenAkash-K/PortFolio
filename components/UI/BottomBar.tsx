import React from "react";
import { Link } from "react-scroll";
import styles from "../../styles/BottomBar.module.css";
import Image from 'next/image';
import instagramImage from '../../assets/images/Instagram.png';
import linkedinImage from '../../assets/images/Linkedin.png';
import githubImage from '../../assets/images/GitHub.png';

const BottomBar: React.FC = () => {
  return (
    <div className={styles.bottomBar}>
      <nav>
        <Link
          to="home"
          smooth={true}
          offset={0} // Adjust the offset if needed
          duration={500}
          className={styles.navLink}
        >
          HOME
        </Link>
        <Link
          to="aboutMe"
          smooth={true}
          offset={50} // Adjust the offset if needed
          duration={500}
          className={styles.navLink}
        >
          ABOUT
        </Link>
        <Link
          to="projects"
          smooth={true}
          offset={50} // Adjust the offset if needed
          duration={500}
          className={styles.navLink}
        >
          PROJECTS
        </Link>
      </nav>
      <div className={styles.socialButtonDiv}>
        <SocialButton></SocialButton>
      </div>
    </div>
  );
};

const SocialButton: React.FC = () => {
  return (
    <>
      <a
        href="https://github.com/NaveenAkash-K"
        style={{ textDecoration: "none" }}
      >
        <button
          className={styles.socialButton + " " + styles.GitHub}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        >
          <Image
            className={styles.socialImage}
            src={githubImage}
            alt=""
            width={30}
            height={30}
            style={{ padding: "10px" }}
          />
          <p className={styles.socialText}>GitHub</p>
        </button>
      </a>
      <a
        href="https://www.linkedin.com/in/naveen-akash/"
        style={{ textDecoration: "none" }}
      >
        <button
          className={styles.socialButton}
          style={{ backgroundColor: "rgba(0, 123, 182, 0.5)" }}
        >
          <Image
            className={styles.socialImage}
            src={linkedinImage}
            alt=""
            width={30}
            height={30}
            style={{ padding: "10px" }}
          />
          <p className={styles.socialText}>Linkedin</p>
        </button>
      </a>
      <a
        href="https://www.instagram.com/_n.a.ve.e.n_/"
        style={{ textDecoration: "none" }}
      >
        <button
          className={styles.socialButton}
          style={{ backgroundColor: "rgba(228, 64, 95, 0.5)" }}
        >
          <Image
            className={styles.socialImage}
            src={instagramImage}
            alt=""
            width={30}
            height={30}
            style={{ padding: "10px" }}
          />
          <p className={styles.socialText}>Instagram</p>
        </button>
      </a>
    </>
  );
};

export default BottomBar;
