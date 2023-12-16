import Image, { StaticImageData } from "next/image";
import styles from "../../styles/sections/SkillsSection.module.css";
import sticker from "../../assets/memoji/v_withBlob.png";
import reactImage from "../../assets/skills/reactjs.png";
import nodeJSImage from "../../assets/skills/nodejs.png";
import nextJSImage from "../../assets/skills/nextjs.png";
import flutterImage from "../../assets/skills/flutter.png";
import mongoDBImage from "../../assets/skills/mongodb.png";
import firebaseImage from "../../assets/skills/firebase.png";
import ethereumImage from "../../assets/skills/ethereum.png";
import solidityImage from "../../assets/skills/solidity.png";
import ProgressBar from "../UI/ProgressBar";

const skills: {
  image: StaticImageData;
  imgSize: number;
  percentage: number;
  isLearning: boolean;
}[] = [
  {
    image: flutterImage,
    imgSize: 40,
    percentage: 90,
    isLearning: false,
  },
  { image: reactImage, imgSize: 40, percentage: 90, isLearning: false },
  { image: nextJSImage, imgSize: 40, percentage: 80, isLearning: false },
  { image: nodeJSImage, imgSize: 40, percentage: 75, isLearning: false },
  { image: mongoDBImage, imgSize: 40, percentage: 75, isLearning: false },
  { image: firebaseImage, imgSize: 40, percentage: 90, isLearning: false },
  { image: ethereumImage, imgSize: 40, percentage: 10, isLearning: true },
  { image: solidityImage, imgSize: 40, percentage: 10, isLearning: true },
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
              <Image
                className={styles.skillImage}
                src={skill.image}
                alt="skill"
                width={skill.imgSize}
              />
              <ProgressBar
                percentage={skill.percentage}
                isLoading={skill.isLearning}
              />{" "}
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
