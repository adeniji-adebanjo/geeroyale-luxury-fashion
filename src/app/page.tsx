"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import DiscoverQuality from "@/components/home/DiscoverQuality";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <div className="grow">
        <Hero />
        <FeaturedProducts />
        <DiscoverQuality />

        {/* Bespoke Section */}
        <section className="py-32 bg-navy text-white overflow-hidden relative font-sans">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-24 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 space-y-10"
            >
              <div className="space-y-4">
                <span className="text-gold uppercase tracking-[0.4em] font-medium text-sm">
                  Individual Craftsmanship
                </span>
                <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
                  Do You Need A{" "}
                  <span className="text-gold italic font-normal">Bespoke</span>{" "}
                  Outfit?
                </h2>
              </div>
              <p className="text-xl text-white/60 leading-relaxed font-light">
                Geeroyal Luxury Fashion offers Bespoke wears tailored to your
                interest. Our mission is centered on bespoke tailoring and
                thoughtfully curated collections that celebrate your identity.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold/90 text-navy font-bold uppercase tracking-[0.2em] h-16 px-12 text-sm shadow-[0_10px_30px_-10px_rgba(212,175,55,0.4)] cursor-pointer"
                >
                  Book An Appointment
                </Button>
                <Link href="/bespoke">
                  <Button
                    size="lg"
                    variant="ghost"
                    className="text-white hover:text-gold hover:bg-white/5 font-bold uppercase tracking-[0.2em] h-16 px-8 text-sm cursor-pointer"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative aspect-4/5 w-full max-w-lg mx-auto overflow-hidden rounded-sm border-[1px] border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=800&auto=format&fit=crop"
                  alt="Bespoke Tailoring"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-gold/10 rounded-full blur-[100px] opacity-50" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-navy/20 rounded-full blur-[100px] opacity-50 border border-gold/10" />
            </motion.div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,_var(--color-gold)_0%,_transparent_50%)] opacity-[0.03]" />
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
