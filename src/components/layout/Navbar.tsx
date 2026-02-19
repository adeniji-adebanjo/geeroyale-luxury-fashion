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

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-serif text-2xl font-bold tracking-tighter text- navy">
              GEEROYALE
            </span>
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
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-navy p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-white">
                              New Arrivals
                            </div>
                            <p className="text-sm leading-tight text-white/80">
                              Discover our latest collection of premium
                              menswear.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <Link
                          href="/"
                          className="block p-2 hover:bg-muted rounded-md tracking-tight"
                        >
                          Ready-to-wear
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/"
                          className="block p-2 hover:bg-muted rounded-md tracking-tight"
                        >
                          Luxury Polos
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/"
                          className="block p-2 hover:bg-muted rounded-md tracking-tight"
                        >
                          Bespoke Shirts
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className="px-4 py-2 font-medium hover:text-gold transition-colors"
                  >
                    <Link href="/">BESPOKE</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className="px-4 py-2 font-medium hover:text-gold transition-colors"
                  >
                    <Link href="/">OUR STORY</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className="px-4 py-2 font-medium hover:text-gold transition-colors"
                  >
                    <Link href="/">BLOG</Link>
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
          <Button variant="ghost" size="icon" className="hover:text-gold">
            <ShoppingBag className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
