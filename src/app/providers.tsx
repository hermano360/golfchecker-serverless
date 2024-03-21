"use client";

import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";
import {
  defaultTheme,
  Provider as ReactSpectrumProvider,
} from "@adobe/react-spectrum";
import { UserProvider } from "@auth0/nextjs-auth0/client";

interface ProvidersProps extends PropsWithChildren {}

export default function Providers({ children }: ProvidersProps) {
  return (
    <UserProvider>
      <SessionProvider>
        <ReactSpectrumProvider theme={defaultTheme}>
          <NextUIProvider>
            <div className="bg-white">{children}</div>
          </NextUIProvider>
        </ReactSpectrumProvider>
      </SessionProvider>
    </UserProvider>
  );
}
