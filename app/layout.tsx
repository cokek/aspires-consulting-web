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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://aspiresconsultingservices.com"),
  title: "Aspires Training and Consulting",
  description: "Aspires connects you with vetted professionals across every field, so you can access credible expertise, make informed decisions, and move forward with confidence.",
  openGraph: {
    type: "website",
    title: "Aspires Training and Consulting",
    description: "Aspires connects you with vetted professionals across every field, so you can access credible expertise, make informed decisions, and move forward with confidence.",
    images: [{ url: "/images/hero-meeting.jpg", width: 1200, height: 630, alt: "Aspires Training and Consulting" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aspires Training and Consulting",
    description: "Aspires connects you with vetted professionals across every field, so you can access credible expertise, make informed decisions, and move forward with confidence.",
    images: ["/images/hero-meeting.jpg"],
  },
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
