import { BsBootstrapFill } from "react-icons/bs";
import { DiIllustrator, DiJavascript, DiPhotoshop } from "react-icons/di";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiExpress, SiMongodb } from "react-icons/si";
import { Skill } from "../models/Skill";

export const skillIcons = [
  FaHtml5,
  FaCss3Alt,
  DiJavascript,
  FaNodeJs,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  FaReact,
  RiTailwindCssFill,
  BsBootstrapFill,
  FaGitAlt,
  FaGithub,
  FiFigma,
  DiPhotoshop,
  DiIllustrator,
];

export const skills: Skill[] = [
  {
    heading: "Programmeringsspråk",
    skills: ["HTML", "CSS", "SCSS", "JavaScript", "TypeScript"],
  },
  {
    heading: "API-utveckling",
    skills: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    heading: "Ramverk",
    skills: ["Next.js", "React", "Tailwind CSS", "Bootstrap"],
  },
  {
    heading: "Verktyg",
    skills: ["Git", "GitHub", "Figma"],
  },
  {
    heading: "Övrigt",
    skills: [
      "Responsiv design",
      "Agil utveckling",
      "UX",
      "Grafisk design",
      "Photoshop",
      "Illustrator",
      "Indesign",
    ],
  },
  {
    heading: "Språk",
    skills: ["Svenska (modersmål)", "Engelska"],
  },
  {
    heading: "Körkort",
    skills: ["B"],
  },
];
