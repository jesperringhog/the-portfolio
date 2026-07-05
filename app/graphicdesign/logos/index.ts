import { GdProjectItem } from "@/app/models/GdProject";
import SvgLogotype01 from "./Logotype01";
import SvgLogotype02 from "./Logotype02";
import SvgLogotype03 from "./Logotype03";
import SvgLogotype04 from "./Logotype04";
import SvgLogotype05 from "./Logotype05";
import SvgLogotype06 from "./Logotype06";
import SvgLogotype07 from "./Logotype07";
import SvgLogotype08 from "./Logotype08";

export { default as Logotype01 } from "./Logotype01";
export { default as Logotype02 } from "./Logotype02";
export { default as Logotype03 } from "./Logotype03";
export { default as Logotype04 } from "./Logotype04";
export { default as Logotype05 } from "./Logotype05";
export { default as Logotype06 } from "./Logotype06";
export { default as Logotype07 } from "./Logotype07";
export { default as Logotype08 } from "./Logotype08";

export const logotypes: GdProjectItem[] = [
    {component: SvgLogotype01, title: "Retroresans vänner"},
    {component: SvgLogotype02, title: "Öppna världar"},
    {component: SvgLogotype03, title: "TV-spelspodden"},
    {component: SvgLogotype04, title: "Loading"},
    {component: SvgLogotype05, title: "Twotide"},
    {component: SvgLogotype06, title: "Göteborg E-sport"},
    {component: SvgLogotype07, title: "Isgrens fisk"},
    {component: SvgLogotype08, title: "AJ Allservice"},
]