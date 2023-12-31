
import MainHeader from "./components/navigation/MainHeader";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import sharedStyles from './styles/shared.css'

export const meta = () => {
  return [ {
    charset: 'utf-8',
    title: 'Expense App Home',
    viewport: 'width=device-width,initial-scale=1'
  }]
}


export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap" rel="stylesheet" />
        <Links />
      </head>

      <body>
        <header>
          <MainHeader />
        </header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export const links = () => {
  return [{rel: 'stylesheet', href: sharedStyles}]
};
