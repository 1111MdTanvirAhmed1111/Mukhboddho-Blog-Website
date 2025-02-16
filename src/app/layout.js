import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SessionWrapper from './../components/session-wrapper';
import { ThemeProvider } from "@/components/ThemeProvider";
import { Suspense } from "react";
import Loading from "./loading";
import BreadCrumb from './../components/BreadCrumb';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "পথচ্যুত",
  description: "আমাদের মত পথ হারা সকল মানুষের জন্য আল্লাহ পাঠিয়েছেন ইসলাম। তবে পাশ্চ্যাত্তের লাগাতার আগ্রাশনের পথে আমরা আরো পথ থেকে সরে গিয়েছি। ইসলামের ইতিহাস, পাশ্চাত্যের ব্যার্থ সমাজ, কবরের সদকায়ে জারিয়ার জন্যের আমাদের এই আয়োজন। আল্লাহকে খুশি করার নিয়তে উম্মাহর সাথে থাকুন, নিজের সর্বচ্চ দিয়ে সাহায্য করুন। জাজাকুমুল্লাহ খাইরান।",
  keywords: "pothoczuto,পথচ্যুত,ওমায়ের,তানভীর,মুখবদ্ধ",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  authors: [{ name: "ওমায়ের" }],
  metadataBase: new URL('https://pothoczuto.xyz'),
  openGraph: {
    title: "পথচ্যুত",
    description: "আমাদের মত পথ হারা সকল মানুষের জন্য আল্লাহ পাঠিয়েছেন ইসলাম।",
    url: 'https://pothoczuto.xyz',
    siteName: 'পথচ্যুত',
    locale: 'bn_BD',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.ico" sizes="any" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}>
        <SessionWrapper>
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
            <BreadCrumb className="mx-auto" />
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
          </ThemeProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}
