'use client';

import Link, { LinkProps } from 'next/link';
import { Link as Scroll } from 'react-scroll';
import cn from 'classnames';

import { BtnLinkProps } from './BtnLink.props';
import { FC } from 'react';

export const BtnLink: FC<BtnLinkProps & LinkProps> = ({
  variant = 'button',
  disabled = false,
  href,
  children,
  scroll,
  className,
  onClick,
  ...props
}) => {
  const disabledProps = disabled
    ? { role: 'link', 'aria-disabled': disabled }
    : {};

  if (scroll) {
    return (
      <Scroll
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        onClick={onClick}
        to={href}
        smooth={true}
        offset={-50}
        duration={100}
        className={cn(
          {
            ['text-lg leading-1 font-bold py-[18px] bg-primary/10 relative borderedBtn hover:bg-primary/20 duration-300 transition-all text-center']:
              variant == 'button',
            ['text-sm leading-normal tracking-[1.4px]']: variant == 'header',
          },
          className,
        )}
      >
        {variant == 'button' ? (
          <span className="borderedBtnSpan">{children}</span>
        ) : (
          <>{children}</>
        )}
      </Scroll>
    );
  }

  return (
    <Link legacyBehavior href={href} {...disabledProps}>
      <a
        className={cn(
          'text-lg leading-[48px] font-bold py-[18px] px-16 bg-primary/10 relative borderedBtn hover:bg-primary/20 duration-300 transition-all',
          className,
        )}
        {...props}
      >
        {children}
      </a>
    </Link>
  );
};
