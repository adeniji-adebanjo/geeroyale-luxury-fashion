"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  CreditCard,
  Truck,
  ShieldCheck,
} from "lucide-react";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    clearCart();
  };

  if (isSuccess) {
    return (
      <main className="min-h-screen flex flex-col">
        <Navbar />
        <div className="grow flex items-center justify-center p-4">
          <div className="max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in duration-500">
            <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="h-12 w-12" />
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-serif font-bold text-navy">
                Order Confirmed!
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                Thank you for choosing Geeroyale Luxury Fashion. Your order has
                been placed successfully and we've sent a confirmation to your
                email.
              </p>
            </div>
            <div className="pt-4">
              <Link href="/">
                <Button className="h-14 bg-navy hover:bg-navy/90 text-white font-bold uppercase tracking-widest px-12">
                  Return to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="grow container mx-auto px-4 py-12 md:py-24">
        <div className="mb-12">
          <Link
            href="/cart"
            className="flex items-center gap-2 text-navy font-bold hover:text-gold transition-colors uppercase tracking-widest text-sm mb-6"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Bag
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy">
            Checkout
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Checkout Form */}
          <form onSubmit={handleSubmit} className="space-y-12">
            <div>
              <h2 className="text-xl font-bold uppercase tracking-widest text-navy mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-navy text-white text-xs flex items-center justify-center">
                  1
                </span>
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    required
                    className="h-12 border-navy/10 rounded-none focus-visible:ring-navy/20"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold uppercase tracking-widest text-navy mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-navy text-white text-xs flex items-center justify-center">
                  2
                </span>
                Shipping Address
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    required
                    className="h-12 border-navy/10 rounded-none"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    required
                    className="h-12 border-navy/10 rounded-none"
                  />
                </div>
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    required
                    className="h-12 border-navy/10 rounded-none"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    required
                    className="h-12 border-navy/10 rounded-none"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    required
                    className="h-12 border-navy/10 rounded-none"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold uppercase tracking-widest text-navy mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-navy text-white text-xs flex items-center justify-center">
                  3
                </span>
                Payment
              </h2>
              <div className="p-6 bg-cream/50 border border-navy/5 space-y-6">
                <div className="flex items-center gap-4">
                  <CreditCard className="h-6 w-6 text-navy" />
                  <span className="font-bold">Card Payment</span>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      placeholder="0000 0000 0000 0000"
                      className="h-12 border-navy/10 rounded-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="MM/YY"
                      className="h-12 border-navy/10 rounded-none"
                    />
                    <Input
                      placeholder="CVC"
                      className="h-12 border-navy/10 rounded-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-16 bg-gold hover:bg-gold/90 text-navy font-bold uppercase tracking-widest text-lg shadow-lg"
            >
              Place Order ₦{cartTotal.toLocaleString()}
            </Button>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="flex flex-col items-center text-center gap-2">
                <Truck className="h-5 w-5 text-muted-foreground" />
                <span className="text-[10px] uppercase font-bold text-muted-foreground">
                  Free Shipping
                </span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <ShieldCheck className="h-5 w-5 text-muted-foreground" />
                <span className="text-[10px] uppercase font-bold text-muted-foreground">
                  Secure Payment
                </span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <ArrowLeft className="h-5 w-5 text-muted-foreground" />
                <span className="text-[10px] uppercase font-bold text-muted-foreground">
                  Easy Returns
                </span>
              </div>
            </div>
          </form>

          {/* Right Summary */}
          <div className="lg:sticky lg:top-32 space-y-8">
            <div className="bg-navy text-white p-8 md:p-12 space-y-8 rounded-sm">
              <h2 className="font-serif text-2xl font-bold">
                In Your Bag ({cart.length})
              </h2>

              <div className="space-y-6">
                {cart.slice(0, 3).map((item) => (
                  <div
                    key={`${item.id}-${item.selectedSize}`}
                    className="flex gap-4"
                  >
                    <div className="w-16 h-20 relative bg-white/10 rounded-sm overflow-hidden shrink-0">
                      <img
                        src={item.image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold">
                        {item.name}
                      </h4>
                      <p className="text-[10px] text-white/50 uppercase tracking-widest">
                        Size: {item.selectedSize} | Qty: {item.quantity}
                      </p>
                      <p className="font-sans font-bold text-sm mt-1">
                        ₦{item.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
                {cart.length > 3 && (
                  <p className="text-xs text-white/50 italic">
                    + {cart.length - 3} more items
                  </p>
                )}
              </div>

              <Separator className="bg-white/10" />

              <div className="space-y-4">
                <div className="flex justify-between text-white/70">
                  <span>Subtotal</span>
                  <span className="font-sans font-bold">
                    ₦{cartTotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-white/70 text-sm">
                  <span>Shipping</span>
                  <span className="text-gold font-bold uppercase tracking-widest text-[10px]">
                    Free
                  </span>
                </div>
                <div className="flex justify-between text-xl font-bold pt-4 border-t border-white/10">
                  <span>Total</span>
                  <span className="font-sans text-gold">
                    ₦{cartTotal.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
