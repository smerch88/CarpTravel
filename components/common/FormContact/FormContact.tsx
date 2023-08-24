'use client';

import { ErrorMsg } from '@/components/typography/ErrorMsg';
import { getEmailRegex, getFullNameRegex } from '@/utils/regex';
import type { RegisterOptions } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { FormContactFields } from './FormContact.props';

export const FormContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormContactFields>({
    shouldFocusError: false,
    defaultValues: {},
  });
  const registerOptions: Record<string, RegisterOptions> = {
    fullName: {
      required: 'Full Name is required',
      pattern: {
        value: getFullNameRegex(),
        message: 'Incorrect name',
      },
    },
    email: {
      required: 'Email is required',
      pattern: {
        value: getEmailRegex(),
        message: 'Invalid email',
      },
    },

    message: {},
  };

  const handleSave = async (data: FormContactFields) => {
    reset();
    // eslint-disable-next-line no-console
    console.log('save data', data);
  };

  const handleError = (errors: object) => {
    console.warn(errors);
  };
  return (
    <>
      <form
        method="post"
        onSubmit={handleSubmit(handleSave, handleError)}
        className="flex flex-col gap-4 [&>input]:block font-extralight xl:gap-9 xl:max-w-[607px] xl:w-full xl:ml-auto"
      >
        <div className="flex flex-col gap-4 [&>input]:block font-extralight md:flex-row xl:justify-between xl:flex-col">
          <div className="flex flex-col gap-4 [&>input]:block font-extralight md:w-[221px] xl:w-full xl:flex-row xl:justify-between">
            <label className="flex flex-col relative text-xs leading-[24px] tracking-[2.4px]">
              Full name
              <input
                {...register('fullName', registerOptions.fullName)}
                className="bg-white/5 text-[13px] pt-1 xl:text-[20px] xl:leading-[24px] leading-[24px] px-2"
                placeholder="John Smith"
              />
              {errors.fullName && (
                <ErrorMsg>{errors.fullName.message}</ErrorMsg>
              )}
            </label>
            <label className="flex flex-col relative text-xs leading-[24px] tracking-[2.4px]">
              E-mail
              <input
                {...register('email', registerOptions.email)}
                className="bg-white/5 text-[13px] pt-1 xl:text-[20px] xl:leading-[24px] leading-[24px] px-2"
                placeholder="johnsmith@email.com"
              />
              {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
            </label>
          </div>
          <label className="flex flex-col relative text-xs leading-[24px] tracking-[2.4px]">
            Message
            <textarea
              {...register('message', registerOptions.message)}
              className="bg-white/5 text-[13px] pt-1 xl:text-[20px] xl:leading-[24px] leading-[24px] px-2 h-[196px] md:w-[463px] md:h-[221px] xl:w-full"
              placeholder=""
            />
            {errors.message && <ErrorMsg>{errors.message.message}</ErrorMsg>}
          </label>
        </div>
        <div className="md:flex md:flew-row md:justify-between">
          <button
            type="submit"
            className="uppercase text-[30px] font-medium block ml-auto hover:opacity-70 duration-300"
          >
            SEND
          </button>
        </div>
      </form>
    </>
  );
};
