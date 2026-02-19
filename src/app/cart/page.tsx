"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Minus,
  Plus,
  Trash2,
  ArrowLeft,
  ShoppingBag,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useCart } from "@/lib/providers/cart-provider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <main className="min-h-screen flex flex-col font-sans bg-white">
      <Navbar />

      <div className="grow container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-navy">
              Your{" "}
              <span className="italic text-gold font-normal">Shopping Bag</span>
            </h1>
            <p className="text-muted-foreground font-light text-lg">
              Review your selections before proceeding to checkout.
            </p>
          </div>
          {cart.length > 0 && (
            <div className="text-sm uppercase tracking-widest font-bold text-navy/40">
              {cart.length} {cart.length === 1 ? "Item" : "Items"}
            </div>
          )}
        </motion.div>

        {cart.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-32 space-y-8 bg-cream/30 rounded-sm border border-navy/5 shadow-inner"
          >
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-xl">
              <ShoppingBag className="h-10 w-10 text-gold" />
            </div>
            <div className="space-y-3">
              <h2 className="text-3xl font-serif font-bold text-navy">
                Your bag is currently empty
              </h2>
              <p className="text-muted-foreground font-light text-xl max-w-md mx-auto">
                Discover our latest collections and find something exceptional
                tailored for you.
              </p>
            </div>
            <Link href="/ready-to-wear">
              <Button
                size="lg"
                className="bg-navy hover:bg-navy/90 text-white font-bold uppercase tracking-[0.3em] h-16 px-12 text-sm shadow-xl transition-all hover:translate-y-[-2px]"
              >
                Start Shopping
              </Button>
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 items-start">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-12">
              <div className="hidden md:grid grid-cols-5 pb-6 border-b border-navy/5 text-xs font-bold uppercase tracking-[0.3em] text-navy/50">
                <div className="col-span-3">Product Details</div>
                <div className="text-center">Quantity</div>
                <div className="text-right">Total</div>
              </div>

              <div className="divide-y divide-navy/5">
                <AnimatePresence mode="popLayout">
                  {cart.map((item) => (
                    <motion.div
                      layout
                      key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="py-10 grid grid-cols-1 md:grid-cols-5 gap-8 items-center"
                    >
                      <div className="md:col-span-3 flex gap-8">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="w-32 aspect-3/4 relative overflow-hidden rounded-sm bg-muted shrink-0 shadow-lg border border-navy/5"
                        >
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                        <div className="space-y-3">
                          <h3 className="font-serif text-2xl font-bold text-navy hover:text-gold transition-colors">
                            <Link href={`/products/${item.id}`}>
                              {item.name}
                            </Link>
                          </h3>
                          <div className="flex flex-wrap gap-4 pt-2">
                            <span className="text-[10px] bg-navy/5 px-2 py-1 rounded-full font-bold uppercase tracking-widest text-navy/60">
                              Size: {item.selectedSize}
                            </span>
                            <span className="text-[10px] bg-navy/5 px-2 py-1 rounded-full font-bold uppercase tracking-widest text-navy/60">
                              Color: {item.selectedColor}
                            </span>
                          </div>
                          <p className="text-navy font-bold font-sans md:hidden text-xl pt-2">
                            {item.currency}
                            {item.price.toLocaleString()}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col md:items-center gap-4">
                        <div className="flex items-center border-2 border-navy/5 h-12 bg-white rounded-sm">
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
                            className="hover:bg-transparent hover:text-gold w-10 h-full"
                          >
                            <Minus className="h-4 w-4" />
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
                            className="hover:bg-transparent hover:text-gold w-10 h-full"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            removeFromCart(
                              item.id,
                              item.selectedSize,
                              item.selectedColor,
                            )
                          }
                          className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground hover:text-destructive flex items-center gap-2"
                        >
                          <Trash2 className="h-3 w-3" /> Remove
                        </Button>
                      </div>

                      <div className="hidden md:block text-right font-sans font-bold text-2xl text-navy">
                        {item.currency}
                        {(item.price * item.quantity).toLocaleString()}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="pt-12 border-t border-navy/5">
                <Link
                  href="/ready-to-wear"
                  className="inline-flex items-center gap-3 text-navy font-bold hover:text-gold transition-all uppercase tracking-[0.2em] text-sm group"
                >
                  <ArrowLeft className="h-4 w-4 group-hover:translate-x-[-4px] transition-transform" />{" "}
                  Continue Shopping
                </Link>
              </div>
            </div>

            {/* Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:sticky lg:top-32 space-y-10"
            >
              <div className="bg-cream p-8 md:p-12 space-y-10 rounded-sm shadow-xl border border-navy/5">
                <h2 className="font-serif text-3xl font-bold text-navy border-b border-navy/10 pb-6">
                  Order Summary
                </h2>
                <div className="space-y-6">
                  <div className="flex justify-between text-muted-foreground text-lg italic font-light">
                    <span>Subtotal</span>
                    <span className="font-sans font-bold text-navy not-italic">
                      ₦{cartTotal.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-muted-foreground text-lg italic font-light">
                    <span>Shipping</span>
                    <span className="text-green-600 font-bold uppercase tracking-widest text-xs not-italic pt-1">
                      Free shipping
                    </span>
                  </div>
                  <div className="space-y-1.5 pt-4">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-navy/40">
                      Promo Code
                    </p>
                    <div className="flex gap-2">
                      <input
                        className="flex-1 bg-white border border-navy/10 px-4 py-2 text-sm focus:outline-none focus:border-gold"
                        placeholder="Enter code"
                      />
                      <Button
                        variant="outline"
                        className="text-xs uppercase font-bold tracking-widest border-navy/10"
                      >
                        Apply
                      </Button>
                    </div>
                  </div>
                  <Separator className="bg-navy/10" />
                  <div className="flex justify-between text-navy text-2xl font-bold">
                    <span>Total</span>
                    <span className="font-sans">
                      ₦{cartTotal.toLocaleString()}
                    </span>
                  </div>
                </div>
                <Link href="/checkout">
                  <Button className="w-full h-16 bg-navy hover:bg-navy/90 text-white font-bold uppercase tracking-[0.3em] text-sm shadow-xl transition-all hover:translate-y-[-2px]">
                    Checkout Now
                  </Button>
                </Link>
              </div>

              <div className="bg-white border-2 border-cream p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <ShieldCheck className="h-6 w-6 text-gold" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-navy">
                      Secure Transaction
                    </p>
                    <p className="text-[10px] text-muted-foreground font-light">
                      Your data is protected by industry-standard encryption.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Truck className="h-6 w-6 text-gold" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-navy">
                      Priority Fulfillment
                    </p>
                    <p className="text-[10px] text-muted-foreground font-light">
                      Luxury orders are prioritized for immediate processing.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
