import { characters } from "@/app/components/gdProjects/characters";
import { GdSvgs } from "@/app/components/gdProjects/GdSvgs";
import { GdProjectSvg } from "@/app/models/GdProject";

type CharactersProps = {
  svgs: GdProjectSvg[];
};

export default function Characters({ svgs }: CharactersProps) {
  return (
    <GdSvgs
      svgs={characters}
      containerClass="xl:grid-cols-5"
    >
      Character
    </GdSvgs>
  );
}
