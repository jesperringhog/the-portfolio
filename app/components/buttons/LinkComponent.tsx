import Link from "next/link";
import { IconType } from "react-icons";
import { IconComponent } from "./IconComponent";

type IconProps = {
  href: string;
  reactIcon: IconType;
  iconClass?: string;
}

export const LinkComponent = ({href, reactIcon, iconClass }: IconProps) => 
  <Link href={href} target="_blank" rel="noopener noreferrer">
    <IconComponent reactIcon={reactIcon} iconClass={iconClass}/>
  </Link>