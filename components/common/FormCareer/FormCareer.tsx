'use client';

import { useForm } from 'react-hook-form';
import { FormCareerFields } from './FormCareer.props';
import { getEmailRegex, getFullNameRegex } from '@/utils/regex';
import type { RegisterOptions } from 'react-hook-form';
import { byDialCode } from '@/utils/phone/codes';
import cn from 'classnames';
import { useState } from 'react';
import Error from 'public/error.svg';
import { ErrorMsg } from '@/components/typography/ErrorMsg';

export const FormCareer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormCareerFields>({
    shouldFocusError: false,
    defaultValues: {},
  });
  const [checked, setChecked] = useState(false);
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

    position: {
      required: 'Position is required',
    },

    phone: {
      validate: (val: string) => {
        // if input is empty or contains only a country code
        if (!val || Boolean(byDialCode[val])) {
          return 'Phone is required';
        }

        return true;
      },
      pattern: {
        value: /^\+\d+$/,
        message: 'Incorrect phone',
      },
    },

    message: {},

    agreement: {
      required: 'You must agree with our rules',
    },
  };

  const handleSave = async (data: FormCareerFields) => {
    reset();
    setChecked(false);
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
        className="flex flex-col gap-4 [&>input]:block font-extralight"
      >
        <label className="flex flex-col relative text-xs leading-[24px] tracking-[2.4px]">
          Full name
          <input
            {...register('fullName', registerOptions.fullName)}
            className="bg-white/5 text-[13px] pt-1 leading-[24px] px-2"
            placeholder="John Smith"
          />
          {errors.fullName && <ErrorMsg>{errors.fullName.message}</ErrorMsg>}
        </label>
        <label className="flex flex-col relative text-xs leading-[24px] tracking-[2.4px]">
          E-mail
          <input
            {...register('email', registerOptions.email)}
            className="bg-white/5 text-[13px] pt-1 leading-[24px] px-2"
            placeholder="johnsmith@email.com"
          />
          {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
        </label>
        <label className="flex flex-col relative text-xs leading-[24px] tracking-[2.4px]">
          Position
          <input
            {...register('position', registerOptions.position)}
            className="bg-white/5 text-[13px] pt-1 leading-[24px] px-2"
            placeholder="Movie maker"
          />
          {errors.position && <ErrorMsg>{errors.position.message}</ErrorMsg>}
        </label>
        <label className="flex flex-col relative text-xs leading-[24px] tracking-[2.4px]">
          Phone
          <input
            {...register('phone', registerOptions.phone)}
            className="bg-white/5 text-[13px] pt-1 leading-[24px] px-2"
            placeholder="+ 38 (097) 12 34 567"
          />
          {errors.phone && <ErrorMsg>{errors.phone.message}</ErrorMsg>}
        </label>
        <label className="flex flex-col relative text-xs leading-[24px] tracking-[2.4px]">
          Message
          <textarea
            {...register('message', registerOptions.message)}
            className="bg-white/5 text-[13px] pt-1 leading-[24px] px-2 h-[196px]"
            placeholder=""
          />
          {errors.message && <ErrorMsg>{errors.message.message}</ErrorMsg>}
        </label>
        <label className="flex flex-row relative text-xs leading-[24px] tracking-[2.4px] items-start gap-2">
          <div
            className={cn(
              'relative w-6 h-6 flex-shrink-0',
              checked
                ? "bg-[url('/checked.svg')]"
                : "bg-[url('/unchecked.svg')]",
            )}
            onClick={() => setChecked(prev => !prev)}
          >
            <input
              type="checkbox"
              className="absolute top-0 bottom-0 left-0 right-0 cursor-pointer opacity-0"
              {...register('agreement', registerOptions.agreement)}
            />
          </div>
          I confirm my consent to the processing of personal data.
          {errors.agreement && <ErrorMsg>{errors.agreement.message}</ErrorMsg>}
        </label>
        <button
          type="submit"
          className="uppercase text-[30px] font-medium block ml-auto hover:opacity-70 duration-300"
        >
          SEND
        </button>
      </form>
    </>
  );
};
