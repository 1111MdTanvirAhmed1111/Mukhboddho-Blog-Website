'use client'

import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/ThemeProvider";

import { Sidebar } from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function AdminLayout({ children }) {
  return (
    <div className={inter.className}>
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
        <div className="flex h-screen">

          <Sidebar />
          <div className="flex-1 flex flex-col">
            <main className="flex-1 overflow-y-auto p-4 md:p-8">
              {children}
            </main>
          </div>
        </div></ThemeProvider>

    </div>
  )
}

