import Link from "next/link";
import { IconType } from "react-icons";
import { IconComponent } from "./IconComponent";

type IconProps = {
  href: string;
  reactIcon: IconType;
}

export const LinkComponent = ({href, reactIcon }: IconProps) => 
  <Link href={href}>
    <IconComponent reactIcon={reactIcon}/>
  </Link>