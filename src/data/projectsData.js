// src/data/projectsData.js

const projects = [
  {
    title: "Workspace Booking System",
    techStack: ["ReactJS", "NodeJS", "SQL", "Tailwind CSS"],
    description:
      "A full-stack platform enabling users to book and cancel desks or meeting rooms efficiently. Features real-time availability checks and automated email confirmation system.",
    link: {
      github: "Link to Repo",
      live: "Link to Live Demo (if available)",
    },
  },
  {
    title: "AutoTrade Management System",
    techStack: ["Java", "SQL"],
    description:
      "A comprehensive used car trading system supporting core business functions: purchasing, sales processing, customer history tracking, and automated reporting.",
    link: {
      github: "Link to Repo",
    },
  },
  {
    title: "Smart Car Model (IoT, Arduino, C++)",
    techStack: ["C++", "Arduino", "IoT", "C"],
    description:
      "A mobile-controlled 4-wheel drive (4WD) car model with sensor-based collision prevention, detecting obstacles to avoid accidents.",
    link: {
        github: "Link to Repo",
    },
  },
  {
    title: "Flappy Bird Game (Blockchain)",
    techStack: ["Solidity", "ReactJS", "JavaScript", "HTML/CSS"],
    description:
      "A decentralized application (dApp) where players earn tokens to purchase NFTs or in-game skins. Secured by Solidity smart contracts for transparent and immutable transactions.",
    link: {
      github: "Link to Repo",
    },
  },
];

export default projects; // <--- สำคัญมาก! ต้องมีบรรทัดนี้