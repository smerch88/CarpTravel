import { FormCareer } from '@/components/common/FormCareer/FormCareer';
import { Section } from '@/components/common/Section';
import { text } from '@/utils/staticData/careerText';

export const Career = () => {
  return (
    <Section className="smOnly:pt-0 smOnly:pb-0 md:bg-careerMd md:bg-center md:bg-cover xl:bg-careerXl md:careerGoodImg">
      <div className="md:container ">
        <div className="flex flex-col">
          <div className="smOnly:bg-career smOnly:py-14 smOnly:bg-center smOnly:bg-cover smOnly:careerGoodImg">
            <div className="smOnly:container">
              <div className="md:flex md:flex-row md:justify-between xl:items-center">
                <h2 className="uppercase text-title smOnly:mb-6 md:text-titleMd xl:text-titleXl whitespace-nowrap">
                  Choose <span className="font-medium"> US</span>
                </h2>
                <p className="text-sm leading-[20px] font-extralight smOnly:mb-9 max-w-[179px] smOnly:ml-auto md:max-w-[221px] md:text-[13px] xl:max-w-[293px] xl:text-[18px] xl:leading-[24px]">
                  Your chance to join our passionate team in Carpathian tourism.
                  Seeking talented professionals to share our common mission.
                </p>
              </div>
              <h3 className="uppercase text-[30px] font-extralight max-w-[179px] smOnly:ml-auto smOnly:mb-9 md:hidden">
                Why us ?
              </h3>
              <div className="max-w-[181px] text-xs leading-[20px] text-right flex flex-col gap-4 md:hidden">
                {text.map(item => (
                  <div key={item.title}>
                    <h4 className="text-sm mb-2">{item.title}</h4>
                    <p className="font-extralight">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="smOnly:bg-career smOnly:py-14 smOnly:bg-center smOnly:bg-cover smOnly:careerGoodImg">
            <div className="smOnly:container">
              <div className="xl:flex xl:flex-row xl:mb-[11px]">
                <h3 className="uppercase text-[30px] font-extralight max-w-[179px] mb-14 ml-20 xl:mr-[333px] xl:ml-[135px] xl:mb-0 xl:text-[36px] xl:leading-[39px]">
                  Why us ?
                </h3>
                <p className="text-sm leading-[20px] font-extralight mb-6 max-w-[179px] smOnly:ml-auto md:max-w-[221px] xl:w-[290px] md:mb-8 md:text-[13px] xl:text-[18px] xl:leading-[24px] xl:max-w-[234px] xl:mb-[14px] xl:block hidden">
                  {`Don't miss your opportunity!`}
                  <span className="block">
                    Fill out the form right now and join our team!
                  </span>
                </p>
              </div>
              <div className="md:flex md:flex-row md:gap-5 xl:justify-between">
                <div className="smOnly:hidden">
                  <div className="max-w-[181px] text-xs leading-[20px] text-right flex flex-col gap-4 mOnly:mt-[5px] md:max-w-[231px] xl:max-w-max md:gap-6 md:leading-[20px] xl:gap-[21px]">
                    {text.map(item => (
                      <div
                        key={item.title}
                        className="xl:flex xl:flex-row xl:justify-between xl:gap-6"
                      >
                        <h4 className="text-sm mb-2 md:text-base whitespace-nowrap xl:max-w-[253px] xl:w-full xl:text-[18px] xl:leading-[24px] flex-shrink-0">
                          {item.title}
                        </h4>
                        <p className="font-extralight xl:w-[285px] xl:text-left flex-shrink-0">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="">
                  <p className="text-sm leading-[20px] font-extralight mb-6 max-w-[179px] smOnly:ml-auto md:max-w-[221px] xl:w-[290px] md:mb-8 md:text-[13px] xl:text-[18px] xl:leading-[24px] xl:max-w-[234px] xl:mb-[14px] xl:hidden">
                    {`Don't miss your opportunity!`}
                    <span className="block">
                      Fill out the form right now and join our team!
                    </span>
                  </p>
                  <FormCareer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
