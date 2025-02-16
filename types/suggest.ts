import { IconSvgProps } from "@/types/svg-props";
import { ReactElement } from "react";

type IconComponent = (props: IconSvgProps) => ReactElement;

export interface SuggestItem {
  icon: IconComponent;
  heading: string;
  description: string;
}

export interface SuggestProps {
  heading: string;
  subtitle: string;
  items: SuggestItem[];
}