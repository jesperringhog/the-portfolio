import { GdHeading } from "@/app/models/GdHeading";
import SvgHeading01 from "./Heading01";
import SvgHeading03 from "./Heading03";
import SvgHeading05 from "./Heading05";
import SvgHeading02 from "./Heading02";
import SvgHeading04 from "./Heading04";
import SvgHeading06 from "./Heading06";

export { default as Heading01 } from "./Heading01";
export { default as Heading02 } from "./Heading02";
export { default as Heading03 } from "./Heading03";
export { default as Heading04 } from "./Heading04";
export { default as Heading05 } from "./Heading05";
export { default as Heading06 } from "./Heading06";

export const gdHeadings: GdHeading[] = [
    {href: "/graphicdesign/characters", main: SvgHeading03, hover: SvgHeading04},
    {href: "/graphicdesign/logotypes", main: SvgHeading01, hover: SvgHeading02},
    {href: "/graphicdesign/nothing", main: SvgHeading05, hover: SvgHeading06},
]