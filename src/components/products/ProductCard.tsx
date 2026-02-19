import Image from "next/image";
import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/lib/data/mock-products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden border-none shadow-none bg-transparent">
      <CardContent className="p-0 relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        <Button
          variant="secondary"
          size="icon"
          className="absolute bottom-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white hover:bg-gold hover:text-navy"
        >
          <ShoppingCart className="h-5 w-5" />
        </Button>
        {product.category === "Bespoke" && (
          <Badge className="absolute top-4 left-4 bg-gold text-navy hover:bg-gold">
            BESPOKE
          </Badge>
        )}
      </CardContent>
      <CardFooter className="flex flex-col items-start pt-4 px-0 pb-0">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
          {product.category}
        </p>
        <h3 className="font-serif text-lg font-medium group-hover:text-gold transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-between w-full mt-2">
          <p className="font-sans font-semibold text-lg">
            {product.currency}
            {product.price.toLocaleString()}
          </p>
          {product.rating && (
            <div className="flex items-center text-xs text-muted-foreground">
              <Star className="h-3 w-3 fill-gold text-gold mr-1" />
              <span>{product.rating}</span>
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
