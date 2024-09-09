import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/components/providers/Providers";
import Header from "@/ui/layout/NextuiHeader";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Find Job",
  description: "Test task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen antialiased  bg-neutral-200`}>
        <Providers>
          <div className="grid grid-cols-1 grid-rows-[64px,1fr] h-full min-h-screen">
            <Header />
            <main className="container h-full py-2 w-full">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
