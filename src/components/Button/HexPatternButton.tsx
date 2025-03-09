import React, { ButtonHTMLAttributes } from 'react';

import { cn } from '@/lib/cn';
import { ClassNameProp } from 'typings/props';

type HexPatternButtonProps = {
  size?: 'default' | 'sm';
} & ClassNameProp &
  ButtonHTMLAttributes<HTMLButtonElement>;

export const HexPatternButton = ({ className, children, size = 'default', ...props }: HexPatternButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        'border-secondary text-primary relative flex items-center justify-center overflow-hidden rounded-xl border-2 px-4 text-sm font-semibold uppercase',
        'bg-honeycomb cursor-pointer',
        'shadow-primary shadow hover:shadow-xs',
        className,
        {
          'h-10 bg-[size:auto_2rem] bg-[position:center_top_.8rem] before:bg-[size:auto_2rem] before:bg-[position:center_top_.8rem]':
            size === 'default',
          'h-8 bg-[size:auto_1.5rem] bg-[position:center_top_.7rem] before:bg-[size:auto_1.5rem] before:bg-[position:center_top_.7rem]':
            size === 'sm',
        },
      )}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};
