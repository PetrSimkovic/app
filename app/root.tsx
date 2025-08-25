import React from 'react';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { Analytics } from '@vercel/analytics/react';
import stylesheet from './styles.css?url';
import Header from './components/Header';
import Footer from './components/Footer';

export const links = () => [{ rel: 'stylesheet', href: stylesheet }];

export function Layout({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear().toString();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer copyright={year} />
        <ScrollRestoration />
        <Scripts />
        <Analytics />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
