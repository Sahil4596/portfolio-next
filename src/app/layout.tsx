import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ui/ClientLayout";

export const metadata: Metadata = {
  title: "Sahil Jhajharia - Portfolio",
  description:
    "Portfolio of Sahil Jhajharia, a full-stack software developer specializing in Next.js, Express.js, and scalable web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-black text-[#a2a2a5]">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}