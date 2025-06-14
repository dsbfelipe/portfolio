import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <>
      <head>
        <title>dsbfelipe - Portfolio</title>
        <link rel="icon" href="/favicon.png" />
      </head>
      <html>
        <body>{children}</body>
      </html>
    </>
  );
}
