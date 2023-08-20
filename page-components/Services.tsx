'use client';

import { OfferSlide } from '@/components/common/OfferSlide';
import { Section } from '@/components/common/Section';
import { slides } from '@/utils/staticData/slidesOffer';
import { useState } from 'react';
import { Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Services = () => {
  const [swiperRef, setSwiperRef] = useState<typeof Swiper | null>(null);

  const slideTo = (index: number) => {
    if (swiperRef) {
      (swiperRef as any).slideTo(index - 1, 0);
    }
  };

  const handleSwiper = (swiper: any) => {
    setSwiperRef(swiper);
  };

  return (
    <Section className="bg-black relative pt-0 pb-0 md:pt-0 md:pb-0 xl:pt-0 xl:pb-0">
      <Swiper
        onSwiper={handleSwiper}
        modules={[Autoplay, EffectFade]}
        className="absolute inset-x-0 inset-y-0 z-10 w-full h-full"
        wrapperTag="ul"
        grabCursor={false}
        loop={true}
        effect={'fade'}
        allowTouchMove={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {slides.map(slide => (
          <SwiperSlide
            key={slide.id}
            tag="li"
            className="m-0 w-full h-full bg-cover"
          >
            <OfferSlide
              slideTo={slideTo}
              id={slide.id}
              bg={slide.bg}
              image={slide.image}
              quote={slide.quote}
              title={slide.title}
              titles={slide.titles}
              text={slide.text}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};
