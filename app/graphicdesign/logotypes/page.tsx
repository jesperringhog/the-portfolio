import { GdSvgs } from "@/app/components/gdProjects/GdSvgs";
import { logotypes } from "@/app/components/gdProjects/logos";
import { GdProjectSvg } from "@/app/models/GdProject";

type LogotypesProps = {
  svgs: GdProjectSvg[];
}

export default function Logotypes({svgs}: LogotypesProps) {
    return <GdSvgs svgs={logotypes} containerClass="py-10" logoClass="size-50"/>
}