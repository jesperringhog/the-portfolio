import { IconType } from "react-icons"

type IconComponentProps = {
    reactIcon: IconType;
    iconClass?: string;
}

export const IconComponent = ({reactIcon: Icon, iconClass}: IconComponentProps) =>
    <Icon className={`w-8 h-8 m-5 hover:scale-110 duration-150 ${iconClass}`} />