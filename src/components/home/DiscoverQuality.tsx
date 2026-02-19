"use client";

import { ShieldCheck, Award, Gem, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Gem className="h-10 w-10" />,
    title: "Genuinely Crafted",
    description:
      "Emphasizing the high quality and skill involved in creating each garment.",
  },
  {
    icon: <Award className="h-10 w-10" />,
    title: "Exceptional Quality",
    description:
      "Highlighting the premium materials and meticulous attention to detail.",
  },
  {
    icon: <Sparkles className="h-10 w-10" />,
    title: "Elegant Design",
    description:
      "Showcasing the sophisticated and timeless aesthetic of the brand.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10" />,
    title: "Authentic Luxury",
    description: "Reinforcing the genuine and high-end nature of the brand.",
  },
];

export default function DiscoverQuality() {
  return (
    <section className="py-32 bg-cream/50 relative overflow-hidden font-sans">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-navy/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-[0.4em] font-medium text-sm"
          >
            The Geeroyale Difference
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-serif font-bold text-navy"
          >
            Discover True Quality
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-[2px] bg-gold mx-auto"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground leading-relaxed font-light"
          >
            Geeroyale offers more than just clothing; we offer an investment in
            yourself. Our garments are designed to elevate your look and empower
            your journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center space-y-6 group"
            >
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-gold shadow-xl group-hover:bg-navy group-hover:text-gold transition-all duration-500 transform group-hover:scale-110">
                {feature.icon}
              </div>
              <div className="space-y-3">
                <h3 className="font-serif text-2xl font-bold text-navy">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
