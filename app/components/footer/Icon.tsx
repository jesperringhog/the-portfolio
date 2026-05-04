import Link from "next/link";
import { IconType } from "react-icons";

type IconProps = {
  href: string;
  reactIcon: IconType;
  className?: string;
}

export const IconComponent = ({href, reactIcon: Icon, className }: IconProps) => 
  <Link href={href}>
    <Icon className={`w-8 h-8 m-5 hover:scale-110 duration-150 fill-black ${className ?? ""}`} />
  </Link>