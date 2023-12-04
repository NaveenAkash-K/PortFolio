import reactJSImage from "@/assets/skills/reactjs.png";
import nodeJSImage from "@/assets/skills/nodejs.png";
import firebaseImage from "@/assets/skills/firebase.png";
import flutterImage from "@/assets/skills/flutter.png";
import javascriptImage from "@/assets/skills/javascript.png";
import mongoDBImage from "@/assets/skills/mongodb.png";
import nextJSImage from "@/assets/skills/nextjs.png";
import cssImage from "@/assets/skills/css.png";
import figmaImage from "@/assets/skills/figma.png";
import htmlImage from "@/assets/skills/html.png";

import walletSync1 from "@/assets/screenshots/walletSync/screenshot_7.jpg";
import walletSync2 from "@/assets/screenshots/walletSync/screenshot_1.jpg";
import walletSync3 from "@/assets/screenshots/walletSync/screenshot_6.jpg";
import walletSync4 from "@/assets/screenshots/walletSync/screenshot_5.jpg";
import walletSync5 from "@/assets/screenshots/walletSync/screenshot_8.jpg";
import walletSync6 from "@/assets/screenshots/walletSync/screenshot_3.jpg";
import walletSync7 from "@/assets/screenshots/walletSync/screenshot_9.jpg";
import walletSync8 from "@/assets/screenshots/walletSync/screenshot_10.jpg";

import { StaticImageData } from "next/image";

export const ProjectsList: {
  id: string;
  title: string;
  description: string;
}[] = [
  {
    id: "wallet_sync",
    title: "Wallet Sync",
    description:
      "Seamlessly manage shared finances—bill splitting to group expenses—with Wallet Sync, streamlining collaborative finance.",
  },
  {
    id: "dropout_analysis",
    title: "Dropout Analysis",
    description:
      "This project visualizes critical data on student droupout rates to shape policies and ensure every student has a fair shot at education.",
  },
  {
    id: "protocol_24E",
    title: "Protocol 24E",
    description:
      "Transforming Figma design into a captivating online experience, the symposium website sets the stage for an unforgettable event.",
  },
  {
    id: "rotaract_club",
    title: "Website for Club",
    description:
      "Cooked up a website in just 24 hours to power up a hackathon conducted by rotaract club",
  },
  {
    id: "portfolio",
    title: "PortFolio",
    description:
      "Unveiling my digital identity! showcasing my skills more than a portfolio.",
  },
  {
    id: "failure_prediction",
    title: "Aircraft Engine Failure Prediction",
    description:
      "The project integrates with aircraft engines to predict potential failures for safer skies.",
  },
];

