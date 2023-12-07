import Image, { StaticImageData } from "next/image";
import styles from "../../styles/sections/SkillsSection.module.css";
import sticker from "../../assets/memoji/v_withBlob.png";
import reactImage from "../../assets/skills/reactjs.png";
import nodeJSImage from "../../assets/skills/nodejs.png";
import nextJSImage from "../../assets/skills/nextjs.png";
import flutterImage from "../../assets/skills/flutter.png";
import mongoDBImage from "../../assets/skills/mongodb.png";
import firebaseImage from "../../assets/skills/firebase.png";
import ProgressBar from "../UI/ProgressBar";

const skills: {
  image: StaticImageData;
  imgSize: number;
  percentage: number;
}[] = [
  { image: flutterImage, imgSize: 40, percentage: 90 },
  { image: reactImage, imgSize: 40, percentage: 90 },
  { image: nextJSImage, imgSize: 40, percentage: 80 },
  { image: nodeJSImage, imgSize: 40, percentage: 75 },
  { image: mongoDBImage, imgSize: 40, percentage: 75 },
  { image: firebaseImage, imgSize: 40, percentage: 90 },
];

const SkillsSection: React.FC = () => {
  return (
    <div className={styles.SkillsSection} id="skills">
      <center>
        <p className={styles.heading}>Skills</p>
      </center>
      <div className={styles.main}>
        <div className={styles.skills}>
          {skills.map((skill) => (
            <div className={styles.skill} key={skills.indexOf(skill)}>
              <Image src={skill.image} alt="react" width={skill.imgSize} />
              <ProgressBar percentage={skill.percentage} />
            </div>
          ))}
        </div>
        <div className={styles.avatar}>
          <Image src={sticker} alt="Avatar" width={450} />
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
