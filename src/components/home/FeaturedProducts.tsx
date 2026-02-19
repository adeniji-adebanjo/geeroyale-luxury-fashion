import { mockProducts } from "@/lib/data/mock-products";
import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function FeaturedProducts() {
  const products = mockProducts.slice(0, 4);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy">
              Ready-to-wear
            </h2>
            <p className="text-muted-foreground max-w-md">
              Check out our latest ready-to-wear collections, meticulously
              crafted to the highest standards.
            </p>
          </div>
          <Button
            variant="link"
            className="text-navy font-bold hover:text-gold p-0 flex items-center gap-2 h-auto text-lg transition-all decoration-gold underline-offset-8"
          >
            VIEW ALL PRODUCTS <ArrowRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
