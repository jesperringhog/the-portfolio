import { JSX, SVGProps } from "react";

export type GdProjectPng = {
    src: string,
    alt: string
}

export type GdProjectSvg = (props: SVGProps<SVGSVGElement>) => JSX.Element;

export type GdProjectItem = {
    component: GdProjectSvg;
    title: string;
}