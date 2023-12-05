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
import typescriptImage from "@/assets/skills/typescript.png";

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
    id: "portfolio",
    title: "PortFolio",
    description:
      "Unveiling my digital identity! showcasing my skills more than a portfolio.",
  },
  {
    id: "protocol_24E",
    title: "Protocol 24E",
    description:
      "Transforming Figma design into a captivating online experience, the symposium website sets the stage for an unforgettable event.",
  },
  {
    id: "dropout_analysis",
    title: "Dropout Analysis",
    description:
      "This project visualizes critical data on student droupout rates to shape policies and ensure every student has a fair shot at education.",
  },
  {
    id: "failure_prediction",
    title: "Aircraft Engine Failure Prediction",
    description:
      "The project integrates with aircraft engines to predict potential failures for safer skies.",
  },
  {
    id: "rotaract_club",
    title: "Website for Club",
    description:
      "Cooked up a website in just 24 hours to power up a hackathon conducted by rotaract club",
  },
];

export const ProjectsData: {
  id: string;
  title: string;
  overview: string;
  skills: {
    name: string;
    image: StaticImageData;
    largeImage: number;
    smallImage: number;
  }[];
  keyFeatures: [string, string][];
  githubLink: string;
  screenshots: {
    image: StaticImageData;
    largeImage: number;
    smallImage: number;
  }[];
}[] = [
  {
    id: "wallet_sync",
    title: "Wallet Sync - Shared Money Manager",
    overview:
      "Wallet Sync is a comprehensive finance management application designed for collaborative expense tracking. Developed using Flutter for the frontend and Firebase as the backend, this app facilitates real-time synchronization of shared expenses and income among a group of users. The key features include shared expense logs, income management, and group-specific financial insights. The project involved complex database structuring, efficient synchronization algorithms, and integration of Firebase functionalities for seamless user experience. Constantly evolving, I am working on future updates that include migrating to MongoDB and creating a custom NodeJS backend for enhanced scalability and functionality. This project showcases my proficiency in mobile app development, real-time data synchronization, and the ability to adapt and improve on existing solutions.",
    skills: [
      {
        name: "Flutter",
        image: flutterImage,
        largeImage: 35,
        smallImage: 30,
      },
      {
        name: "Firebase",
        image: firebaseImage,
        largeImage: 35,
        smallImage: 30,
      },
    ],
    keyFeatures: [
      [
        "Real-time Expense Tracking",
        "Effortlessly track shared expenses and income with friends or teammates.",
      ],
      [
        "Seamless Budget Management",
        "Manage money collaboratively, from bill splitting to group expenses.",
      ],
      [
        "Multiple Group Logs",
        "Create and manage distinct shared expense logs for various groups or events.",
      ],
      [
        "User Authentication",
        "Securely log in with user authentication for personalized financial tracking.",
      ],
      [
        "Cross-Platform Availability",
        "Access Wallet Sync on multiple devices for convenience and flexibility.",
      ],
    ],
    githubLink:
      "https://github.com/NaveenAkash-K/WalletSync-Shared_Money_Manager",
    screenshots: [
      { image: walletSync1, largeImage: 250, smallImage: 148 },
      { image: walletSync2, largeImage: 250, smallImage: 148 },
      { image: walletSync3, largeImage: 250, smallImage: 148 },
      { image: walletSync4, largeImage: 250, smallImage: 148 },
      { image: walletSync5, largeImage: 250, smallImage: 148 },
      { image: walletSync6, largeImage: 250, smallImage: 148 },
      { image: walletSync7, largeImage: 250, smallImage: 148 },
      { image: walletSync8, largeImage: 250, smallImage: 148 },
    ],
  },
  {
    id: "portfolio",
    title: "Personal PortFolio Website",
    overview:
      "The Portfolio Website stands as a digital identity showcase, meticulously crafted using React, Next.js, and TypeScript. It offers a personalized journey into the skills and projects of a passionate React and UI developer. More than just a showcase, this website serves as a representation of technical proficiency, providing visitors with a seamless and engaging experience that highlights various skills and projects. The user-friendly interface and responsive design make it an ideal platform for exploring the developer's expertise.",
    skills: [
      {
        name: "NextJS",
        image: nextJSImage,
        largeImage: 35,
        smallImage: 30,
      },
      {
        name: "ReactJS",
        image: reactJSImage,
        largeImage: 35,
        smallImage: 30,
      },
      {
        name: "TypeScript",
        image: typescriptImage,
        largeImage: 33,
        smallImage: 28,
      },
      {
        name: "NodeJS",
        image: nodeJSImage,
        largeImage: 32,
        smallImage: 30,
      },
      {
        name: "JavaScript",
        image: javascriptImage,
        largeImage: 40,
        smallImage: 35,
      },
      {
        name: "Firebase",
        image: firebaseImage,
        largeImage: 35,
        smallImage: 30,
      },
      {
        name: "Figma",
        image: figmaImage,
        largeImage: 35,
        smallImage: 30,
      },
    ],
    keyFeatures: [
      [
        "Digital Identity Showcase",
        "Highlight your skills and projects in a personalized journey.",
      ],
      [
        "Tech Proficiency Display",
        "Craft a seamless and engaging digital experience for visitors.",
      ],
      [
        "Responsive Design",
        "Ensure the portfolio website looks stunning and functions flawlessly on all devices.",
      ],
      [
        "Interactive Components",
        "Integrate interactive components for an engaging and dynamic user experience.",
      ],
      [
        "Performance Optimization",
        "Optimize website performance for fast loading and smooth navigation.",
      ],
    ],
    screenshots: [
      { image: walletSync1, largeImage: 250, smallImage: 148 },
      { image: walletSync2, largeImage: 250, smallImage: 148 },
      { image: walletSync3, largeImage: 250, smallImage: 148 },
      { image: walletSync4, largeImage: 250, smallImage: 148 },
      { image: walletSync5, largeImage: 250, smallImage: 148 },
      { image: walletSync6, largeImage: 250, smallImage: 148 },
      { image: walletSync7, largeImage: 250, smallImage: 148 },
      { image: walletSync8, largeImage: 250, smallImage: 148 },
    ],
    githubLink: "https://github.com/NaveenAkash-K/PortFolio",
  },
  {
    id: "dropout_analysis",
    title: "Analysis of School Student's Dropout Data",
    overview:
    "The Education Data Visualization project is a pivotal initiative aimed at reshaping education policies in Gujarat. Through innovative data-driven visualizations, this project sheds light on critical student dropout rates, advocating for equal access to education. Serving as a powerful tool for policymakers, the data visualization platform facilitates informed decision-making, contributing to the creation of a more inclusive educational landscape where every student has an equitable opportunity to learn.",
    skills: [
      {
        name: "HTML",
        image: htmlImage,
        largeImage: 35,
        smallImage: 30,
      },
      {
        name: "CSS",
        image: cssImage,
        largeImage: 35,
        smallImage: 30,
      },
      {
        name: "JavaScript",
        image: javascriptImage,
        largeImage: 35,
        smallImage: 30,
      },
      {
        name: "Firebase",
        image: firebaseImage,
        largeImage: 35,
        smallImage: 30,
      },
    ],
    keyFeatures: [
      [
        "Data-Driven Insights",
        "Visualize critical student dropout rates to shape education policies.",
      ],
      [
        "Equal Access Focus",
        "Ensure every student has a fair shot at education through data analysis.",
      ],
      [
        "User-Friendly Dashboards",
        "Navigate through intuitive dashboards for comprehensive data exploration.",
      ],
      [
        "Predictive Analytics",
        "Implement predictive analytics to identify potential dropout trends.",
      ],
      [
        "Government Collaboration",
        "Contribute to government initiatives by providing valuable education data.",
      ],
    ],
    screenshots: [
      { image: walletSync1, largeImage: 250, smallImage: 148 },
      { image: walletSync2, largeImage: 250, smallImage: 148 },
      { image: walletSync3, largeImage: 250, smallImage: 148 },
      { image: walletSync4, largeImage: 250, smallImage: 148 },
      { image: walletSync5, largeImage: 250, smallImage: 148 },
      { image: walletSync6, largeImage: 250, smallImage: 148 },
      { image: walletSync7, largeImage: 250, smallImage: 148 },
      { image: walletSync8, largeImage: 250, smallImage: 148 },
    ],
    githubLink: "",
  },
  {
    id: "protocol_24E",
    title: "Protocol 24E - A Website for my College Symposium",
    overview:
      "Bringing design to life in the digital space, the Symposium Website project seamlessly translates Figma designs into a captivating online experience. This project serves as the online hub for a departmental symposium, offering attendees a visually stunning and user-friendly platform. The fusion of creativity and functionality is evident in every aspect of the website, setting the stage for an unforgettable event and providing a seamless digital experience for participants and visitors alike.",
    skills: [
      {
        name: "HTML",
        image: htmlImage,
        largeImage: 35,
        smallImage: 30,
      },
      {
        name: "CSS",
        image: cssImage,
        largeImage: 35,
        smallImage: 30,
      },
      {
        name: "JavaScript",
        image: javascriptImage,
        largeImage: 35,
        smallImage: 30,
      },

    ],
    keyFeatures: [
      [
        "Figma-to-Website Transformation",
        "Bring Figma designs to life, creating visually stunning event platforms.",
      ],
      [
        "User-Friendly Experience",
        "Blend creativity and functionality for an engaging online event space.",
      ],
      [
        "Event Schedule Integration",
        "Incorporate and display event schedules seamlessly for attendee convenience.",
      ],
      [
        "Responsive Design",
        "Ensure a seamless user experience across various devices and screen sizes.",
      ],
      [
        "Interactive Elements",
        "Integrate interactive elements for an immersive and dynamic event experience.",
      ],
    ],
    screenshots: [
      { image: walletSync1, largeImage: 250, smallImage: 148 },
      { image: walletSync2, largeImage: 250, smallImage: 148 },
      { image: walletSync3, largeImage: 250, smallImage: 148 },
      { image: walletSync4, largeImage: 250, smallImage: 148 },
      { image: walletSync5, largeImage: 250, smallImage: 148 },
      { image: walletSync6, largeImage: 250, smallImage: 148 },
      { image: walletSync7, largeImage: 250, smallImage: 148 },
      { image: walletSync8, largeImage: 250, smallImage: 148 },
    ],
    githubLink: "https://github.com/NaveenAkash-K/Protocol-24E",
  },
  {
    id: "rotaract_club",
    title: "Website for Organizing Rotaract Club Hackathon",
    overview:
      "Crafted with precision and efficiency, the Rotaract Hackathon Website is more than just a participant portal—it's the primary platform for participant registration. Developed within a tight 24-hour timeframe, this project showcases swift execution and functionality. The raw charm of the UI complements the fast-paced nature of the hackathon, making it a functional digital space that emphasizes the urgency and innovation of the event. The website ensures a seamless experience for potential participants, allowing them to register effortlessly.",
    skills: [
      {
        name: "HTML",
        image: htmlImage,
        largeImage: 35,
        smallImage: 30,
      },
      {
        name: "CSS",
        image: cssImage,
        largeImage: 35,
        smallImage: 30,
      },
      {
        name: "JavaScript",
        image: javascriptImage,
        largeImage: 35,
        smallImage: 30,
      },
    ],
    keyFeatures: [
      [
        "Swift Execution",
        "Developed participant registration portals in 24 hours with a Figma reference.",
      ],
      [
        "Responsive Design",
        "Ensured basic responsiveness for seamless access on various devices.",
      ],
      [
        "Event Information",
        "Provided participants with essential information about the hackathon event.",
      ],
    ],
    screenshots: [
      { image: walletSync1, largeImage: 250, smallImage: 148 },
      { image: walletSync2, largeImage: 250, smallImage: 148 },
      { image: walletSync3, largeImage: 250, smallImage: 148 },
      { image: walletSync4, largeImage: 250, smallImage: 148 },
      { image: walletSync5, largeImage: 250, smallImage: 148 },
      { image: walletSync6, largeImage: 250, smallImage: 148 },
      { image: walletSync7, largeImage: 250, smallImage: 148 },
      { image: walletSync8, largeImage: 250, smallImage: 148 },
    ],
    githubLink: "https://github.com/NaveenAkash-K/Rotaract",
  },
  {
    id: "failure_prediction",
    title: "Aircraft Engine Failure Prediction",
    overview:
      "Revolutionizing the field of predictive maintenance, the Aircraft Engine Failure Prediction project leverages machine learning and PyScript to analyze real-time factors such as temperature, runtime, and speed. By predicting potential failures in aircraft engines, this project plays a crucial role in enhancing safety in aviation. The integration of machine learning technology showcases a commitment to innovation and the application of advanced techniques to real-world challenges, ensuring safer skies for everyone.",
    skills: [
      {
        name: "Firebase",
        image: firebaseImage,
        largeImage: 35,
        smallImage: 30,
      },
    ],
    keyFeatures: [
      [
        "Predictive Maintenance",
        "Utilize machine learning to analyze real-time factors for aviation safety.",
      ],
      [
        "Enhanced Safety Measures",
        "Implement insights for safer skies through predictive maintenance.",
      ],
      [
        "Data Integration",
        "Integrate with aircraft engine data sources for comprehensive analysis.",
      ],
      [
        "User Alerts",
        "Implement user alerts for potential engine issues based on predictive models.",
      ],
      [
        "Historical Data Analysis",
        "Analyze historical data to improve predictive maintenance algorithms.",
      ],
    ],
    screenshots: [
      { image: walletSync1, largeImage: 250, smallImage: 148 },
      { image: walletSync2, largeImage: 250, smallImage: 148 },
      { image: walletSync3, largeImage: 250, smallImage: 148 },
      { image: walletSync4, largeImage: 250, smallImage: 148 },
      { image: walletSync5, largeImage: 250, smallImage: 148 },
      { image: walletSync6, largeImage: 250, smallImage: 148 },
      { image: walletSync7, largeImage: 250, smallImage: 148 },
      { image: walletSync8, largeImage: 250, smallImage: 148 },
    ],
    githubLink: "https://github.com/NaveenAkash-K/HackIT",
  },
];