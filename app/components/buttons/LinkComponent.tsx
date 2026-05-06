import Link from "next/link";
import { IconType } from "react-icons";
import { IconComponent } from "./IconComponent";
import { FaExternalLinkAlt } from "react-icons/fa";

type IconProps = {
  href: string;
  reactIcon: IconType;
}

export const LinkComponent = ({href, reactIcon }: IconProps) => 
  <Link href={href} target="_blank" rel="noopener noreferrer">
    <IconComponent reactIcon={reactIcon}/>
  </Link>