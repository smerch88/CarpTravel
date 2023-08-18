import { Section } from '@/components/common/Section';

export const WhoWeAre = () => {
  return (
    <Section className="bg-who md:bg-whoMd xl:bg-whoXl bg-cover whoGoodImg relative">
      <div className="container">
        <h2 className="uppercase text-title mb-6 md:mb-0 md:text-titleMd xl:text-titleXl">
          WHO <span className="font-medium">WE ARE</span>
        </h2>
        <p className="max-w-[180px] mb-10 text-sm font-extralight md:mb-7 md:text-base leading-[20px] xl:text-lg xl:leading-[24px]">
          <span className="mb-5 block">
            {/* TODO: check if span in span is ok */}
            <span className="font-normal">a team of enthusiasts</span> who are
            fully committed to the mission of creating unforgettable and
            extraordinary trips to the most beautiful parts of the Carpathians.
            Our goal is not just to show you the natural wonders of the
            mountains, but to provide you with a deep immersion in their magical
            atmosphere.
          </span>
          {/* TODO: check if span in span is ok */}
          <span className="font-normal">We believe</span> that nature has the
          power to inspire, strengthen character and provide new perspectives.
          Therefore, each of our tours is aimed at unlocking your potential,
          enriching your spiritual world and creating unforgettable memories.
        </p>
        <p className="max-w-[180px] text-sm font-extralight md:mb-7 md:text-base leading-[20px] xl:text-lg xl:leading-[24px] mb-10 ml-auto tracking-[-0.14px]">
          <span className="block font-normal uppercase">From vacationers</span>
          <span className="block font-normal uppercase text-right">
            to active travelers
          </span>
          we have a tour for everyone.
        </p>
        <p className="mb-10 text-sm font-extralight md:mb-7 md:text-base leading-[20px] xl:text-lg xl:leading-[24px]">
          <span className="font-normal">We use methods</span> that are
          time-tested and proven. Our expert guides with in-depth knowledge of
          the Carpathian landscapes lead you safely through the mysteries of
          these mountains.
        </p>
      </div>
    </Section>
  );
};
