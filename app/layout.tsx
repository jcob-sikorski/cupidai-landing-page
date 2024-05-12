import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Cupid AI",
  description:
    "Elevate your agency's output with state-of-the-art AI, engineered to innovate at the speed of thought.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`w-[100vw] flex flex-col items-center text-[#E1E1E1] bg-[#000000] ${inter.className}`}
      >
        <div className="overflow-hidden">{children}</div>
      </body>
    </html>
  );
}
