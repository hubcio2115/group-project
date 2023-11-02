import { GeistSans } from "geist/font";
import { headers } from "next/headers";
import type { PropsWithChildren } from "react";

import { SessionProvider } from "~/context/session-provider";
import { ThemeProvider } from "~/context/theme-provider";
import { getServerAuthSession } from "~/server/auth";
import "~/styles/globals.css";
import { TRPCReactProvider } from "~/trpc/react";

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const session = await getServerAuthSession();

  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <TRPCReactProvider headers={headers()}>
          <SessionProvider session={session}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </SessionProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
