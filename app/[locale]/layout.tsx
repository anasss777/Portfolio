import "@/styles/globals.css";

import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import Head from "./Head";
import Header from "@/components/header";

interface RootLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  const locales = ["en", "ar"];
  const locale = useLocale();
  const messages = useMessages();

  if (!locales.includes(locale)) notFound();

  return (
    <html lang={locale} className="scroll-smooth">
      <Head />

      <body
        className={`bg-gradient-to-t from-secondary via-secondary
        to-secondary w-full`}
        suppressHydrationWarning={true}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
