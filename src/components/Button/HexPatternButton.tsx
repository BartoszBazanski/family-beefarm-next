import React, { ButtonHTMLAttributes } from 'react';

import { cn } from '@/lib/cn';
import { ClassNameProp } from 'typings/props';

type HexPatternButtonProps = {
  variant?: 'primary' | 'secondary';
} & ClassNameProp &
  ButtonHTMLAttributes<HTMLButtonElement>;

export const HexPatternButton = ({ className, children, ...props }: HexPatternButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        'relative flex h-10 items-center justify-center overflow-hidden rounded-full border-2 border-secondary-800 hover:border-secondary px-4 text-sm font-semibold uppercase text-primary-100',
        'bg-honeycomb',
        'bg-[size:auto_2rem] bg-[position:center_top_.8rem] before:bg-[size:auto_2rem] before:bg-[position:center_top_.8rem]',
        className,
      )}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};
