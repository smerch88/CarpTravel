import { BtnLink } from '@/components/button/BtnLink';
import { Section } from '@/components/common/Section';

export const Hero = () => {
  return (
    <Section className="bg-hero md:bg-heroMd xl:bg-heroXl bg-cover xl:pt-[106px] md:pt-[122px] pt-[105px] heroGoodImg relative z-[-1]">
      <div className="container">
        <div className="md:flex md:justify-between md:flex-row w-full xl:p-6">
          {/* Mobile only */}
          <h2 className="max-w-[130px] ml-auto mb-6 md:hidden text-subTitle">
            <span className="font-medium w-full ">7</span>
            DAYS
            <span className="text-subTitleQuot w-full block">JOURNEY</span>
          </h2>
          {/* End of Mobile only*/}
          <div className="md:flex md:flex-col md:justify-between">
            <h1 className="uppercase text-title mb-6 md:mb-0 md:text-titleMd xl:max-w-[646px] xl:text-titleXl max-w-[400px]">
              <span className="font-medium">Uncover</span> Carpathian’s Secrets
            </h1>
            <p className="max-w-[157px] mb-6 text-quot md:mb-0 md:max-w-[270px] md:text-quotMd xl:max-w-max xl:text-quotXl">
              Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake /
              Bukovel
            </p>
          </div>
          <div className="md:max-w-[230px] xl:max-w-[294px]">
            <h2 className="md:mb-14 hidden md:block text-subTitle md:text-subTitleMd xl:mb-[181px] xl:text-subTitleXl">
              <span className="font-medium w-full xl:mr-2">7</span>
              DAYS
              <span className="text-subTitleQuot w-full block md:text-subTitleQuotMd xl:text-subTitleQuotXl">
                JOURNEY
              </span>
            </h2>
            <p className="text-sm font-extralight mb-6 md:mb-7 md:text-base	leading-[20px] text-justify xl:text-lg xl:leading-[24px]">
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
