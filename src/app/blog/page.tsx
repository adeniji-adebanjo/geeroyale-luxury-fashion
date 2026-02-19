import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      title: "Geeroyal Man Spotlight: Inspiring Stories of Success",
      excerpt:
        "Celebrating the personal style and achievements of our most distinguished clients.",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
      date: "Oct 12, 2025",
    },
    {
      title: "The Essential Guide to Building a Timeless Wardrobe",
      excerpt:
        "Discover the key pieces every modern man needs to command respect in any room.",
      image:
        "https://images.unsplash.com/photo-1594932224828-b4b059b6f68d?q=80&w=800&auto=format&fit=crop",
      date: "Oct 05, 2025",
    },
    {
      title: "Tailoring 101: The Perfect Fit for Every Man",
      excerpt:
        "Understanding the nuances of fit and why it's the most important aspect of your outfit.",
      image:
        "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=800&auto=format&fit=crop",
      date: "Sep 28, 2025",
    },
    {
      title: "Luxury Fabrics: Understanding Quality in Menswear",
      excerpt: "From Egyptian cotton to Merino wool, know what you're wearing.",
      image:
        "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?q=80&w=800&auto=format&fit=crop",
      date: "Sep 15, 2025",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-cream/30">
        <section className="py-20 bg-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Latest from the Blog
            </h1>
            <p className="text-white/60 max-w-xl mx-auto uppercase tracking-widest text-sm">
              The freshest and most exciting news from the world of Geeroyale
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {posts.map((post, idx) => (
                <Card
                  key={idx}
                  className="group overflow-hidden border-none bg-transparent shadow-none cursor-pointer"
                >
                  <div className="aspect-video relative overflow-hidden rounded-sm mb-6">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardContent className="p-0 space-y-4">
                    <p className="text-gold text-sm font-semibold uppercase tracking-widest">
                      {post.date}
                    </p>
                    <h2 className="text-3xl font-serif font-bold text-navy group-hover:text-gold transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {post.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter className="p-0 pt-6">
                    <Button
                      variant="link"
                      className="p-0 text-navy font-bold flex items-center gap-2 group-hover:text-gold underline-offset-8 transition-all"
                    >
                      READ MORE <ArrowRight className="h-5 w-5" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
