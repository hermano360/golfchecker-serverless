"use client";

import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";
import {
  defaultTheme,
  Provider as ReactSpectrumProvider,
} from "@adobe/react-spectrum";
interface ProvidersProps extends PropsWithChildren {}

export default function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      <NextUIProvider>
        <ReactSpectrumProvider theme={defaultTheme}>
          {children}
        </ReactSpectrumProvider>
      </NextUIProvider>
    </SessionProvider>
  );
}
