import { dreamproduction, servoy, continental } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Servoy Software Developer",
    company_name: "Servoy",
    icon: servoy,
    iconBg: "#accbe1",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using Servoy, Javascript, HTML, CSS, Sql and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Junior Software Developer",
    company_name: "Dream Production",
    icon: dreamproduction,
    iconBg: "#fbc3bc",
    date: "Jul 2022 - Aug 2024",
    points: [
      "Developing and maintaining web applications using Javascript, HTML, CSS, Sql and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Continental Automotive ",
    icon: continental,
    iconBg: "#b7e4c7",
    date: "Jan 2022 - Jul 2022",
    points: [
      "Developing and maintaining web applications using PHP, Javascript, HTML, CSS, Sql and other related technologies.",
      "Developing and maintaining automotive applications using C embedded.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Testing code to assure efficient coverage",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/bogdiy97",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/bogdan-robu-ab7059195",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Virtual agenda",
    description: "Virtual Agenda using react",
    link: "https://github.com/bogdiy97/virtual-agenda",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "2d Pixi game",
    description: "A 2d game using pixi.js",
    link: "https://github.com/bogdiy97/pixi-shapes",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "CV Bogdan Robu",
    description: "My CV using react and tailwind css",
    link: "https://github.com/bogdiy97/CV-react-tailwind",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "CRUD table",
    description: "Create, read, update, delete table using react",
    link: "https://github.com/bogdiy97/CRUD-table",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "React accordion wrapper with react",
    description: "Basic accordion wrapper",
    link: "https://github.com/bogdiy97/accordion-wrapper",
  },
];
