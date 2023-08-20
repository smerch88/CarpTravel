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
      <div className="container pt-[54px] md:pt-16">
        <div className="md:flex md:flex-row md:justify-between md:pb-6 xl:pb-5">
          <h2 className="uppercase text-title smOnly:pb-6 md:mb-0 md:text-titleMd xl:text-titleXl whitespace-nowrap">
            <span className="font-medium">we</span>offer
          </h2>
          <div className="font-thin text-[43px] md:text-titleMd text-right smOnly:pb-4 xl:text-titleXl">
            {id.toString().padStart(2, '0')}/
            <span className="opacity-20">
              {titles.length.toString().padStart(2, '0')}
            </span>
          </div>
        </div>
        <div className="md:flex md:flex-row md:gap-5 pb-[56px] md:pb-[64px]">
          <div className="w-full h-[213px] relative md:h-[370px] xl:h-[429px]">
            <Image
              src={image}
              alt={title}
              fill
              quality={100}
              sizes="100vw"
              className="object-cover object-center smOnly:pb-2"
            />
          </div>
          <p className="text-xs font-extralight pb-6 text-right md:hidden">
            {quote}
          </p>
          <div className="h-[320px] xl:h-[429px] flex flex-col justify-between md:max-w-[221px] md:h-[370px] xl:max-w-[605px]">
            <ul className="pb-[34px] md:pb-0 flex flex-col gap-4">
              {titles.map((titleItem, index) => (
                <li
                  key={titleItem}
                  className={cn(
                    'flex flex-row items-center gap-4 uppercase text-xl md:text-[22px] md:leading-[18px] leading-[17px] md:gap-2',
                    titleItem === title
                      ? 'font-medium'
                      : 'font-extralight opacity-50',
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
            <p className="text-xs font-extralight hidden mdOnly:block md:leading-[24px]">
              {quote}
            </p>
            <p className="text-sm font-extralight md:text-[13px]">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
