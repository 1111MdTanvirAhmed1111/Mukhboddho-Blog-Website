
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SessionWrapper from './../components/session-wrapper';
import { ThemeProvider } from "@/components/ThemeProvider";
import { Suspense } from "react";
import Loading from "./loading";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mukhboddho",
  description: "Mukhboddho by Omayer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning >
  <SessionWrapper>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            style={{
              background: "0 0% 100%",
              foreground: "240 10% 3.9%",
              primary: "346.8 77.2% 49.8%",
              secondary: "0 0% 96.1%",
              accent: "0 0% 96.1%",
              muted: "0 0% 96.1%",
            }}
          >
        <Navbar />
        <Suspense fallback={<Loading/>}>
        {children}
        </Suspense>
      </ThemeProvider>
      </body>
      </SessionWrapper>
    </html>
  );
}
