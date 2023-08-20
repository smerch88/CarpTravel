'use client';

import { BtnLink } from '@/components/button/BtnLink';
import { MenuModal } from '@/components/common/MenuModal';
import { Logo } from '@/components/typography/Logo';
import { useState } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="absolute top-0 left-0 w-full pt-6 z-10">
      <div className="container">
        <div className="flex flex-row justify-between items-center">
          <Logo />
          <button
            className="text-sm tracking-[1.4px] md:hidden"
            onClick={() => setIsOpen(true)}
          >
            MENU
          </button>
          <nav className="hidden md:block">
            <ul className="flex flex-row gap-6 text-center [&>li]:cursor-pointer">
              {/* TODO: Add links and smooth BtnLink(lib) */}
              <li>
                <BtnLink href="#about" variant="header" scroll>
                  About
                </BtnLink>
              </li>
              <li>
                <BtnLink href="#services" variant="header" scroll>
                  Services
                </BtnLink>
              </li>
              <li>
                <BtnLink href="#career" variant="header" scroll>
                  Career
                </BtnLink>
              </li>
              <li>
                <BtnLink href="#gallery" variant="header" scroll>
                  Gallery
                </BtnLink>
              </li>
              <li>
                <BtnLink href="#contacts" variant="header" scroll>
                  Contacts
                </BtnLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <MenuModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};
