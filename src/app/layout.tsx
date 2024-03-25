import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';
import { Providers } from "./providers";

const rubik = Rubik({ subsets: ['latin'], weight: '500' });

export const metadata: Metadata = {
  title: "Philanthropia",
  description: "The future of philanthropy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className} text-white`}>
        <Providers>
          <div className="flex flex-col justify-center items-center">
            <Navbar />
            <div className="h-20"></div>
            {children}    
          </div>
        </Providers>
      </body>
    </html>
  );
}
