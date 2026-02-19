"use client";

import Link from "next/link";
import Image from "next/image";
import { Star, ShoppingCart, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/lib/data/mock-products";
import { useState } from "react";
import { useCart } from "@/lib/providers/cart-provider";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const size = product.sizes[0] || "Standard";
    const color = product.colors[0] || "Default";
    addToCart(product, size, color);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="group overflow-hidden border-none shadow-none bg-transparent hover:shadow-xl transition-all duration-500 rounded-sm">
        <CardContent className="p-0 relative aspect-3/4 overflow-hidden rounded-sm bg-muted shadow-sm">
          <Link href={`/products/${product.id}`}>
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </Link>
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <Button
            onClick={handleAddToCart}
            variant="secondary"
            size="icon"
            className={`absolute bottom-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ${added ? "bg-green-600 text-white" : "bg-white hover:bg-gold hover:text-navy shadow-lg"}`}
            disabled={added}
          >
            {added ? (
              <Check className="h-5 w-5" />
            ) : (
              <ShoppingCart className="h-5 w-5" />
            )}
          </Button>
          {product.category === "Bespoke" && (
            <Badge className="absolute top-4 left-4 bg-gold text-navy hover:bg-gold shadow-md">
              BESPOKE
            </Badge>
          )}
        </CardContent>
        <CardFooter className="flex flex-col items-start pt-4 px-0 pb-0">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
            {product.category}
          </p>
          <h3 className="font-serif text-lg font-medium group-hover:text-gold transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center justify-between w-full mt-2">
            <p className="font-sans font-bold text-lg text-navy">
              {product.currency}
              {product.price.toLocaleString()}
            </p>
            {product.rating && (
              <div className="flex items-center text-xs text-muted-foreground bg-cream px-2 py-1 rounded-full">
                <Star className="h-3 w-3 fill-gold text-gold mr-1" />
                <span className="font-bold">{product.rating}</span>
              </div>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
