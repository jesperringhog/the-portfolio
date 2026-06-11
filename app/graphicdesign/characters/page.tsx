import { characters } from "@/app/components/gdProjects/characters";
import { GdSvgs } from "@/app/components/gdProjects/GdSvgs";

export default function Characters() {
  return (
    <GdSvgs
      svgs={characters}
      containerClass="xl:grid-cols-5"
    >
      Character
    </GdSvgs>
  );
}
