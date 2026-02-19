"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { bespokeCollections } from "@/lib/data/bespoke-data";

export default function Bespoke() {
  return (
    <main className="min-h-screen flex flex-col font-sans bg-white">
      <Navbar />

      <div className="grow">
        {/* Luxury Hero Section */}
        <section className="relative h-[70vh] flex items-center overflow-hidden bg-navy text-white">
          <div className="absolute inset-0 z-0">
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full h-full"
            >
              <img
                src="https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=2000&auto=format&fit=crop"
                alt="Luxury Tailoring"
                className="w-full h-full object-cover opacity-50 grayscale"
              />
            </motion.div>
            <div className="absolute inset-0 bg-linear-to-b from-navy/50 via-navy/80 to-navy" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl space-y-6"
            >
              <span className="text-gold uppercase tracking-[0.4em] font-bold text-xs">
                The Art of Fine Tailoring
              </span>
              <h1 className="text-6xl md:text-8xl font-serif font-bold leading-tight">
                Made to <span className="italic text-gold">Measure</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/70 max-w-2xl italic font-serif font-light leading-relaxed">
                "Centered on bespoke tailoring and thoughtfully curated
                collections, Geeroyal defines the pinnacle of modern African
                luxury."
              </p>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-10"
              >
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-6xl font-serif font-bold text-navy leading-tight">
                    Exceptional <br />
                    <span className="text-gold italic">Craftsmanship</span>
                  </h2>
                  <div className="w-24 h-1 bg-gold" />
                </div>

                <div className="space-y-6 text-xl text-muted-foreground font-light leading-relaxed">
                  <p>
                    At Geeroyal, we believe that every man deserves a garment
                    that is as unique as his own journey. Our bespoke service is
                    an immersive experience where your preferences meet our
                    expertise.
                  </p>
                  <p>
                    From selecting the finest fabrics to the final fitting, our
                    master tailors ensure every stitch reflects our commitment
                    to excellence and your personal legacy.
                  </p>
                </div>

                <div className="pt-6">
                  <Button
                    size="lg"
                    className="bg-navy hover:bg-navy/90 text-white font-bold uppercase tracking-[0.3em] h-20 px-16 text-sm shadow-2xl transition-all hover:translate-y-[-2px]"
                  >
                    Book A Consultation
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative"
              >
                <div className="aspect-square bg-cream rounded-sm overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1594932224011-042041c19451?q=80&w=1200&auto=format&fit=crop"
                    alt="Bespoke Detail"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2s]"
                  />
                </div>
                <div className="absolute -bottom-10 -left-10 bg-gold p-12 text-navy hidden md:block shadow-2xl">
                  <p className="font-serif text-3xl font-bold leading-tight">
                    Over 10,000 <br /> Hours of <br /> Tailoring.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Collections Grid */}
        <section className="py-24 md:py-32 bg-cream/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy">
                The Eklipsso <span className="italic text-gold">Series</span>
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto" />
              <p className="text-muted-foreground uppercase tracking-[0.3em] text-xs font-bold pt-4">
                Explore Our Signature Made-to-Measure Creations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {bespokeCollections.map((collection, index) => (
                <motion.div
                  key={collection.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={`/bespoke/${collection.slug}`}
                    className="group block h-full"
                  >
                    <div className="bg-white border border-navy/5 shadow-sm hover:shadow-2xl transition-all duration-500 rounded-sm overflow-hidden h-full flex flex-col">
                      <div className="aspect-3/4 overflow-hidden relative">
                        <img
                          src={collection.image}
                          alt={collection.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-colors duration-500" />
                      </div>
                      <div className="p-8 space-y-4 grow flex flex-col">
                        <div className="space-y-2 grow">
                          <h3 className="font-serif text-2xl font-bold text-navy group-hover:text-gold transition-colors italic">
                            {collection.name}
                          </h3>
                          <p className="text-sm text-muted-foreground font-light leading-relaxed">
                            {collection.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-gold font-bold uppercase tracking-[0.2em] text-[10px] pt-6 group-hover:translate-x-2 transition-transform">
                          Discover Piece <ArrowRight className="h-3 w-3" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Invitation Banner */}
        <section className="py-32 bg-navy text-white text-center">
          <div className="container mx-auto px-4 space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block p-4 border border-gold/30 rounded-full mb-4"
            >
              <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold">
                Private Appointment
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-serif font-bold">
              Begin Your <span className="italic text-gold">Legacy</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto font-light text-lg">
              Our bespoke journey is tailored for those who demand the zenith of
              craftsmanship and cultural expression.
            </p>
            <div className="pt-8 flex flex-col sm:flex-row justify-center gap-6">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold/90 text-navy font-bold uppercase tracking-[0.3em] h-16 px-12"
              >
                Visit Our Lagos Office
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 hover:bg-white/5 text-white font-bold uppercase tracking-[0.3em] h-16 px-12"
              >
                Virtual Consultation
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
