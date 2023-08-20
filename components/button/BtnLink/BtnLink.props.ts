import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface BtnLinkProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children: ReactNode;
  variant?: 'header' | 'button' | 'menu';
  disabled?: boolean;
  href?: string;
  scroll?: boolean;
  className?: string;
  onClick?: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent> | undefined,
  ) => void;
}
