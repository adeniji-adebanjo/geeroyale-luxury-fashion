import { ShieldCheck, Award, Gem, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Gem className="h-8 w-8" />,
    title: "Genuinely Crafted",
    description:
      "Emphasizing the high quality and skill involved in creating each garment.",
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Exceptional Quality",
    description:
      "Highlighting the premium materials and meticulous attention to detail.",
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Elegant Design",
    description:
      "Showcasing the sophisticated and timeless aesthetic of the brand.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "Authentic Luxury",
    description: "Reinforcing the genuine and high-end nature of the brand.",
  },
];

export default function DiscoverQuality() {
  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-navy/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy">
            Discover True Quality
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Geeroyal offers more than just clothing; we offer an investment in
            yourself. Our garments are designed to elevate your look, boost your
            confidence, and empower you to achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4 group"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-gold shadow-sm group-hover:bg-gold group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-navy">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
