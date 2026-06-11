import Link from "next/link";
import { IconType } from "react-icons";
import { IconComponent } from "./IconComponent";

type IconProps = {
  href: string;
  reactIcon: IconType;
  hoverClass?: string;
}

export const LinkComponent = ({href, reactIcon, hoverClass }: IconProps) => 
  <Link href={href} target="_blank" rel="noopener noreferrer">
    <IconComponent reactIcon={reactIcon} hoverClass={hoverClass}/>
  </Link>