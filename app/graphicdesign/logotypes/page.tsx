import { GdSvgs } from "@/app/components/gdProjects/GdSvgs";
import { logotypes } from "@/app/components/gdProjects/logos";

export default function Logotypes() {
  return (
    <GdSvgs
      svgs={logotypes}
      containerClass="xl:px-30"
    >
      Logotype
    </GdSvgs>
  );
}
