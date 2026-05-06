import { IconType } from "react-icons"

type IconComponentProps = {
    reactIcon: IconType;
}

export const IconComponent = ({reactIcon: Icon}: IconComponentProps) =>
    <Icon className="w-8 h-8 m-5 hover:scale-110 duration-150 fill-foreground" />