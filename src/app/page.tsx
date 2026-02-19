import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import DiscoverQuality from "@/components/home/DiscoverQuality";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Hero />
        <FeaturedProducts />
        <DiscoverQuality />

        {/* Bespoke Section */}
        <section className="py-24 bg-navy text-white overflow-hidden relative">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8 relative z-10">
              <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
                Do You Need A <span className="text-gold">Bespoke</span> Outfit?
              </h2>
              <p className="text-xl text-white/70 leading-relaxed">
                Geeroyal Luxury Fashion offers Bespoke wears tailored to your
                interest. Our mission is centered on bespoke tailoring and
                thoughtfully curated collections.
              </p>
              <Button
                size="lg"
                className="bg-gold hover:bg-gold/90 text-navy font-bold uppercase tracking-widest h-14 px-12"
              >
                Book An Appointment
              </Button>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-sm border-8 border-white/5">
                <img
                  src="https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=800&auto=format&fit=crop"
                  alt="Bespoke Tailoring"
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/20 rounded-full blur-3xl opacity-50" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold/20 rounded-full blur-3xl opacity-50" />
            </div>
          </div>
        </section>

        {/* Brand Purpose / Vision */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-12">
            <div className="space-y-4">
              <span className="text-gold uppercase tracking-[0.3em] font-medium">
                Our Vision
              </span>
              <h2 className="text-4xl font-serif font-bold text-navy italic">
                "Redefining the fashion landscape through diversity and
                creativity."
              </h2>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed italic">
              "We aim to inspire individuals worldwide to embrace cultural
              fusion, celebrate their unique identities, and make a bold fashion
              statement."
            </p>
            <div className="pt-8 border-t border-border">
              <p className="font-serif text-2xl font-bold tracking-tighter text-navy opacity-30">
                GEEROYALE LUXURY FASHION
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
