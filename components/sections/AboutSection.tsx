import styles from "../../styles/sections/AboutSection.module.css";

const aboutMeData = {
  name: "Naveen Akash",
  role: "MERN Stack / Flutter / UI Developer",
  mission: "On a mission to make the web cooler and more fun",
  specialty: "Bringing ideas to life through tech magic",
  motto: "Let's simplify the complexities of coding together!",
  superpower: "Turning caffeine into code",
  // catchphrase: "Ready to join the coding adventure? Let's do this! 🚀✨",
};

const AboutSection: React.FC = () => {
  return (
    <div className={styles.aboutMe} id="aboutMe">
      <p className={styles.heading}>MEET ME</p>
      <div className={styles.description}>
        <span className={styles.rowNum}>00</span>
        <span className={styles.bracket}>{"{"}</span>
        <br />
        {Object.entries(aboutMeData).map(([key, value], index) => (
            <div style={{ display: "flex" }} key={key}>
              <span className={styles.rowNum}>0{index + 1}</span>
              <div className={styles.keyValueDiv}>
                <span className={styles.key}>{key}: </span>
                <span className={styles.value}>{'"' + value + '",'}</span>
                <br />
              </div>
            </div>
        ))}
        <span className={styles.rowNum}>07</span>
        <span className={styles.bracket}>{"}"}</span>
      </div>
    </div>
  );
};

export default AboutSection;
