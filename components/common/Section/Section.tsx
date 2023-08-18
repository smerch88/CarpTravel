import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { SectionProps } from './Section.props';

export const Section: FC<SectionProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section
      className={twMerge(
        // TIP: using top and button for twMerge correct work
        'pt-14 md:pt-16 xl:pt-20 pb-14 md:pb-16 xl:pb-20',
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
};
