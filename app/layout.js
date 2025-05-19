import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LearnHub",
  description:
    "LearnHub is an online learning platform offering high-quality courses, expert instructors, and a vibrant learning community. Learn anytime, anywhere with LearnHub.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <body suppressHydrationWarning>
          <Provider>{children}</Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
