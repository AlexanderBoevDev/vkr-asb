import { SVGProps } from "react";

export type IconSvgProps = Omit<SVGProps<SVGSVGElement>, "width" | "height"> & {
  size?: number;
  width?: number;
  height?: number;
  color?: string;
  stroke?: string;
};
