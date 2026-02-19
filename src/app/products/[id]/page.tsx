"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Star,
  ChevronRight,
  Minus,
  Plus,
  ShoppingBag,
  Check,
  ShieldCheck,
  Truck,
  RotateCcw,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { mockProducts } from "@/lib/data/mock-products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SizeChart from "@/components/products/SizeChart";
import { useCart } from "@/lib/providers/cart-provider";

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = mockProducts.find((p) => p.id === id);
  const { addToCart } = useCart();

  if (!product) {
    notFound();
  }

  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || "");
  const [selectedColor, setSelectedColor] = useState(product.colors[0] || "");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="min-h-screen flex flex-col font-sans bg-white">
      <Navbar />

      <div className="grow">
        {/* Breadcrumbs */}
        <div className="bg-cream/30 py-6 border-b">
          <div className="container mx-auto px-4 flex items-center gap-2 text-sm text-muted-foreground uppercase tracking-widest">
            <Link
              href="/"
              className="hover:text-gold transition-colors font-medium"
            >
              Home
            </Link>
            <ChevronRight className="h-4 w-4 opacity-50" />
            <Link
              href="/ready-to-wear"
              className="hover:text-gold transition-colors font-medium"
            >
              {product.category}
            </Link>
            <ChevronRight className="h-4 w-4 opacity-50" />
            <span className="text-navy font-bold">{product.name}</span>
          </div>
        </div>

        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
              {/* Product Images */}
              <div className="space-y-6 lg:sticky lg:top-32">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="aspect-3/4 relative overflow-hidden rounded-sm bg-muted shadow-2xl border border-navy/5"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                {/* Thumbnails (Mocked) */}
                <div className="grid grid-cols-4 gap-4">
                  {[
                    product.image,
                    product.image,
                    product.image,
                    product.image,
                  ].map((img, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="aspect-square relative overflow-hidden rounded-sm bg-muted cursor-pointer border-[1px] border-border hover:border-gold transition-all shadow-sm"
                    >
                      <Image
                        src={img}
                        alt=""
                        fill
                        className="object-cover opacity-80 hover:opacity-100 transition-all"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col space-y-10">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="outline"
                      className="text-gold border-gold uppercase tracking-[0.3em] font-bold px-3 py-1"
                    >
                      {product.category}
                    </Badge>
                    {product.rating && (
                      <div className="flex items-center gap-2 text-sm bg-cream px-3 py-1.5 rounded-full shadow-sm">
                        <Star className="h-4 w-4 fill-gold text-gold" />
                        <span className="font-bold text-navy">
                          {product.rating}
                        </span>
                        <span className="text-muted-foreground font-light border-l pl-2">
                          12 Reviews
                        </span>
                      </div>
                    )}
                  </div>
                  <h1 className="text-5xl md:text-6xl font-serif font-bold text-navy leading-tight">
                    {product.name}
                  </h1>
                  <p className="text-3xl font-sans font-bold text-navy flex items-baseline gap-2">
                    <span className="text-gold font-light">₦</span>
                    {product.price.toLocaleString()}
                  </p>
                </motion.div>

                <p className="text-xl text-muted-foreground leading-relaxed font-light border-l-2 border-gold pl-6 py-2">
                  {product.description}
                </p>

                {/* Options */}
                <div className="space-y-8 pt-8 border-t border-navy/5">
                  {/* Colors */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label className="uppercase tracking-[0.2em] text-xs font-bold text-navy/60">
                        Color:{" "}
                        <span className="text-navy">{selectedColor}</span>
                      </Label>
                    </div>
                    <RadioGroup
                      value={selectedColor}
                      onValueChange={setSelectedColor}
                      className="flex gap-4"
                    >
                      {product.colors.map((color) => (
                        <div key={color} className="flex items-center">
                          <RadioGroupItem
                            value={color}
                            id={`color-${color}`}
                            className="sr-only"
                          />
                          <Label
                            htmlFor={`color-${color}`}
                            className={`w-12 h-12 rounded-full border-2 cursor-pointer flex items-center justify-center transition-all duration-300 shadow-sm ${selectedColor === color ? "border-gold shadow-md scale-110 ring-2 ring-gold/20 ring-offset-2" : "border-transparent opacity-80 hover:opacity-100"}`}
                            style={{
                              backgroundColor: color
                                .toLowerCase()
                                .replace(" ", ""),
                            }}
                          ></Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Sizes */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label className="uppercase tracking-[0.2em] text-xs font-bold text-navy/60">
                        Size: <span className="text-navy">{selectedSize}</span>
                      </Label>
                      <SizeChart />
                    </div>
                    <RadioGroup
                      value={selectedSize}
                      onValueChange={setSelectedSize}
                      className="flex flex-wrap gap-4"
                    >
                      {product.sizes.map((size) => (
                        <div key={size} className="flex items-center">
                          <RadioGroupItem
                            value={size}
                            id={`size-${size}`}
                            className="sr-only"
                          />
                          <Label
                            htmlFor={`size-${size}`}
                            className={`min-w-[64px] h-14 px-4 flex items-center justify-center border-2 font-bold uppercase tracking-widest transition-all cursor-pointer rounded-sm ${selectedSize === size ? "bg-navy text-white border-navy shadow-lg scale-105" : "bg-white text-navy hover:border-gold border-navy/5 shadow-sm"}`}
                          >
                            {size}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Quantity & Add to Cart */}
                  <div className="flex items-center gap-6 pt-6">
                    <div className="flex items-center border-2 border-navy/10 h-16 bg-white rounded-sm">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="hover:bg-transparent hover:text-gold w-14 h-full"
                      >
                        <Minus className="h-5 w-5" />
                      </Button>
                      <span className="w-14 text-center font-bold text-xl">
                        {quantity}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setQuantity(quantity + 1)}
                        className="hover:bg-transparent hover:text-gold w-14 h-full"
                      >
                        <Plus className="h-5 w-5" />
                      </Button>
                    </div>
                    <Button
                      onClick={handleAddToCart}
                      className={`flex-1 h-16 uppercase tracking-[0.3em] font-bold text-sm transition-all duration-500 rounded-sm shadow-xl hover:translate-y-[-2px] ${added ? "bg-green-600 hover:bg-green-600 ring-4 ring-green-600/20" : "bg-navy hover:bg-navy/90"}`}
                      disabled={added}
                    >
                      <AnimatePresence mode="wait">
                        {added ? (
                          <motion.div
                            key="added"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center"
                          >
                            <Check className="h-6 w-6 mr-3" /> Added to Bag
                          </motion.div>
                        ) : (
                          <motion.div
                            key="add"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center"
                          >
                            <ShoppingBag className="h-6 w-6 mr-3" /> Add to Bag
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Button>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-3 gap-6 pt-10 border-t border-navy/5">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-navy shadow-inner">
                      <Truck className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                      Free Global Shipping
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-navy shadow-inner">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                      Verified Authenticity
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-navy shadow-inner">
                      <RotateCcw className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                      Complimentary Returns
                    </span>
                  </div>
                </div>

                {/* Tabs */}
                <Tabs defaultValue="details" className="pt-12">
                  <TabsList className="bg-transparent border-b w-full justify-start rounded-none h-auto p-0 gap-12">
                    <TabsTrigger
                      value="details"
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-gold data-[state=active]:bg-transparent px-0 py-4 font-bold text-xs uppercase tracking-[0.3em] transition-all"
                    >
                      Details
                    </TabsTrigger>
                    <TabsTrigger
                      value="shipping"
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-gold data-[state=active]:bg-transparent px-0 py-4 font-bold text-xs uppercase tracking-[0.3em] transition-all"
                    >
                      Shipping & Returns
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="details" className="pt-8 space-y-6">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                      {product.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 text-muted-foreground font-light"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                  <TabsContent
                    value="shipping"
                    className="pt-8 text-muted-foreground leading-relaxed font-light space-y-4"
                  >
                    <p>
                      Free standard shipping on all orders over ₦100,000. Orders
                      are typically processed within 2-3 business days.
                    </p>
                    <p>
                      Returns are accepted within 7 days of delivery for unworn
                      items with original tags. Bespoke items are final sale.
                    </p>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
