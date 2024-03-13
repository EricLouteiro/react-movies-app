export interface MovieSlideProps {
  title: string;
  imgSrc?: string;
  description: string;
  actors: string[];
  year: string;
  rate: number;
  onClick?: () => void;
}
