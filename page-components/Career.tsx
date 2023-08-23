import { FormCareer } from '@/components/common/FormCareer/FormCareer';
import { Section } from '@/components/common/Section';
import { text } from '@/utils/staticData/careerText';

export const Career = () => {
  return (
    <Section className="pt-0 pb-0">
      <div className="flex flex-col">
        <div className="bg-career py-14 bg-center bg-cover">
          <div className="container">
            <div className="md:flex md:flex-row md:justify-between">
              <h2 className="uppercase text-title mb-6 md:text-titleMd xl:text-titleXl whitespace-nowrap">
                Choose <span className="font-medium"> US</span>
              </h2>
              <p className="text-sm leading-[20px] font-extralight smOnly:mb-9 max-w-[179px] smOnly:ml-auto md:max-w-[221px]">
                Your chance to join our passionate team in Carpathian tourism.
                Seeking talented professionals to share our common mission.
              </p>
            </div>
            <h3 className="uppercase text-[30px] font-extralight max-w-[179px] smOnly:ml-auto smOnly:mb-9">
              Why us ?
            </h3>
            <div className="max-w-[181px] text-xs leading-[20px] text-right flex flex-col gap-4">
              {text.map(item => (
                <div key={item.title}>
                  <h4 className="text-sm mb-2">{item.title}</h4>
                  <p className="font-extralight">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-career py-14 bg-center bg-cover">
          <div className="container">
            <p className="text-sm leading-[20px] font-extralight smOnly:mb-6 max-w-[179px] smOnly:ml-auto md:max-w-[221px]">
              {`Don't miss your opportunity!`}
              <span className="block">
                Fill out the form right now and join our team!
              </span>
            </p>
            <FormCareer />
          </div>
        </div>
      </div>
    </Section>
  );
};
