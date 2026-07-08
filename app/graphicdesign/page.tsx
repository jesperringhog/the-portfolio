import { characters } from "./characters";
import { GdPngs } from "./GdPngs";
import { GdSvgs } from "./GdSvgs";
import { logotypes } from "./logos";
import { nothing } from "../data/nothing";

export default function GraphicDesign() {
  return (
    <div className="max-w-400 lg:mt-5 flex flex-col lg:gap-5">
      <GdSvgs
        variant="logotypes"
        containerClass="xl:px-30 bg-project"
        polygonClass="bg-primary lg:rounded-t-xl"
        logoClass="hover:text-project hover:bg-foreground"
        modalContainerClass="bg-foreground"
        modalLogoClass="text-project"
        modalTitleClass="text-foreground bg-project"
        iconClass="text-project"
      >
        Logotype
      </GdSvgs>
      <GdSvgs
        variant="characters"
        containerClass="xl:grid-cols-5 bg-foreground"
        polygonClass="text-project bg-foreground lg:rounded-t-xl"
        logoClass="text-project hover:text-foreground hover:bg-project"
        modalContainerClass="bg-project"
        modalLogoClass="text-foreground"
        modalTitleClass="text-project bg-foreground"
        iconClass="text-foreground"
      >
        Character
      </GdSvgs>
      <GdPngs pngs={nothing} />
    </div>
  );
}
