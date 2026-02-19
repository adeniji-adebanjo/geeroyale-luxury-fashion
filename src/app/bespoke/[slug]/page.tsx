"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronRight, Check } from "lucide-react";
import { motion } from "framer-motion";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { bespokeCollections } from "@/lib/data/bespoke-data";
import { Button } from "@/components/ui/button";

export default function BespokeCollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const collection = bespokeCollections.find((c) => c.slug === slug);

  if (!collection) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col font-sans bg-white">
      <Navbar />

      <div className="grow">
        {/* Breadcrumbs */}
        <div className="bg-cream/30 py-6 border-b">
          <div className="container mx-auto px-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-navy/40">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/bespoke" className="hover:text-gold transition-colors">
              Bespoke
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">{collection.name}</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center overflow-hidden bg-navy">
          <div className="absolute inset-0 z-0">
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full h-full"
            >
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-linear-to-b from-navy/50 via-navy/80 to-navy" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl space-y-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-block text-gold uppercase tracking-[0.4em] font-bold text-xs"
              >
                The Eklipsso Collection
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-6xl md:text-8xl font-serif font-bold text-white leading-tight"
              >
                {collection.name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-white/70 italic font-light font-serif"
              >
                "{collection.description}"
              </motion.p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-12"
              >
                <div className="space-y-8">
                  <h2 className="text-4xl font-serif font-bold text-navy leading-tight">
                    A Story of{" "}
                    <span className="italic text-gold">Craftsmanship</span>
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                    {collection.fullDescription}
                  </p>
                </div>

                <div className="space-y-8 bg-cream/50 p-10 rounded-sm border border-navy/5">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-navy border-b border-navy/10 pb-4">
                    The Inspiration
                  </h3>
                  <p className="text-lg italic font-serif text-navy/80">
                    {collection.inspiration}
                  </p>
                </div>

                <div className="pt-8">
                  <Button
                    size="lg"
                    className="bg-navy hover:bg-navy/90 text-white font-bold uppercase tracking-[0.3em] h-16 px-12 group"
                  >
                    Book Bespoke Consultation
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-16"
              >
                <div className="aspect-3/4 overflow-hidden shadow-2xl rounded-sm">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="space-y-8">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                    Signature Details
                  </h3>
                  <ul className="grid grid-cols-1 gap-6">
                    {collection.details.map((detail, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-4 text-navy group"
                      >
                        <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="text-lg font-light tracking-wide">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-navy text-white text-center overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,var(--color-gold)_0%,transparent_70%)]" />
          </div>
          <div className="container mx-auto px-4 relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold italic">
              Experience the Geeroyal Distinction
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto font-light text-lg">
              Every bespoke garment is a collaborative journey between our
              master tailors and your unique vision.
            </p>
            <div className="pt-4">
              <Link href="/bespoke">
                <Button
                  variant="outline"
                  className="border-white/20 hover:bg-white/5 text-white font-bold uppercase tracking-[0.3em] h-16 px-12"
                >
                  View All Collections
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
