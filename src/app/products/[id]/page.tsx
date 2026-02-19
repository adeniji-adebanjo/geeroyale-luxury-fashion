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
} from "lucide-react";
import { useState } from "react";

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
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow">
        {/* Breadcrumbs */}
        <div className="bg-cream/30 py-4 border-b">
          <div className="container mx-auto px-4 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link
              href="/ready-to-wear"
              className="hover:text-gold transition-colors"
            >
              {product.category}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-navy font-medium">{product.name}</span>
          </div>
        </div>

        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="aspect-3/4 relative overflow-hidden rounded-sm bg-muted shadow-sm">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Thumbnails (Mocked) */}
                <div className="grid grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="aspect-square relative overflow-hidden rounded-sm bg-muted cursor-pointer border hover:border-gold transition-all"
                    >
                      <Image
                        src={product.image}
                        alt=""
                        fill
                        className="object-cover opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="outline"
                      className="text-gold border-gold uppercase tracking-widest"
                    >
                      {product.category}
                    </Badge>
                    {product.rating && (
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Star className="h-4 w-4 fill-gold text-gold" />
                        <span className="font-medium text-navy">
                          {product.rating}
                        </span>
                        <span>(12 Reviews)</span>
                      </div>
                    )}
                  </div>
                  <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy">
                    {product.name}
                  </h1>
                  <p className="text-3xl font-sans font-bold text-navy">
                    {product.currency}
                    {product.price.toLocaleString()}
                  </p>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {product.description}
                </p>

                {/* Options */}
                <div className="space-y-6 pt-6 border-t">
                  {/* Colors */}
                  <div className="space-y-3">
                    <Label className="uppercase tracking-widest text-xs font-bold">
                      Color: <span className="text-navy">{selectedColor}</span>
                    </Label>
                    <RadioGroup
                      value={selectedColor}
                      onValueChange={setSelectedColor}
                      className="flex gap-3"
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
                            className={`w-10 h-10 rounded-full border-2 cursor-pointer flex items-center justify-center transition-all ${selectedColor === color ? "border-navy shadow-md scale-110" : "border-transparent"}`}
                            style={{
                              backgroundColor: color
                                .toLowerCase()
                                .replace(" ", ""),
                            }}
                          >
                            {/* Add logic for background colors based on name if needed */}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Sizes */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label className="uppercase tracking-widest text-xs font-bold">
                        Size: <span className="text-navy">{selectedSize}</span>
                      </Label>
                      <SizeChart />
                    </div>
                    <RadioGroup
                      value={selectedSize}
                      onValueChange={setSelectedSize}
                      className="flex flex-wrap gap-3"
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
                            className={`min-w-[50px] h-10 px-3 flex items-center justify-center border transition-all cursor-pointer ${selectedSize === size ? "bg-navy text-white border-navy ring-1 ring-navy ring-offset-2" : "bg-white text-navy hover:border-gold"}`}
                          >
                            {size}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Quantity & Add to Cart */}
                  <div className="flex items-center gap-4 pt-4">
                    <div className="flex items-center border h-14 bg-white">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="hover:bg-transparent hover:text-gold"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-12 text-center font-bold">
                        {quantity}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setQuantity(quantity + 1)}
                        className="hover:bg-transparent hover:text-gold"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button
                      onClick={handleAddToCart}
                      className={`flex-1 h-14 uppercase tracking-widest font-bold text-sm transition-all duration-300 ${added ? "bg-green-600 hover:bg-green-600 ring-2 ring-green-600 ring-offset-2" : "bg-navy hover:bg-navy/90"}`}
                      disabled={added}
                    >
                      {added ? (
                        <>
                          <Check className="h-5 w-5 mr-2" /> Added to Cart
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="h-5 w-5 mr-2" /> Add to Cart
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                {/* Tabs */}
                <Tabs defaultValue="details" className="pt-8">
                  <TabsList className="bg-transparent border-b w-full justify-start rounded-none h-auto p-0 gap-8">
                    <TabsTrigger
                      value="details"
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-gold data-[state=active]:bg-transparent px-0 py-4 font-bold text-xs uppercase tracking-widest"
                    >
                      Details
                    </TabsTrigger>
                    <TabsTrigger
                      value="shipping"
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-gold data-[state=active]:bg-transparent px-0 py-4 font-bold text-xs uppercase tracking-widest"
                    >
                      Shipping & Returns
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="details" className="pt-6 space-y-4">
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {product.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </TabsContent>
                  <TabsContent
                    value="shipping"
                    className="pt-6 text-muted-foreground leading-relaxed"
                  >
                    <p>
                      Free standard shipping on all orders over ₦100,000. Orders
                      are typically processed within 2-3 business days.
                    </p>
                    <p className="mt-4">
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
