import { FC } from 'react';
import { OfferSlideProps } from './OfferSlide.props';
import cn from 'classnames';
import Image from 'next/image';
import Rect from 'public/rect.svg';

export const OfferSlide: FC<OfferSlideProps> = ({
  id,
  bg,
  image,
  quote,
  title,
  titles,
  text,
  slideTo,
}) => {
  return (
    <div className={cn('w-full h-full relative')}>
      <Image
        src={bg}
        alt={title}
        fill
        quality={100}
        sizes="100vw"
        className="absolute top-0 left-0 bottom-0 right-0 -z-10 object-cover object-center"
      />
      <div className="container pt-[54px]">
        <h2 className="uppercase text-title pb-6 md:mb-0 md:text-titleMd xl:text-titleXl whitespace-nowrap">
          <span className="font-medium">we</span>offer
        </h2>
        <div className="font-thin text-[43px] text-right pb-4">
          {id.toString().padStart(2, '0')}/
          <span className="opacity-20">
            {titles.length.toString().padStart(2, '0')}
          </span>
        </div>
        <div className="w-full h-[213px] relative">
          <Image
            src={image}
            alt={title}
            fill
            quality={100}
            sizes="100vw"
            className="object-cover object-center pb-2"
          />
        </div>
        <p className="text-xs font-extralight pb-6 text-right">{quote}</p>
        <div className="h-[320px] flex flex-col justify-between pb-[56px]">
          <ul className="pb-[34px] flex flex-col gap-4">
            {titles.map((titleItem, index) => (
              <li
                key="title"
                className={cn(
                  'flex flex-row items-center gap-4 uppercase text-xl leading-[17px]',
                  titleItem === title ? 'font-medium' : 'font-extralight',
                )}
                onClick={() => slideTo(index + 1)}
              >
                {titleItem === title ? (
                  <Rect className="w-[6px] h-[6px]" />
                ) : null}
                {titleItem}
              </li>
            ))}
          </ul>
          <p className="text-sm font-extralight">{text}</p>
        </div>
      </div>
    </div>
  );
};
