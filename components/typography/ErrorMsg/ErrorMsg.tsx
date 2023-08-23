import { FC } from 'react';
import { ErrorMsgProps } from './ErrorMsg.props';
import Error from 'public/error.svg';

export const ErrorMsg: FC<ErrorMsgProps> = ({ children }) => {
  return (
    <p className="text-red absolute -bottom-6 right-0 flex items-center gap-1">
      <Error className="w-[18px] h-[18px]" />
      {children}
    </p>
  );
};
