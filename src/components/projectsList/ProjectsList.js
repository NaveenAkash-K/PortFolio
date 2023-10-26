import "./projectsList.css";
import ProjectItem from "../projectItem/ProjectItem";
const ProjectsList = () => {
  const projects = [
    {
      id: 1,
      title: "Personal and Shared Money Manager",
      description:
      "Reinventing budget management! My Expense Tracker app isn't your typical finance tool. It's designed for real-life scenarios, helping you effortlessly track personal and shared expenses with your friends, families here. Simplify the complexities of managing money with a user-friendly solution that puts you in control of your financial journey. Embrace financial freedom—because managing money should be as easy as a conversation with a friend.",
      skills: ["Flutter", "Firebase", "Figma"],
      link:"https://github.com/NaveenAkash-K/Simple-Money_Manager"
    },
    {
      id: 2,
      title: "School Students Dropout Analysis",
      description:
      "Revolutionizing education in Gujarat! Our project tackles the high dropout rates by introducing a smart system. It's not just data management; it's a dynamic approach to understanding and combating student dropout. With real-time tracking, predictive analytics, and user-friendly interfaces for government authorities, we're shaping policies with precision. Because education is a right, not a privilege.",
      skills: ["HTML", "CSS", "JS", "Figma", "ML", "Firebase", "MySql"],
      link:""
    },
    {
      id: 3,
      title: "Protocol 24E",
      description:
      "Turning design into a digital masterpiece! I brought our department's symposium website to life by seamlessly translating a Figma design into a captivating online experience. Skillfully blending creativity and functionality, the result is a visually stunning website that sets the stage for an unforgettable event.",
      skills: ["HTML", "CSS", "JS"],
      link:"https://github.com/NaveenAkash-K/Protocol-24E"
    },
    {
      id: 4,
      title: "Website for Rotaract Hackathon",
      description:
      "Rapid web magic for a Rotaract hackathon! In just 24 hours, I brought the hackathon's online presence to life, following the design cues from Figma. The ticking clock didn't compromise quality; while the UI might bear a raw charm, it perfectly complements the urgency and innovation of the event. A testament to swift execution and turning tight timelines into a functional digital space.",
      skills: ["HTML", "CSS", "JavaScript"],
      link:"https://github.com/NaveenAkash-K/Rotaract"
    },
    {
      id: 5,
      title: "PortFolio",
      description:
      "Unveiling my digital identity! This portfolio, a creation powered by JavaScript, is not just a showcase—it's a representation of my skills as a React and UI developer. Dive into a personalized journey that echoes my potential and passion for crafting seamless and engaging digital experiences. Because when it's about me, it's not just a portfolio, it's a digital embodiment of what I bring to the tech table.",
      skills: ["React", "Figma", "HTML", "CSS", "JavaScript"],
      link:"https://github.com/NaveenAkash-K/PortFolio"
    },
    {
      id: 6,
      title: "Failure  prediction of Aircraft Engine",
      description:
      "Predicting aircraft engine health with machine learning! In this project, I harnessed the power of ML to develop a website that seamlessly integrates with aircraft engines. By analyzing crucial factors like temperature, runtime, and speed in real-time using PyScript, the system predicts potential failures. Elevating predictive maintenance to new heights for safer skies.",
      skills: ["HTML", "CSS", "JS", "Firebase", "ML"],
      link:"https://github.com/NaveenAkash-K/HackIT"
    },
    // Add more projects as needed
  ];
  
  return (
    <div className="projectsList">
      {projects.map((projectItem) => (
        <ProjectItem
          key={projectItem.id}
          title={projectItem.title}
          description={projectItem.description}
          skills={projectItem.skills}
          link={projectItem.link}
        />
      ))}
    </div>
  );
};
export default ProjectsList;
