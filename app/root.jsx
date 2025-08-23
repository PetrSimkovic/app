// app/routes/root.jsx
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { Analytics } from '@vercel/analytics/react';

// Layout komponenta pro strukturu aplikace
export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children} {/* Tento children bude obsahovat obsah specifický pro routu */}
        <ScrollRestoration />
        <Scripts />
        <Analytics />
      </body>
    </html>
  );
}

// Hlavní aplikace, která vykreslí Outlet pro danou cestu
export default function App() {
  return <Outlet />;
}
