import { IconSvgProps } from "@/types/svg-props";
import { ReactElement } from "react";

type IconComponent = (props: IconSvgProps) => ReactElement;

export interface StageItem {
  icon: IconComponent;
  title: string;
}

export interface StageByStageProps {
  heading: string;
  subtitle?: string;
  stage: StageItem[];
}
