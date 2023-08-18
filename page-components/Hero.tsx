import { BtnLink } from '@/components/button/BtnLink';
import { Section } from '@/components/common/Section';

export const Hero = () => {
  return (
    <Section className="bg-hero md:bg-heroMd xl:bg-heroXl bg-cover xl:pt-[106px] md:pt-[122px] pt-[105px]">
      <div className="container text-subTitle">
        <div className="md:grid md:grid-cols-2 md:gap-12">
          <h2 className="max-w-[130px] ml-auto mb-6 md:hidden">
            <span className="font-medium w-full ">7</span>
            DAYS
            <span className="text-subTitleQuot w-full block">JOURNEY</span>
          </h2>
          <div className="">
            <h1 className="uppercase text-title mb-6">
              <span className="font-medium">Uncover</span> Carpathian’s Secrets
            </h1>
            <p className="max-w-[157px] mb-6 text-quot">
              Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake /
              Bukovel
            </p>
          </div>
          <div>
            <h2 className="max-w-[130px] ml-auto mb-6 hidden md:block">
              <span className="font-medium w-full ">7</span>
              DAYS
              <span className="text-subTitleQuot w-full block">JOURNEY</span>
            </h2>
            <p className="text-sm font-extralight mb-6">
              We offer you unforgettable trips to the most beautiful parts of
              the Carpathians. Enjoy stunning views, exciting expeditions, and
              the best service!
            </p>
            <BtnLink href="#" scroll className="w-full block">
              JOIN NOW
            </BtnLink>
          </div>
        </div>
      </div>
    </Section>
  );
};
