import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Container, ChakraProvider } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dibimbing.id Technical Test",
  description: "Dibimbing.id Technical Test Full Stack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <Container>{children}</Container>
        </ChakraProvider>
      </body>
    </html>
  );
}
