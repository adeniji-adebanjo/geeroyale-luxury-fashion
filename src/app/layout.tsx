import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/lib/providers/query-provider";
import { CartProvider } from "@/lib/providers/cart-provider";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
      <body className={`${outfit.variable} ${cormorant.variable} antialiased`}>
        <QueryProvider>
          <CartProvider>{children}</CartProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
