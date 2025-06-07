import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <>
      <head>
        <title>dsbfelipe</title>
      </head>
      <html>
        <body>{children}</body>
      </html>
    </>
  );
}
