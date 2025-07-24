import "@/styles/globals.css";

import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import Head from "./Head";

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

      <body className={`w-full`} suppressHydrationWarning={true}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
