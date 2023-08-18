import LogoImg from '@/public/logo/logo.svg';
import { routes } from '@/utils/routes';
import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import { LogoProps } from './Logo.props';

export const Logo: FC<LogoProps> = ({ width = 59, height = 21, className }) => {
  return (
    <Link
      href={routes.HOME}
      className={cn(
        'block hover:outline-primary focus:outline-primary',
        className,
      )}
    >
      <LogoImg
        width={width}
        height={height}
        aria-label="Логотип сайту"
        className="mb-[2px]"
      />
      <p className="font-logo text-logo">CarpTravel</p>
    </Link>
  );
};
