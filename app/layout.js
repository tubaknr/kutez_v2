import React from "react";
import "../styles/globals.css";

export const metadata = {
  title: "",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <header>
          <h1></h1>
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