export const ProjectsData: {
  id: string;
  title: string;
  overview: string;
  skills: { name: string; image: StaticImageData; largeImage: number, smallImage:number }[];
  keyFeatures: [string, string][];
  githubLink: string;
  screenshots: { image: StaticImageData; largeImage: number, smallImage:number }[];
}[] = [
  {
    id: "wallet_sync",
    title: "Wallet Sync - Shared Money Manager",
    overview:
      "Wallet Sync is a powerful and user-friendly financial management app designed for collaborative expense and income tracking. With Wallet Sync, you can easily manage shared finances with friends, family, or colleagues, ensuring a seamless experience for everyone involved.",
    skills: [
      { name: "Flutter", image: flutterImage, largeImage: 35, smallImage:30 },
      { name: "Firebase", image: firebaseImage, largeImage: 35, smallImage:30 },
    ],
    keyFeatures: [
      [
        "Shared Expense Tracking",
        "Keep a log of shared expenses and easily track who paid for what.",
      ],
      [
        "Income Management",
        "Track shared income and ensure a comprehensive view of your group's financial activities.",
      ],
      [
        "Group-specific Logs",
        "Create and manage multiple shared expense logs for different groups or events.",
      ],
      [
        "Real-time Sync",
        "Stay up-to-date with real-time synchronization of financial data across all users in a group.",
      ],
    ],
    githubLink: "https://github.com/NaveenAkash-K/WalletSync-Shared_Money_Manager",
    screenshots: [
      { image: walletSync1, largeImage: 250, smallImage:148 },
      { image: walletSync2, largeImage: 250, smallImage:148 },
      { image: walletSync3, largeImage: 250, smallImage:148 },
      { image: walletSync4, largeImage: 250, smallImage:148 },
      { image: walletSync5, largeImage: 250, smallImage:148 },
      { image: walletSync6, largeImage: 250, smallImage:148 },
      { image: walletSync7, largeImage: 250, smallImage:148 },
      { image: walletSync8, largeImage: 250, smallImage:148 },
    ],
  },
];
//   {
//     id: "dropout_analysis",
//     title: "Dropout Analysis",
//     description:
//       "Transforming education in Gujarat with our project with data visualization, student management system.  Helping government to shape policies for equal access, because education is a right, not a privilege.",
//     skills: [
//       { name: "HTML", image: htmlImage, imageSize: 40 },
//       { name: "CSS", image: cssImage, imageSize: 40 },
//       { name: "JavaScript", image: javascriptImage, imageSize: 40 },
//       { name: "Figma", image: figmaImage, imageSize: 40 },
//       { name: "Firebase", image: firebaseImage, imageSize: 40 },
//     ],
//     githubLink: "",
//   },
//   {
//     id: "protocol_24E",
//     title: "Protocol 24E",
//     description:
//       "Turning design into a digital masterpiece! I brought our department's symposium website to life by seamlessly translating a Figma design into a captivating online experience. Skillfully blending creativity and functionality, the result is a visually stunning website that sets the stage for an unforgettable event.",
//     skills: [
//       { name: "HTML", image: htmlImage, imageSize: 40 },
//       { name: "CSS", image: cssImage, imageSize: 40 },
//       { name: "JavaScript", image: javascriptImage, imageSize: 40 },
//     ],
//     githubLink: "https://github.com/NaveenAkash-K/Protocol-24E",
//   },
//   {
//     id: "rotaract_club",
//     title: "Website for Club",
//     description:
//       "Rapid web magic for a Rotaract hackathon! In just 24 hours, I brought the hackathon's online presence to life, following the design cues from Figma. The ticking clock didn't compromise quality; while the UI might bear a raw charm, it perfectly complements the urgency and innovation of the event. A testament to swift execution and turning tight timelines into a functional digital space.",
//     skills: [
//       { name: "HTML", image: htmlImage, imageSize: 40 },
//       { name: "CSS", image: cssImage, imageSize: 40 },
//       { name: "JavaScript", image: javascriptImage, imageSize: 40 },
//     ],
//     githubLink: "https://github.com/NaveenAkash-K/Rotaract",
//   },
//   {
//     id: "portfolio",
//     title: "PortFolio",
//     description:
//       "Unveiling my digital identity! This portfolio, a creation powered by JavaScript, is not just a showcase—it's a representation of my skills as a React and UI developer. Dive into a personalized journey that echoes my potential and passion for crafting seamless and engaging digital experiences. Because when it's about me, it's not just a portfolio, it's a digital embodiment of what I bring to the tech table.",
//     skills: [
//       { name: "ReactJS", image: reactJSImage, imageSize: 40 },
//       { name: "NextJS", image: nextJSImage, imageSize: 40 },
//       { name: "JavaScript", image: javascriptImage, imageSize: 40 },
//       { name: "Figma", image: figmaImage, imageSize: 40 },
//       { name: "Firebase", image: firebaseImage, imageSize: 40 },
//     ],
//     githubLink: "https://github.com/NaveenAkash-K/PortFolio",
//   },
//   {
//     id: "failure_prediction",
//     title: "Aircraft Engine Failure Prediction",
//     description:
//       "Predicting aircraft engine health with machine learning! In this project, I harnessed the power of ML to develop a website that seamlessly integrates with aircraft engines. By analyzing crucial factors like temperature, runtime, and speed in real-time using PyScript, the system predicts potential failures. Elevating predictive maintenance to new heights for safer skies.",
//     skills: [
//       { name: "HTML", image: htmlImage, imageSize: 40 },
//       { name: "CSS", image: cssImage, imageSize: 40 },
//       { name: "JavaScript", image: javascriptImage, imageSize: 40 },
//       { name: "Firebase", image: firebaseImage, imageSize: 40 },
//     ],
//     githubLink: "https://github.com/NaveenAkash-K/HackIT",
//   },
// ];
