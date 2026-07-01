import { IconType } from "react-icons"

type IconComponentProps = {
    reactIcon: IconType;
    extClass?: string;
}

export const IconComponent = ({reactIcon: Icon, extClass}: IconComponentProps) =>
    <Icon className={`w-8 h-8 m-5 hover:scale-110 duration-150 ${extClass}`} />