export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  images: string[];
  link: string;
}

export interface CasesSliderProps {
  projects: Project[];
}
