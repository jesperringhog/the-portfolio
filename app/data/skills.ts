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
import { SkillCategory } from "../models/Skill";

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

export const skills: SkillCategory[] = [
  {
    heading: "Frontend",
    skills: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS / SCSS", icon: FaCss3Alt },
      { name: "JavaScript / TypeScript", icon: DiJavascript },
    ],
  },
  {
    heading: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    heading: "Ramverk",
    skills: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: FaReact },
      { name: "Tailwind CSS", icon: RiTailwindCssFill },
    ],
  },
  {
    heading: "Verktyg",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Figma", icon: FiFigma },
    ],
  },
  {
    heading: "Övrigt",
    skills: [
      { name: "Responsiv design" },
      { name: "Agil utveckling" },
      { name: "UX" },
      { name: "Grafisk design" },
      { name: "Indesign" },
      { name: "Photoshop", icon: DiPhotoshop },
      { name: "Illustrator", icon: DiIllustrator },
    ],
  },
  {
    heading: "Språk",
    skills: [{ name: "Svenska (modersmål)" }, { name: "Engelska" }],
  },
  {
    heading: "Körkort",
    skills: [{ name: "B" }],
  },
];
