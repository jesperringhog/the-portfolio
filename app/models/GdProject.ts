import { JSX, SVGProps } from "react";

export type GdProjectPng = {
    src: string,
    alt: string
}

export type GdProjectSvgProps = SVGProps<SVGSVGElement> & {
    showHoverColors?: boolean;
}

export type GdProjectSvg = (props: GdProjectSvgProps) => JSX.Element;

export type GdProjectItem = {
    component: GdProjectSvg;
    title: string;
}