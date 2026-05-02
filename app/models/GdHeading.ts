import { JSX, SVGProps } from "react"

export type GdHeading = {
    href: string;
    main: (props: SVGProps<SVGSVGElement>) => JSX.Element;
    hover: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}