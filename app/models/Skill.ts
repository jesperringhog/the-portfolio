import { IconType } from "react-icons";

type Skill = {
  name?: string;
  icon?: IconType;
}

export type SkillCategory = {
  heading: string;
  skills: Skill[];
};