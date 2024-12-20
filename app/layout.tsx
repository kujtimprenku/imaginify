import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

import "./globals.css";
import {ClerkProvider} from "@clerk/nextjs";
import {Test} from "@/components/test";
import React from "react";

const IBMPlex = IBM_Plex_Sans(
  { subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-ibm-plex"
  });

export const metadata: Metadata = {
  title: "Imaginify",
  description: "AI-powered image generator",
};

// TEST

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: { colorPrimary: "#624df5"}
    }}>
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
        <Test />

        </body>
      </html>
    </ClerkProvider>

  );
}
