import Image, { StaticImageData } from "next/image";
import styles from "../../styles/sections/SkillsSection.module.css";
import sticker from "../../assets/memoji/v_withBlob.png";
import reactImage from "../../assets/skills/reactjs.png";
import nodeJSImage from "../../assets/skills/nodejs.png";
import nextJSImage from "../../assets/skills/nextjs.png";
import flutterImage from "../../assets/skills/flutter.png";
import mongoDBImage from "../../assets/skills/mongodb.png";
import firebaseImage from "../../assets/skills/firebase.png";
import etheriumImage from "../../assets/skills/ethereum.png";
import solidityImage from "../../assets/skills/solidity.png";
import ProgressBar from "../UI/ProgressBar";

const skills: {
  title: string;
  image: StaticImageData;
  imgSize: number;
  percentage: number;
  isLearning: boolean;
}[] = [
  {
    title: "Flutter",
    image: flutterImage,
    imgSize: 40,
    percentage: 90,
    isLearning: false,
  },
  {
    title: "ReactJS",
    image: reactImage,
    imgSize: 40,
    percentage: 90,
    isLearning: false,
  },
  {
    title: "NextJS",
    image: nextJSImage,
    imgSize: 40,
    percentage: 80,
    isLearning: false,
  },
  {
    title: "NodeJS",
    image: nodeJSImage,
    imgSize: 40,
    percentage: 75,
    isLearning: false,
  },
  {
    title: "MongoDB",
    image: mongoDBImage,
    imgSize: 40,
    percentage: 75,
    isLearning: false,
  },
  {
    title: "Firebase",
    image: firebaseImage,
    imgSize: 40,
    percentage: 90,
    isLearning: false,
  },
  {
    title: "Etherium",
    image: etheriumImage,
    imgSize: 40,
    percentage: 10,
    isLearning: true,
  },
  {
    title: "Solidity",
    image: solidityImage,
    imgSize: 40,
    percentage: 10,
    isLearning: true,
  },
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
                title={skill.title}
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
