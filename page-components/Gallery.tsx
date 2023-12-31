'use client';

import { Section } from '@/components/common/Section';
import Image from 'next/image';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { gallerySlides } from '@/utils/staticData/gallerySlides';

export const Gallery = () => {
  const [firstSlide, setFirstSlide] = useState(1);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (gallerySlides.length > 0) {
      setFirstSlide(0);
    }
  }, [gallerySlides]);
  return (
    <Section
      id="#gallery"
      className="bg-gallery md:bg-galleryMd xl:bg-galleryXl bg-cover galleryGoodImg relative bg-center"
    >
      <div className="container">
        <h2 className="uppercase text-title md:text-titleMd xl:text-titleXl whitespace-nowrap mb-6">
          OUR <span className="font-medium">GALLERY</span>
        </h2>
        <div className="md:hidden">
          <Swiper
            modules={[Autoplay]}
            className="h-[609px] flex gap-6"
            wrapperTag="ul"
            grabCursor={true}
            loop={true}
            speed={1000}
            direction="vertical"
            slidesPerView={3}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            spaceBetween={24}
            navigation={{
              prevEl: prevRef?.current,
              nextEl: nextRef?.current,
            }}
          >
            {gallerySlides.map((slide, index) => (
              <SwiperSlide
                key={`gallerySmall-${slide + index}`}
                tag="li"
                className="relative"
              >
                <Image
                  src={slide}
                  alt="slide"
                  fill
                  objectFit="cover"
                  className=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="smOnly:hidden relative">
          {prevRef.current && nextRef.current ? (
            <Swiper
              effect={'coverflow'}
              modules={[Autoplay, EffectCoverflow, Navigation]}
              className="flex gap-6 h-[294px] xl:h-[429px]"
              wrapperTag="ul"
              slidesPerView={3}
              spaceBetween={24}
              speed={1500}
              grabCursor={true}
              initialSlide={firstSlide}
              loop
              centeredSlides
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              breakpoints={{
                768: {
                  coverflowEffect: {
                    rotate: 0,
                    stretch: -44,
                    depth: 0,
                    modifier: 1,
                    scale: 0.35,
                  },
                },

                1280: {
                  coverflowEffect: {
                    rotate: 0,
                    stretch: -44,
                    depth: 0,
                    modifier: 1,
                    scale: 0.5,
                  },
                },
              }}
            >
              {gallerySlides.map((slide, index) => (
                <SwiperSlide key={`galleryBig-${slide + index}`} tag="li">
                  {({ isActive }) => (
                    <div
                      className={cn(
                        'relative right-[80px] w-[415px] xl:w-[606px] h-[294px] xl:h-[429px]',
                        isActive
                          ? 'right-[90px] xl:right-[95px]'
                          : 'opacity-75',
                      )}
                    >
                      <Image
                        src={slide}
                        alt={`gallery-${slide}`}
                        fill
                        objectFit="cover"
                        className=""
                      />
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          ) : null}
          <div className="absolute flex justify-between flex-row bottom-4 inset-x-9 xl:inset-x-52 text-[33px] font-thin z-10">
            <button
              className="hover:opacity-75 duration-300"
              aria-label="Previous Slide"
              ref={prevRef}
            >
              BACK
            </button>
            <button
              className="hover:opacity-75 duration-300"
              aria-label="Next Slide"
              ref={nextRef}
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};
