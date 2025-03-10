'use client';

import { PropsWithChildren } from "react";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export const AppProviders = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <>
      <ProgressBar height="4px" color="var(--color-accent)" options={{ showSpinner: false }} shallowRouting />
      {children}
    </>
  );
}
