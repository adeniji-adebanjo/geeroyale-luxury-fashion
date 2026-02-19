"use client";

import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useCart } from "@/lib/providers/cart-provider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="grow container mx-auto px-4 py-12 md:py-24">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-12">
          Shopping Bag
        </h1>

        {cart.length === 0 ? (
          <div className="text-center py-24 space-y-6 bg-cream/30 rounded-sm">
            <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground opacity-20" />
            <div className="space-y-2">
              <h2 className="text-2xl font-serif font-bold text-navy">
                Your bag is empty
              </h2>
              <p className="text-muted-foreground">
                Looks like you haven't added anything to your bag yet.
              </p>
            </div>
            <Link href="/ready-to-wear">
              <Button
                size="lg"
                className="bg-navy hover:bg-navy/90 text-white font-bold uppercase tracking-widest px-8"
              >
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-8">
              <div className="hidden md:grid grid-cols-4 pb-4 border-b text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                <div className="col-span-2">Product</div>
                <div className="text-center">Quantity</div>
                <div className="text-right">Total</div>
              </div>

              <div className="divide-y">
                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                    className="py-8 grid grid-cols-1 md:grid-cols-4 gap-6 items-center"
                  >
                    <div className="md:col-span-2 flex gap-6">
                      <div className="w-24 aspect-3/4 relative overflow-hidden rounded-sm bg-muted shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-serif text-xl font-bold text-navy">
                          {item.name}
                        </h3>
                        <p className="text-sm text-muted-foreground uppercase tracking-widest">
                          Size: {item.selectedSize}
                        </p>
                        <p className="text-sm text-muted-foreground uppercase tracking-widest">
                          Color: {item.selectedColor}
                        </p>
                        <p className="text-navy font-bold font-sans md:hidden">
                          {item.currency}
                          {item.price.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    <div className="flex md:justify-center">
                      <div className="flex items-center border h-10 bg-white">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.selectedSize,
                              item.selectedColor,
                              item.quantity - 1,
                            )
                          }
                          className="hover:bg-transparent"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-sm font-bold">
                          {item.quantity}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.selectedSize,
                              item.selectedColor,
                              item.quantity + 1,
                            )
                          }
                          className="hover:bg-transparent"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() =>
                          removeFromCart(
                            item.id,
                            item.selectedSize,
                            item.selectedColor,
                          )
                        }
                        className="ml-2 text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="hidden md:block text-right font-sans font-bold text-lg text-navy">
                      {item.currency}
                      {(item.price * item.quantity).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <Link
                  href="/ready-to-wear"
                  className="flex items-center gap-2 text-navy font-bold hover:text-gold transition-colors uppercase tracking-widest text-sm"
                >
                  <ArrowLeft className="h-4 w-4" /> Continue Shopping
                </Link>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-cream p-8 md:p-12 space-y-8 rounded-sm">
              <h2 className="font-serif text-2xl font-bold text-navy">
                Order Summary
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span className="font-sans font-bold">
                    ₦{cartTotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span className="text-green-600 font-bold uppercase tracking-widest text-xs">
                    Calculated at checkout
                  </span>
                </div>
                <Separator className="bg-navy/10" />
                <div className="flex justify-between text-navy text-xl font-bold">
                  <span>Total</span>
                  <span className="font-sans">
                    ₦{cartTotal.toLocaleString()}
                  </span>
                </div>
              </div>
              <Link href="/checkout">
                <Button className="w-full h-14 bg-navy hover:bg-navy/90 text-white font-bold uppercase tracking-widest mt-4">
                  Proceed to Checkout
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
