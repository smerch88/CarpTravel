export interface OfferSlideProps {
  id: number;
  bg: string;
  image: string;
  quote: string;
  title: string;
  titles: string[];
  text: string;
  slideTo: (id: number) => void;
}
