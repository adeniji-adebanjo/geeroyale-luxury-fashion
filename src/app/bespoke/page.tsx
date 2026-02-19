import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

export default function Bespoke() {
  const collections = [
    "Ariel",
    "Haniel",
    "Dìgìolá",
    "Eni-Ayo",
    "Fanan",
    "Cairo",
    "Lizza",
    "Manda",
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <section className="py-24 bg-navy text-white relative h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <img
              src="https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=2000&auto=format&fit=crop"
              alt="Tailoring"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Made-to-measure
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto italic">
              "Centered on bespoke tailoring and thoughtfully curated
              collections."
            </p>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy">
                  Exceptional Craftsmanship
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    At Geeroyal, we believe that every man deserves a garment
                    that is as unique as his own journey. Our bespoke service is
                    an immersive experience where your preferences meet our
                    expertise.
                  </p>
                  <p>
                    From selecting the finest fabrics to the final fitting, our
                    master tailors ensure every stitch reflects our commitment
                    to excellence.
                  </p>
                </div>
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold/90 text-navy font-bold uppercase tracking-widest h-14 px-12"
                >
                  Book A Consultation
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {collections.map((name) => (
                  <div
                    key={name}
                    className="p-6 border border-border bg-cream text-center group hover:bg-gold hover:border-gold transition-all duration-300"
                  >
                    <p className="font-serif text-xl font-medium text-navy group-hover:text-white">
                      {name}
                    </p>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mt-2 group-hover:text-white/70">
                      Collection
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
