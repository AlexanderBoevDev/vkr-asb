import { IconSvgProps } from "@/types/svg-props";
import { ReactElement } from "react";

type IconComponent = (props: IconSvgProps) => ReactElement;

export interface Advantage {
  icon: IconComponent;
  title: string;
}

export interface AdvantagesProps {
  heading: string;
  subtitle: string;
  advantages: Advantage[];
}
