import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Biruk Damtew - Cinematographer",
  description: "Professional cinematographer specializing in visual storytelling through motion pictures. Explore my portfolio of cinematic work and creative vision.",
  keywords: "cinematographer, videographer, film production, visual storytelling, Biruk Damtew",
  author: "Biruk Damtew",
  openGraph: {
    title: "Biruk Damtew - Cinematographer",
    description: "Professional cinematographer specializing in visual storytelling through motion pictures.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biruk Damtew - Cinematographer",
    description: "Professional cinematographer specializing in visual storytelling through motion pictures.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}