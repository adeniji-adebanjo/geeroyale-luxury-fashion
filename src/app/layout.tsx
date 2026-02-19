import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/lib/providers/query-provider";
import { CartProvider } from "@/lib/providers/cart-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Geeroyale Luxury Fashion – Timeless Luxury Outfits",
  description:
    "Beautifully Crafted Luxury Wears for the modern man. Experience the difference of luxurious fabrics and expert craftsmanship.",
  icons: {
    icon: "https://res.cloudinary.com/daxvftxtq/images/w_32,h_32,c_fill,g_auto/f_auto,q_auto/v1709628069/cropped-GeeRoyal-Logo-removebg-preview/cropped-GeeRoyal-Logo-removebg-preview.png?_i=AA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <QueryProvider>
          <CartProvider>{children}</CartProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
