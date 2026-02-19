import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?q=80&w=2000&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container relative mx-auto h-full flex flex-col justify-center px-4">
        <div className="max-w-2xl space-y-6">
          <p className="text-gold uppercase tracking-[0.3em] font-medium animate-in fade-in slide-in-from-bottom-4 duration-700">
            Premium Menswear
          </p>
          <h1 className="text-5xl md:text-7xl font-serif text-white font-bold leading-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            Beautifully Crafted <br /> Luxury Wears
          </h1>
          <p className="text-xl text-white/80 max-w-lg leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
            Discover a world where style transcends borders. Our expertly
            crafted garments are designed to elevate your look and boost your
            confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-in fade-in slide-in-from-bottom-16 duration-700 delay-300">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold/90 text-navy font-bold uppercase tracking-widest h-14 px-8"
            >
              Explore Collection
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-navy font-bold uppercase tracking-widest h-14 px-8"
            >
              Bespoke Service
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/50 text-xs uppercase tracking-widest">
          Scroll Down
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
