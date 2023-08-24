'use client';

import { FormContact } from '@/components/common/FormContact';
import { Section } from '@/components/common/Section';
import { socials } from '@/utils/staticData/sociall';

export const Contacts = () => {
  return (
    <Section
      className="bg-contacts md:bg-contactsMd xl:bg-contactsXl bg-cover contactsGoodImg relative bg-center"
      id="#contacts"
    >
      <div className="container">
        <h2 className="uppercase text-title md:text-titleMd xl:text-titleXl whitespace-nowrap mb-9">
          Contact <span className="font-medium">US</span>
        </h2>
        <div className="xl:flex flex-row">
          <div className="md:flex md:flex-row xl:flex-col">
            <div>
              <div className="text-sm xl:text-[18px] md:text-base flex flex-row gap-5 mb-6 xl:mb-16">
                <div className="flex flex-col ml-[42px] md:ml-[64px] xl:ml-[141px]">
                  <a href="tel:+380981234567" className="smOnly:leading-[24px]">
                    +38 (098) 12 34 567
                  </a>
                  <a href="tel:+380981234567" className="smOnly:leading-[24px]">
                    +38 (098) 12 34 567
                  </a>
                </div>
                <p className="text-[12px] font-extralight">Phone number</p>
              </div>
              <div className="text-sm xl:text-[18px] md:text-base flex flex-row gap-5 ml-4 items-center mb-6 md:ml-[34px] xl:mb-[124px] xl:ml-[107px]">
                <a
                  href="mailto:support@carptravel.com"
                  className="smOnly:leading-[24px]"
                >
                  support@carptravel.com
                </a>
                <p className="text-[12px] font-extralight">E-mail</p>
              </div>
            </div>
            <div className="text-sm xl:text-[18px] md:text-base flex flex-row gap-5 mb-6 xl:flex-row-reverse">
              <p className="text-[12px] font-extralight ml-[127px] whitespace-nowrap md:ml-[90px] xl:ml-0 xl:mr-[30px]">
                Follow us
              </p>
              <ul className="flex flex-col smOnly:leading-[24px] xl:text-right">
                {socials.map(social => (
                  <li key={social.text}>
                    <a
                      href={social.link}
                      className="hover:underline duration-300 transition-all"
                    >
                      {social.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <FormContact />
        </div>
      </div>
    </Section>
  );
};
