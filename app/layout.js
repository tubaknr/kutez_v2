import React from "react";
import "../styles/globals.css";

export const metadata = {
  title: "",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <header>
          <h1></h1>
        </header>
        <main>{children}</main>
        <footer>2025 Engagement rigns All rights reserved.</footer>
      </body>
    </html>
  );
}
