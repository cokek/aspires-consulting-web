import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Nav from "./components/sections/Nav";
import Footer from "./components/sections/Footer";
const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aspires Training and Consulting",
  description: "Aspires connects you with vetted professionals across every field, so you can access credible expertise, make informed decisions, and move forward with confidence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} antialiased`}
    >
      <body className="relative flex flex-col">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
