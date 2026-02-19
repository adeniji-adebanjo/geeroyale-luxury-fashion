"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden bg-navy text-white font-sans">
      {/* Background with luxury gradient and subtle texture */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-gold)_0%,transparent_70%)] opacity-10" />
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Fashion Background"
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-linear-to-b from-navy/50 via-navy/80 to-navy" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-gold uppercase tracking-[0.4em] font-medium text-sm mb-4">
              Est. 2014 — Lagos, Nigeria
            </span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold leading-tight">
              Beautifully <span className="italic text-gold">Crafted</span>{" "}
              <br />
              Luxury Wears.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-white/70 max-w-2xl leading-relaxed font-light"
          >
            Experience the pinnacle of African craftsmanship and contemporary
            luxury fashion. Tailored to perfection for the modern man.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 pt-8"
          >
            <Button
              size="lg"
              className="bg-gold hover:bg-gold/90 text-navy font-bold uppercase tracking-[0.2em] h-16 px-12 text-sm shadow-[0_10px_30px_-10px_rgba(212,175,55,0.4)] transition-all hover:translate-y-[-2px] cursor-pointer"
            >
              Shop Collection
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 hover:bg-white/5 text-white font-bold uppercase tracking-[0.2em] h-16 px-12 text-sm backdrop-blur-sm transition-all hover:translate-y-[-2px] cursor-pointer"
            >
              The Bespoke Experience
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 rotate-90 origin-left ml-4">
          Scroll
        </span>
        <div className="w-px h-12 bg-linear-to-b from-gold/50 to-transparent" />
      </motion.div>
    </section>
  );
}
