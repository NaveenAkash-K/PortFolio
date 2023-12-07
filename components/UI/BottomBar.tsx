import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import styles from "../../styles/UI/BottomBar.module.css";
import Image, { StaticImageData } from "next/image";
import instagramImage from "../../assets/images/Instagram.png";
import linkedinImage from "../../assets/images/Linkedin.png";
import githubWhiteImage from "../../assets/images/GitHub_white.png";
import githubBlackImage from "../../assets/images/GitHub.png";



const navLinks: {
  title: string;
  to: string;
}[] = [
  {
    title: "HOME",
    to: "home",
  },
  {
    title: "MEET ME",
    to: "aboutMe",
  },
  {
    title: "SKILLS",
    to: "skills",
  },
  {
    title: "PROJECTS",
    to: "projects",
  },
];

const BottomBar: React.FC<{ reduced: boolean }> = (props) => {
  const reduced: boolean = props.reduced;
  const [isSmallScreen,setIsSmallScreen] = useState(true);
  useEffect(() => {
    setIsSmallScreen(window.innerWidth < 770);
  }, [])
  const socialButtons: {
    title: string;
    image: StaticImageData;
    backgroundColor: string;
    link: string;
  }[] = [
    {
      title: "GitHub",
      image: isSmallScreen ? githubWhiteImage : githubBlackImage,
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      link: "https://github.com/NaveenAkash-K",
    },
    {
      title: "LinkedIn",
      image: linkedinImage,
      backgroundColor: "rgba(0, 123, 182, 0.5)",
      link: "https://www.linkedin.com/in/naveen-akash/",
    },
    {
      title: "Instagram",
      image: instagramImage,
      backgroundColor: "rgba(228, 64, 95, 0.5)",
      link: "https://www.instagram.com/_n.a.ve.e.n_/",
    },
  ];
  return (
    <div className={styles.bottomBar}>
      {!reduced ? (
        <nav>
          {navLinks.map((item) => {
            return (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                offset={0} // Adjust the offset if needed
                duration={500}
                className={styles.navLink}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>
      ):null}
      <div className={styles.socialButtonDiv}>
        {socialButtons.map((button) => (
          <a
            href={button.link}
            style={{ textDecoration: "none" }}
            key={button.title}
          >
            <button
              className={styles.socialButton}
              style={{ backgroundColor: button.backgroundColor }}
            >
              <Image
                className={styles.socialImage}
                src={button.image}
                alt=""
                width={31}
                height={30}
                style={{ padding: "10px" }}
              />
              <p className={styles.socialText}>{button.title}</p>
            </button>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BottomBar;
