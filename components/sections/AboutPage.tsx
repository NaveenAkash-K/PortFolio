import styles from '../../styles/AboutPage.module.css';

const AboutPage: React.FC = () => {
  return (
    <div className={styles.aboutMe} id='aboutMe'>
      <p className={styles.heading}>ABOUT</p>
      <p className={styles.description}>
        Hey there! I'm Naveen Akash, A tech enthusiast and a 3rd-year B.Tech IT
        student. Fluent in Flutter, React, C, C++, Python, JS, and Dart. I speak
        both human and machine languages. 🚀 Beyond the realms of code, I'm a UI
        design mixologist, blending aesthetics with functionality. When I'm not
        crafting digital experiences, you'll find me on a mission to make the
        web a cooler place. Join the journey, and let's redefine the online
        landscape together! 🎨💻✨{" "}
      </p>
    </div>
  );
};

export default AboutPage;