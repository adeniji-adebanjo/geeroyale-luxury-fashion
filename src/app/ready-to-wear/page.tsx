import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/products/ProductCard";
import { mockProducts } from "@/lib/data/mock-products";

export default function ReadyToWear() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-navy mb-4">
              Ready-to-wear
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our curated collection of premium menswear, meticulously
              crafted for the modern gentleman who values both style and
              comfort.
            </p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {mockProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
