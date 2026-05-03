import { GdPngs } from "@/app/components/gdProjects/GdPngs";
import { nothing } from "@/app/data/nothing";
import { GdProjectPng } from "@/app/models/GdProject";

type NothingProps = {
  pngs: GdProjectPng[];
}

export default function Nothing({pngs}: NothingProps) {
    return <GdPngs pngs={nothing} />
}