"use client";

import Link from "next/link";
import { ShoppingBag, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useCart } from "@/lib/providers/cart-provider";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/60 font-sans">
      <div className="container mx-auto flex h-20 items-center px-4 relative">
        {/* Logo - Left */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="https://res.cloudinary.com/daxvftxtq/images/c_scale,w_372,h_372,dpr_1.5/f_auto,q_auto/v1746190578/GeeRoyal-Logo_35850ffcb/GeeRoyal-Logo_35850ffcb.webp?_i=AA"
              alt="GEEROYALE"
              className="h-14 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Navigation - Center */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-transparent hover:text-gold focus:bg-transparent focus:text-gold data-[state=open]:bg-transparent transition-colors">
                  Shop
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white border border-border shadow-2xl rounded-sm">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-sm bg-navy p-6 no-underline outline-none focus:shadow-md group/card overflow-hidden relative"
                          href="/ready-to-wear"
                        >
                          <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover/card:opacity-100 transition-opacity" />
                          <div className="mb-2 mt-4 text-xl font-serif font-bold text-white relative z-10">
                            New Arrivals
                          </div>
                          <p className="text-sm leading-tight text-white/60 relative z-10 font-light">
                            Discover our latest collection of premium menswear.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        asChild
                        className="block p-3 hover:bg-cream rounded-sm tracking-[0.1em] text-xs font-bold uppercase text-navy/70 hover:text-gold transition-all"
                      >
                        <Link href="/ready-to-wear">Ready-to-wear</Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        asChild
                        className="block p-3 hover:bg-cream rounded-sm tracking-[0.1em] text-xs font-bold uppercase text-navy/70 hover:text-gold transition-all"
                      >
                        <Link href="/ready-to-wear">Luxury Polos</Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        asChild
                        className="block p-3 hover:bg-cream rounded-sm tracking-[0.1em] text-xs font-bold uppercase text-navy/70 hover:text-gold transition-all"
                      >
                        <Link href="/ready-to-wear">Bespoke Shirts</Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className="px-6 py-2 font-bold uppercase tracking-[0.2em] text-[10px] text-navy hover:text-gold transition-colors cursor-pointer"
                >
                  <Link href="/bespoke">Bespoke</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className="px-6 py-2 font-bold uppercase tracking-[0.2em] text-[10px] text-navy hover:text-gold transition-colors cursor-pointer"
                >
                  <Link href="/our-story">Our Story</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className="px-6 py-2 font-bold uppercase tracking-[0.2em] text-[10px] text-navy hover:text-gold transition-colors cursor-pointer"
                >
                  <Link href="/blog">Blog</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Icons - Right */}
        <div className="flex-1 flex justify-end items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            className="hover:text-gold hover:bg-transparent transition-colors"
          >
            <User className="h-5 w-5" />
          </Button>
          <Link href="/cart">
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-gold hover:bg-transparent transition-colors relative"
            >
              <ShoppingBag className="h-5 w-5" />
              <AnimatePresence mode="popLayout">
                {cartCount > 0 && (
                  <motion.span
                    key={cartCount}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                    className="absolute -top-1 -right-1 bg-gold text-navy text-[10px] font-bold min-w-[18px] h-[18px] px-1 flex items-center justify-center rounded-full shadow-lg border border-white"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden hover:bg-transparent"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
