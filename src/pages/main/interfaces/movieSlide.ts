export interface MovieSlideProps {
  imgSrc?: string;
  description: string;
  actors: string[];
  year: string;
  rate: number;
  onClick?: () => void;
}
