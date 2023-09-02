/* eslint-disable @next/next/no-page-custom-font */

import React from "react";
import '@thonlabs/ui/core/base.css';
import '../styles/scrollbar.css';
import MainHeader from "@/src/shared/components/main-header";
import MainFooter from "@/src/shared/components/main-footer";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Montserrat:wght@900&family=Open+Sans:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet" />
      </head>
      <body className="lg:grid lg:grid-cols-[26.5rem_1fr] xl:grid-cols-[34.25rem_1fr] ">
        <MainHeader/>
        <main className="p-10">
          {children}
          <MainFooter />
        </main>
      </body>
    </html>
  );
}
