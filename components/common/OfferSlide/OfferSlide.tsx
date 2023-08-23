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
      <div className="container pt-[54px] md:pt-16 xl:pt-[104px]">
        <div className="md:flex md:flex-row md:justify-between md:pb-6 xl:pb-5 xl:justify-normal xl:gap-[162px]">
          <h2 className="uppercase text-title smOnly:pb-6 md:mb-0 md:text-titleMd xl:text-titleXl whitespace-nowrap">
            we <span className="font-medium">offer</span>
          </h2>
          <div className="font-thin text-[43px] md:text-titleMd text-right smOnly:pb-4 xl:text-titleXl">
            {id.toString().padStart(2, '0')}/
            <span className="opacity-20">
              {titles.length.toString().padStart(2, '0')}
            </span>
          </div>
        </div>
        <div className="md:flex md:flex-row md:gap-5 pb-[56px] md:pb-[64px] xl:">
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
          <div className="w-full h-[320px] xl:h-[429px] flex flex-col justify-between md:max-w-[221px] md:h-[370px] xl:max-w-[605px]">
            <ul className="pb-[34px] md:pb-0 flex flex-col gap-4 xl:pb-[104px]">
              {titles.map((titleItem, index) => (
                <li
                  key={titleItem}
                  className={cn(
                    'flex flex-row items-center gap-4 text-xl md:text-[22px] md:leading-[18px] leading-[17px] md:gap-2 xl:max-w-[500px] xl:w-full xl:flex xl:flex-row xl:justify-between cursor-pointer hover:opacity-100 duration-300',
                    titleItem === title
                      ? 'font-medium'
                      : 'font-extralight opacity-50',
                  )}
                  onClick={() => slideTo(index + 1)}
                >
                  <div className="flex flex-row gap-4 md:gap-2 items-center">
                    {titleItem === title ? (
                      <Rect className="w-[6px] h-[6px]" />
                    ) : null}
                    <span className="uppercase">{titleItem}</span>
                  </div>
                  {titleItem === title ? (
                    <p className="text-xs font-extralight hidden xl:block md:leading-[24px] tracking-[2.4px] capitalize">
                      {quote}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
            <p className="text-xs font-extralight hidden mdOnly:block md:leading-[24px]">
              {quote}
            </p>
            <p className="text-sm font-extralight md:text-[13px] xl:max-w-[293px] xl:ml-auto xl:text-lg xl:leading-[24px]">
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
