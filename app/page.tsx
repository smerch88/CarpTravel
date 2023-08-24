import { Career } from '@/page-components/Career';
import { Gallery } from '@/page-components/Gallery';
import { Header } from '@/page-components/Header';
import { Hero } from '@/page-components/Hero';
import { Services } from '@/page-components/Services';
import { WhoWeAre } from '@/page-components/WhoWeAre';
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WhoWeAre />
      <Services />
      <Career />
      <Gallery />
    </>
  );
}
