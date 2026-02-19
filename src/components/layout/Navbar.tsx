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

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="https://res.cloudinary.com/daxvftxtq/images/c_scale,w_372,h_372,dpr_1.5/f_auto,q_auto/v1746190578/GeeRoyal-Logo_35850ffcb/GeeRoyal-Logo_35850ffcb.webp?_i=AA"
              alt="GEEROYALE"
              className="h-16 w-auto object-contain"
            />
          </Link>

          <div className="hidden lg:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent font-medium hover:text-gold transition-colors">
                    SHOP
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white border border-border shadow-lg">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-navy p-6 no-underline outline-none focus:shadow-md"
                            href="/ready-to-wear"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-white">
                              New Arrivals
                            </div>
                            <p className="text-sm leading-tight text-white/80">
                              Discover our latest collection of premium
                              menswear.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild
                          className="block p-2 hover:bg-muted rounded-md tracking-tight"
                        >
                          <Link href="/ready-to-wear">Ready-to-wear</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild
                          className="block p-2 hover:bg-muted rounded-md tracking-tight"
                        >
                          <Link href="/ready-to-wear">Luxury Polos</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          asChild
                          className="block p-2 hover:bg-muted rounded-md tracking-tight"
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
                    className="px-4 py-2 font-medium hover:text-gold transition-colors"
                  >
                    <Link href="/bespoke">BESPOKE</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className="px-4 py-2 font-medium hover:text-gold transition-colors"
                  >
                    <Link href="/our-story">OUR STORY</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className="px-4 py-2 font-medium hover:text-gold transition-colors"
                  >
                    <Link href="/blog">BLOG</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hover:text-gold">
            <User className="h-5 w-5" />
          </Button>
          <Link href="/cart">
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-gold relative"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-gold text-navy text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full animate-in zoom-in">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
