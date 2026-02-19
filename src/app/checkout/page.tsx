"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  CreditCard,
  Truck,
  ShieldCheck,
  PackageCheck,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useCart } from "@/lib/providers/cart-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsSuccess(true);
      clearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <main className="min-h-screen flex flex-col font-sans bg-white">
        <Navbar />
        <div className="grow flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-xl w-full text-center space-y-10 py-20 px-10 bg-cream/30 rounded-sm border border-navy/5 shadow-2xl"
          >
            <div className="w-32 h-32 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <PackageCheck className="h-16 w-16" />
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl font-serif font-bold text-navy leading-tight">
                Your Selection Has Been <br />{" "}
                <span className="text-gold italic font-normal">Secured</span>
              </h1>
              <p className="text-muted-foreground leading-relaxed text-lg font-light">
                Thank you for choosing Geeroyale Luxury Fashion. Your order has
                been placed successfully. An electronic receipt and tracking
                details have been dispatched to your email.
              </p>
            </div>
            <div className="pt-6">
              <Link href="/">
                <Button className="h-16 bg-navy hover:bg-navy/90 text-white font-bold uppercase tracking-[0.3em] px-12 text-sm shadow-xl transition-all hover:translate-y-[-2px]">
                  Return to Boutique
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col font-sans bg-white">
      <Navbar />

      <div className="grow container mx-auto px-4 py-16 md:py-24">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link
              href="/cart"
              className="group inline-flex items-center gap-2 text-navy/40 font-bold hover:text-gold transition-colors uppercase tracking-[0.3em] text-[10px] mb-8"
            >
              <ArrowLeft className="h-3 w-3 group-hover:translate-x-[-2px] transition-transform" />{" "}
              Back to Bag
            </Link>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-navy">
              Perfect Your{" "}
              <span className="italic text-gold font-normal">Order</span>
            </h1>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Checkout Form */}
          <form onSubmit={handleSubmit} className="space-y-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-gold mb-8 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-navy text-gold text-xs flex items-center justify-center shadow-lg">
                  01
                </span>
                Contact Information
              </h2>
              <div className="p-8 border-2 border-cream/50 bg-white shadow-sm space-y-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-[10px] uppercase tracking-widest font-bold text-navy/50"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    required
                    className="h-14 border-navy/10 rounded-none focus-visible:ring-gold focus-visible:border-gold transition-all italic text-lg px-6"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-gold mb-8 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-navy text-gold text-xs flex items-center justify-center shadow-lg">
                  02
                </span>
                Shipping Destination
              </h2>
              <div className="p-8 border-2 border-cream/50 bg-white shadow-sm grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Label
                    htmlFor="firstName"
                    className="text-[10px] uppercase tracking-widest font-bold text-navy/50"
                  >
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    required
                    className="h-14 border-navy/10 rounded-none focus-visible:border-gold px-6"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="lastName"
                    className="text-[10px] uppercase tracking-widest font-bold text-navy/50"
                  >
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    required
                    className="h-14 border-navy/10 rounded-none focus-visible:border-gold px-6"
                  />
                </div>
                <div className="col-span-2 space-y-2">
                  <Label
                    htmlFor="address"
                    className="text-[10px] uppercase tracking-widest font-bold text-navy/50"
                  >
                    Delivery Address
                  </Label>
                  <Input
                    id="address"
                    required
                    className="h-14 border-navy/10 rounded-none focus-visible:border-gold px-6"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="city"
                    className="text-[10px] uppercase tracking-widest font-bold text-navy/50"
                  >
                    City
                  </Label>
                  <Input
                    id="city"
                    required
                    className="h-14 border-navy/10 rounded-none focus-visible:border-gold px-6"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="state"
                    className="text-[10px] uppercase tracking-widest font-bold text-navy/50"
                  >
                    State
                  </Label>
                  <Input
                    id="state"
                    required
                    className="h-14 border-navy/10 rounded-none focus-visible:border-gold px-6"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-gold mb-8 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-navy text-gold text-xs flex items-center justify-center shadow-lg">
                  03
                </span>
                Payment Method
              </h2>
              <div className="p-10 bg-navy text-white space-y-10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-4">
                    <CreditCard className="h-8 w-8 text-gold" />
                    <span className="font-serif text-2xl font-bold italic">
                      Secure Card Payment
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-5 bg-white/10 rounded-sm" />
                    <div className="w-8 h-5 bg-white/10 rounded-sm" />
                  </div>
                </div>
                <div className="space-y-6 relative z-10">
                  <div className="space-y-3">
                    <Label
                      htmlFor="cardNumber"
                      className="text-[10px] uppercase tracking-widest font-bold text-white/40"
                    >
                      Card Number
                    </Label>
                    <Input
                      id="cardNumber"
                      placeholder="XXXX XXXX XXXX XXXX"
                      className="h-14 bg-white/5 border-white/10 rounded-none focus-visible:border-gold text-center tracking-widest text-xl"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <Input
                      placeholder="MM / YY"
                      className="h-14 bg-white/5 border-white/10 rounded-none focus-visible:border-gold text-center font-bold"
                    />
                    <Input
                      placeholder="CVC"
                      type="password"
                      className="h-14 bg-white/5 border-white/10 rounded-none focus-visible:border-gold text-center font-bold"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-20 bg-gold hover:bg-gold/90 text-navy font-bold uppercase tracking-[0.4em] text-lg shadow-2xl hover:translate-y-[-2px] transition-all relative overflow-hidden"
            >
              {loading ? (
                <span className="flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                      ease: "linear",
                    }}
                    className="w-6 h-6 border-4 border-navy border-t-transparent rounded-full"
                  />
                  Securing Transaction...
                </span>
              ) : (
                <>Secure Order — ₦{cartTotal.toLocaleString()}</>
              )}
            </Button>
          </form>

          {/* Right Summary */}
          <div className="lg:sticky lg:top-32 space-y-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-cream p-10 md:p-14 space-y-10 rounded-sm shadow-xl border border-navy/5"
            >
              <h2 className="font-serif text-3xl font-bold text-navy border-b border-navy/10 pb-8">
                In Your Selection{" "}
                <span className="text-gold">({cart.length})</span>
              </h2>

              <div className="space-y-8 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                    className="flex gap-6 items-center"
                  >
                    <div className="w-20 aspect-3/4 relative bg-white rounded-sm overflow-hidden shrink-0 shadow-md border border-navy/5">
                      <img
                        src={item.image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-serif text-lg font-bold text-navy italic">
                        {item.name}
                      </h4>
                      <p className="text-[10px] text-navy/40 font-bold uppercase tracking-widest">
                        {item.selectedSize} / {item.selectedColor} —{" "}
                        {item.quantity} Unit{item.quantity > 1 ? "s" : ""}
                      </p>
                      <p className="font-sans font-bold text-navy mt-2">
                        ₦{(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="bg-navy/10" />

              <div className="space-y-6">
                <div className="flex justify-between text-navy/60 italic font-light">
                  <span>Subtotal</span>
                  <span className="font-sans font-bold text-navy not-italic">
                    ₦{cartTotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-navy/60 italic font-light">
                  <span>Shipping</span>
                  <span className="text-gold font-bold uppercase tracking-[0.2em] text-[10px] not-italic pt-1">
                    Complimentary
                  </span>
                </div>
                <div className="flex justify-between text-2xl font-bold pt-8 border-t-2 border-navy text-navy">
                  <span>Total Due</span>
                  <span className="font-sans">
                    ₦{cartTotal.toLocaleString()}
                  </span>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-center gap-6 p-6 border border-navy/5 rounded-sm bg-white shadow-sm">
                <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center text-navy shrink-0">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-navy/60 leading-relaxed">
                  Your transaction is encrypted <br /> with industry peak
                  standards.
                </p>
              </div>
              <div className="flex items-center gap-6 p-6 border border-navy/5 rounded-sm bg-white shadow-sm">
                <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center text-navy shrink-0">
                  <Truck className="h-6 w-6" />
                </div>
                <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-navy/60 leading-relaxed">
                  Luxury orders include <br /> priority global logistics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
