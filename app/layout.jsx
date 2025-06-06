import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./provider";
import { Toaster } from "sonner";
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
  icons: {
    icon: [{ url: "/Logo_Circle.png", sizes: "32x32", type: "image/png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <Toaster
        position="top-right"
        expand={false}
        closeButton
        duration={4000}
        richColors
      />
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
