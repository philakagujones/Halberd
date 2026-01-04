import "./globals.css";

export const metadata = {
  title: "Halberd Solutions",
  description:
    "Halberd helps startups recover from incidents and build the governance, privacy, and risk controls.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="site-body">{children}</body>
    </html>
  );
}