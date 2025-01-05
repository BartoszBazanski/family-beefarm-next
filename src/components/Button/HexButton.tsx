import { ButtonHTMLAttributes } from "react";
import { Button as HeadlessButton } from '@headlessui/react';
import { ClassNameProp } from "typings/props";
import { cn } from "@/lib/cn";

import { HexBackground } from "./HexBackground";

type HexButtonProps = {
  variant?: 'primary' | 'secondary',
} & ClassNameProp &
  ButtonHTMLAttributes<HTMLButtonElement>;

export const HexButton = ({ children, className, variant = 'primary', ...props }: HexButtonProps) => {
  return (
    <HeadlessButton
      {...props}
      className={cn('group relative h-10 items-center justify-center text-sm font-bold', className, {
        'text-primary-100': variant === 'primary',
        'text-primary': variant === 'secondary',
      })}
    >
      <HexBackground
        className={cn('h-full transition-colors', {
          'text-secondary-800 group-hover:text-secondary [&>path:first-of-type]:fill-secondary group-hover:[&>path:first-of-type]:fill-secondary-500':
            variant === 'primary',
          'text-secondary-400 group-hover:text-secondary-200 [&>path:first-of-type]:fill-secondary-200 group-hover:[&>path:first-of-type]:fill-secondary-400':
            variant === 'secondary',
        })}
      />
      <span className="absolute top-0 left-0 right-0 bottom-0 z-10 flex justify-center items-center opacity-90 transition-opacity group-hover:opacity-100">
        {children}
      </span>
    </HeadlessButton>
  );
};
